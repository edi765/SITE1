// Sistem traduceri bilingv (RO/EN)
const translations = {
  ro: {
    // Navigation
    'nav.home': 'Acasă',
    'nav.b2b': 'B2B',
    'nav.b2c': 'B2C',
    'nav.businesses': 'Businessuri',
    'nav.services': 'Servicii',
    'nav.investors': 'Investitori',
    'nav.calls': 'Call-uri',
    'nav.ai': 'AI',
    'nav.dashboard': 'Dashboard',
    
    // Common
    'common.login': 'Autentificare',
    'common.register': 'Înregistrare',
    'common.logout': 'Deconectare',
    'common.profile': 'Profil',
    'common.subscriptions': 'Abonamentele mele',
    'common.settings': 'Setări',
    'common.close': 'Închide',
    'common.save': 'Salvează',
    'common.cancel': 'Anulează',
    'common.edit': 'Editează',
    'common.delete': 'Șterge',
    'common.search': 'Caută...',
    
    // Hero
    'hero.title': 'Conectăm afaceri, clienți și investitori într-un singur ecosistem digital',
    'hero.subtitle': 'Platformă premium pentru oportunități reale. Descoperă parteneri validați, investiții selectate și servicii de înaltă calitate, într-un mediu luxury, sigur și profesionist.',
    'hero.start': 'Începe acum',
    'hero.forCompanies': 'Pentru firme',
    'hero.forPeople': 'Pentru persoane',
    
    // B2B/B2C Modal
    'modal.b2b.title': 'Bun venit la GetASubscription!',
    'modal.b2b.subtitle': 'Selectează tipul de abonament care te interesează:',
    'modal.b2b.company': 'Firmă',
    'modal.b2b.companyDesc': 'Abonamente profesionale pentru companii: servicii software, marketing, evenimente, fonduri europene și multe altele.',
    'modal.b2b.person': 'Persoană fizică',
    'modal.b2b.personDesc': 'Mystery Boxes și abonamente entertainment: LEGO, Funko Pops, Action Figures, Magic: The Gathering și multe altele!',
    
    // Forms
    'form.name': 'Nume complet',
    'form.email': 'Email',
    'form.phone': 'Telefon',
    'form.address': 'Adresă completă',
    'form.message': 'Mesaj sau întrebări (opțional)',
    'form.submit': 'Trimite',
    'form.required': 'Câmp obligatoriu',
    
    // Subscription
    'subscription.activate': 'Activează abonament',
    'subscription.selectTier': 'Selectează tier',
    'subscription.theme': 'Temă (unele au costuri suplimentare)',
    'subscription.packaging': 'Ambalare',
    'subscription.shipping': 'Transport',
    'subscription.distance': 'Distanță (km)',
    'subscription.method': 'Metodă de livrare',
    'subscription.country': 'Țară',
    'subscription.seeContents': 'Vreau să văd conținutul înainte de comandă (nu Mystery Box)',
    'subscription.basePrice': 'Preț de bază:',
    'subscription.total': 'Total/lună:',
    
    // Dashboard
    'dashboard.title': 'Dashboard',
    'dashboard.activeSubscriptions': 'Abonamente active',
    'dashboard.totalSpent': 'Total cheltuit',
    'dashboard.totalOrders': 'Comenzi totale',
    'dashboard.nextPayment': 'Următorul plată',
    'dashboard.subscriptions': 'Abonamente active',
    'dashboard.history': 'Istoric comenzi',
    'dashboard.profile': 'Profil',
    'dashboard.noSubscriptions': 'Nu ai abonamente active.',
    'dashboard.explore': 'Explorează abonamente',
    
    // Affiliate
    'affiliate.title': 'Devino Afiliat',
    'affiliate.subtitle': 'Câștigă comisioane pentru fiecare vânzare sau contract pe care îl generezi!',
    'affiliate.apply': 'Aplică acum',
    'affiliate.commissions': 'Comisioane competitive',
    'affiliate.tracking': 'Urmărire în timp real',
    'affiliate.support': 'Suport dedicat',
    
    // Admin
    'admin.title': 'Panou Administrare',
    'admin.clients': 'Clienți',
    'admin.subscriptions': 'Abonamente',
    'admin.leads': 'Leaduri',
    'admin.affiliates': 'Afiliați',
    'admin.settings': 'Setări',
    
    // Footer
    'footer.copyright': 'Toate drepturile rezervate.',
    'footer.navigation': 'Navigație',
    'footer.resources': 'Resurse',
    'footer.social': 'Social'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.b2b': 'B2B',
    'nav.b2c': 'B2C',
    'nav.businesses': 'Businesses',
    'nav.services': 'Services',
    'nav.investors': 'Investors',
    'nav.calls': 'Calls',
    'nav.ai': 'AI',
    'nav.dashboard': 'Dashboard',
    
    // Common
    'common.login': 'Login',
    'common.register': 'Register',
    'common.logout': 'Logout',
    'common.profile': 'Profile',
    'common.subscriptions': 'My Subscriptions',
    'common.settings': 'Settings',
    'common.close': 'Close',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.search': 'Search...',
    
    // Hero
    'hero.title': 'We connect businesses, clients and investors in a single digital ecosystem',
    'hero.subtitle': 'Premium platform for real opportunities. Discover validated partners, selected investments and high-quality services, in a luxury, safe and professional environment.',
    'hero.start': 'Get Started',
    'hero.forCompanies': 'For Companies',
    'hero.forPeople': 'For People',
    
    // B2B/B2C Modal
    'modal.b2b.title': 'Welcome to GetASubscription!',
    'modal.b2b.subtitle': 'Select the type of subscription that interests you:',
    'modal.b2b.company': 'Company',
    'modal.b2b.companyDesc': 'Professional subscriptions for companies: software services, marketing, events, European funds and much more.',
    'modal.b2b.person': 'Individual',
    'modal.b2b.personDesc': 'Mystery Boxes and entertainment subscriptions: LEGO, Funko Pops, Action Figures, Magic: The Gathering and much more!',
    
    // Forms
    'form.name': 'Full Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.address': 'Full Address',
    'form.message': 'Message or questions (optional)',
    'form.submit': 'Submit',
    'form.required': 'Required field',
    
    // Subscription
    'subscription.activate': 'Activate Subscription',
    'subscription.selectTier': 'Select Tier',
    'subscription.theme': 'Theme (some have additional costs)',
    'subscription.packaging': 'Packaging',
    'subscription.shipping': 'Shipping',
    'subscription.distance': 'Distance (km)',
    'subscription.method': 'Delivery Method',
    'subscription.country': 'Country',
    'subscription.seeContents': 'I want to see the contents before ordering (not Mystery Box)',
    'subscription.basePrice': 'Base Price:',
    'subscription.total': 'Total/month:',
    
    // Dashboard
    'dashboard.title': 'Dashboard',
    'dashboard.activeSubscriptions': 'Active Subscriptions',
    'dashboard.totalSpent': 'Total Spent',
    'dashboard.totalOrders': 'Total Orders',
    'dashboard.nextPayment': 'Next Payment',
    'dashboard.subscriptions': 'Active Subscriptions',
    'dashboard.history': 'Order History',
    'dashboard.profile': 'Profile',
    'dashboard.noSubscriptions': 'You have no active subscriptions.',
    'dashboard.explore': 'Explore Subscriptions',
    
    // Affiliate
    'affiliate.title': 'Become an Affiliate',
    'affiliate.subtitle': 'Earn commissions for every sale or contract you generate!',
    'affiliate.apply': 'Apply Now',
    'affiliate.commissions': 'Competitive Commissions',
    'affiliate.tracking': 'Real-time Tracking',
    'affiliate.support': 'Dedicated Support',
    
    // Admin
    'admin.title': 'Admin Panel',
    'admin.clients': 'Clients',
    'admin.subscriptions': 'Subscriptions',
    'admin.leads': 'Leads',
    'admin.affiliates': 'Affiliates',
    'admin.settings': 'Settings',
    
    // Footer
    'footer.copyright': 'All rights reserved.',
    'footer.navigation': 'Navigation',
    'footer.resources': 'Resources',
    'footer.social': 'Social'
  }
};

// Language switcher
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'ro';
    this.init();
  }
  
  init() {
    // Set initial language
    this.setLanguage(this.currentLang);
    
    // Create language switcher
    this.createLanguageSwitcher();
  }
  
  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
      const key = el.getAttribute('data-translate-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
  }
  
  getTranslation(key) {
    return translations[this.currentLang]?.[key] || key;
  }
  
  createLanguageSwitcher() {
    // Add to header if not exists
    if (!document.getElementById('languageSwitcher')) {
      const header = document.querySelector('header > div');
      if (header) {
        const switcher = document.createElement('div');
        switcher.id = 'languageSwitcher';
        switcher.className = 'flex items-center gap-2';
        switcher.innerHTML = `
          <button class="lang-btn ${this.currentLang === 'ro' ? 'text-gold4' : 'text-zinc-400'} hover:text-gold4 transition" data-lang="ro">RO</button>
          <span class="text-zinc-500">|</span>
          <button class="lang-btn ${this.currentLang === 'en' ? 'text-gold4' : 'text-zinc-400'} hover:text-gold4 transition" data-lang="en">EN</button>
        `;
        header.appendChild(switcher);
        
        // Event listeners
        switcher.querySelectorAll('.lang-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            this.setLanguage(lang);
            switcher.querySelectorAll('.lang-btn').forEach(b => {
              b.classList.toggle('text-gold4', b.getAttribute('data-lang') === lang);
              b.classList.toggle('text-zinc-400', b.getAttribute('data-lang') !== lang);
            });
          });
        });
      }
    }
  }
}

// Export
if (typeof window !== 'undefined') {
  window.LanguageManager = LanguageManager;
  window.translations = translations;
  
  // Initialize on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.languageManager = new LanguageManager();
    });
  } else {
    window.languageManager = new LanguageManager();
  }
}



