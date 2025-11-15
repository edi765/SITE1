// Sistem tracking afiliați
(function() {
  'use strict';
  
  // Generare link-uri unice pentru afiliați
  function generateAffiliateLink(baseUrl, affiliateId) {
    return `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}ref=affiliate${affiliateId}`;
  }
  
  // Tracking click-uri
  function trackAffiliateClick(affiliateId) {
    const clicks = JSON.parse(localStorage.getItem('affiliateClicks') || '[]');
    clicks.push({
      affiliateId: affiliateId,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    });
    localStorage.setItem('affiliateClicks', JSON.stringify(clicks));
    
    // Update affiliate dashboard data
    const affiliateData = JSON.parse(localStorage.getItem('affiliateData') || '{"clicks":0,"conversions":0,"commissions":0,"available":0,"history":[],"products":[]}');
    affiliateData.clicks = (affiliateData.clicks || 0) + 1;
    localStorage.setItem('affiliateData', JSON.stringify(affiliateData));
  }
  
  // Tracking conversii (când utilizatorul cumpără)
  function trackAffiliateConversion(affiliateId, productName, amount, commissionRate = 0.1) {
    const conversions = JSON.parse(localStorage.getItem('affiliateConversions') || '[]');
    const commission = amount * commissionRate;
    
    conversions.push({
      affiliateId: affiliateId,
      productName: productName,
      amount: amount,
      commission: commission,
      timestamp: Date.now()
    });
    localStorage.setItem('affiliateConversions', JSON.stringify(conversions));
    
    // Update affiliate dashboard data
    const affiliateData = JSON.parse(localStorage.getItem('affiliateData') || '{"clicks":0,"conversions":0,"commissions":0,"available":0,"history":[],"products":[]}');
    affiliateData.conversions = (affiliateData.conversions || 0) + 1;
    affiliateData.commissions = (affiliateData.commissions || 0) + commission;
    affiliateData.available = (affiliateData.available || 0) + commission;
    
    // Add to history
    if (!affiliateData.history) affiliateData.history = [];
    affiliateData.history.push({
      product: productName,
      amount: commission,
      date: new Date().toISOString(),
      status: 'Pending'
    });
    
    // Update products
    if (!affiliateData.products) affiliateData.products = [];
    const productIndex = affiliateData.products.findIndex(p => p.name === productName);
    if (productIndex >= 0) {
      affiliateData.products[productIndex].conversions = (affiliateData.products[productIndex].conversions || 0) + 1;
    } else {
      affiliateData.products.push({
        name: productName,
        conversions: 1
      });
    }
    
    localStorage.setItem('affiliateData', JSON.stringify(affiliateData));
  }
  
  // Verificare și tracking la încărcarea paginii
  function checkAndTrackAffiliate() {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    
    if (ref && ref.startsWith('affiliate')) {
      const affiliateId = ref.replace('affiliate', '');
      trackAffiliateClick(affiliateId);
      localStorage.setItem('currentAffiliateRef', ref);
      
      // Set cookie pentru tracking (dacă e nevoie)
      document.cookie = `affiliate_ref=${ref}; path=/; max-age=${30 * 24 * 60 * 60}`; // 30 zile
    }
  }
  
  // Tracking conversie la submit formular abonament
  function trackSubscriptionConversion(formData) {
    const affiliateRef = localStorage.getItem('currentAffiliateRef') || document.cookie.match(/affiliate_ref=([^;]+)/)?.[1];
    
    if (affiliateRef) {
      const affiliateId = affiliateRef.replace('affiliate', '');
      const productName = formData.name || 'Abonament';
      const amount = parseFloat(formData.total?.replace('$', '') || formData.tier || 0);
      
      trackAffiliateConversion(affiliateId, productName, amount, 0.1); // 10% comision
    }
  }
  
  // Export funcții
  if (typeof window !== 'undefined') {
    window.AffiliateTracking = {
      generateLink: generateAffiliateLink,
      trackClick: trackAffiliateClick,
      trackConversion: trackAffiliateConversion,
      checkAndTrack: checkAndTrackAffiliate,
      trackSubscription: trackSubscriptionConversion
    };
    
    // Auto-track la încărcare
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', checkAndTrackAffiliate);
    } else {
      checkAndTrackAffiliate();
    }
  }
})();



