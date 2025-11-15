// Enhanced Modal with Calculator functionality
(function() {
  'use strict';
  
  let currentSubscription = null;
  let calculator = null;
  
  // Mapare prețuri tieruri pentru fiecare categorie
  const subscriptionTiers = {
    'Longevity Mystery Box': [100, 500, 1000, 5000, 10000],
    'Seturi LEGO': [15, 30, 40, 50, 70, 100, 150, 200, 300, 400, 700, 1000],
    'Funko Pops': [30, 50, 100, 250, 500, 1000],
    'Action Figures': [30, 100, 300, 500, 1000, 3000, 5000],
    'Statuete si figurine Premium': [1000, 2500, 5000, 10000, 20000],
    'Minifigurine': [10, 20, 50, 100, 200, 300, 400, 500, 750, 1000],
    'Magic: The Gathering': [5, 10, 20, 40, 60, 80, 180, 360, 720, 1440],
    'Cafea': [30, 60],
    'Mancare': [20, 30, 50, 100],
    'Controller Cases': [15],
    'Îngrijire Orală': [50, 100, 200, 500],
    'YouTooz': [75, 150, 300],
    'Geek Subscription': [100, 250, 500, 1000],
    'B2B Geek Subscription for Shops': [500, 1000, 2500, 5000]
  };
  
  // Costuri teme
  const themeCosts = {
    'none': 0,
    'marvel': 10,
    'dc': 10,
    'starwars': 15,
    'harrypotter': 12,
    'anime': 8,
    'gaming': 10
  };
  
  // Funcție pentru populare tieruri
  function populateTiers(subscriptionName) {
    const tierContainer = document.getElementById('tierSelection');
    if (!tierContainer) return;
    
    tierContainer.innerHTML = '';
    const tiers = subscriptionTiers[subscriptionName] || [50, 100, 200];
    
    tiers.forEach((price, index) => {
      const tierCard = document.createElement('label');
      tierCard.className = 'border-gold rounded-lg p-3 cursor-pointer hover:shadow-gold-glow transition text-center tier-option';
      tierCard.innerHTML = `
        <input type="radio" name="tierPrice" value="${price}" class="hidden" ${index === 0 ? 'checked' : ''}>
        <div class="font-bold text-gold4 text-lg">$${price.toLocaleString()}</div>
        <div class="text-xs text-zinc-300 mt-1">/lună</div>
      `;
      tierContainer.appendChild(tierCard);
    });
    
    // Setare tier inițial
    document.getElementById('selectedTier').value = tiers[0];
    
    // Event listeners pentru selecție tier
    tierContainer.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', function() {
        document.getElementById('selectedTier').value = this.value;
        updateCalculator();
      });
    });
    
    // Styling pentru selecție
    tierContainer.querySelectorAll('.tier-option').forEach(option => {
      option.addEventListener('click', function() {
        tierContainer.querySelectorAll('.tier-option').forEach(o => {
          o.classList.remove('bg-gold-gradient', 'text-black');
        });
        this.classList.add('bg-gold-gradient', 'text-black');
      });
    });
  }
  
  // Funcție pentru actualizare calculator
  function updateCalculator() {
    if (!calculator) {
      calculator = new SubscriptionCalculator();
    }
    
    const basePrice = parseFloat(document.getElementById('selectedTier').value) || 0;
    const theme = document.getElementById('modalTheme').value;
    const packaging = document.querySelector('input[name="packaging"]:checked')?.value || 'none';
    const distance = parseFloat(document.getElementById('shippingDistance').value) || 0;
    const method = document.getElementById('shippingMethod').value;
    const country = document.getElementById('shippingCountry').value;
    
    calculator.reset()
      .setBasePrice(basePrice)
      .setTheme(theme, themeCosts)
      .setPackaging(packaging)
      .calculateShipping(distance, method, country);
    
    const breakdown = calculator.getBreakdown();
    
    // Actualizare UI
    document.getElementById('calcBasePrice').textContent = `$${breakdown.basePrice.toFixed(2)}`;
    document.getElementById('calcTheme').textContent = `$${breakdown.themeCost.toFixed(2)}`;
    document.getElementById('calcPackaging').textContent = `$${breakdown.packagingCost.toFixed(2)}`;
    document.getElementById('calcShipping').textContent = `$${breakdown.shippingCost.toFixed(2)}`;
    document.getElementById('calcTotal').textContent = `$${breakdown.total.toFixed(2)}`;
  }
  
  // Funcție pentru deschidere modal îmbunătățit
  function openEnhancedModal(title, buttonElement) {
    currentSubscription = title;
    document.getElementById('modalTitle').textContent = 'Activează: ' + (title || 'Abonament');
    document.getElementById('interestForm').reset();
    document.getElementById('modalError').classList.add('hidden');
    document.getElementById('modalSuccess').classList.add('hidden');
    
    // Populare tieruri
    populateTiers(title);
    
    // Reset calculator
    calculator = new SubscriptionCalculator();
    updateCalculator();
    
    // Event listeners pentru calculator
    document.getElementById('modalTheme').addEventListener('change', updateCalculator);
    document.querySelectorAll('input[name="packaging"]').forEach(radio => {
      radio.addEventListener('change', updateCalculator);
    });
    document.getElementById('shippingDistance').addEventListener('input', updateCalculator);
    document.getElementById('shippingMethod').addEventListener('change', updateCalculator);
    document.getElementById('shippingCountry').addEventListener('change', updateCalculator);
    
    // Styling pentru packaging options
    document.querySelectorAll('.packaging-option').forEach(option => {
      option.addEventListener('click', function() {
        document.querySelectorAll('.packaging-option').forEach(o => {
          o.classList.remove('bg-gold-gradient', 'text-black');
        });
        this.classList.add('bg-gold-gradient', 'text-black');
      });
    });
    
    // Afișare modal
    const modal = document.getElementById('interestModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
  
  // Override funcția openModal existentă
  if (typeof window !== 'undefined') {
    // Așteptare ca DOM-ul să fie gata
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        // Replace existing openModal calls
        document.addEventListener('click', function(e) {
          const button = e.target.closest('.open-interest');
          if (button) {
            e.preventDefault();
            const title = button.getAttribute('data-title');
            openEnhancedModal(title, button);
          }
        });
      });
    } else {
      // DOM already loaded
      document.addEventListener('click', function(e) {
        const button = e.target.closest('.open-interest');
        if (button) {
          e.preventDefault();
          const title = button.getAttribute('data-title');
          openEnhancedModal(title, button);
        }
      });
    }
  }
})();



