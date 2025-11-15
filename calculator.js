// Calculator costuri suplimentare pentru abonamente
class SubscriptionCalculator {
  constructor() {
    this.basePrice = 0;
    this.themeCost = 0;
    this.packagingCost = 0;
    this.shippingCost = 0;
    this.customOptions = {};
  }

  // Setare preț de bază
  setBasePrice(price) {
    this.basePrice = parseFloat(price) || 0;
    return this;
  }

  // Calculare costuri teme (unele teme au costuri suplimentare)
  setTheme(theme, themeCosts = {}) {
    this.themeCost = themeCosts[theme] || 0;
    return this;
  }

  // Setare ambalare
  setPackaging(type) {
    const packagingPrices = {
      'none': 0,
      'gift': 5,
      'protection': 50,
      'premium': 25
    };
    this.packagingCost = packagingPrices[type] || 0;
    return this;
  }

  // Calculare transport (distanță + metodă)
  calculateShipping(distance, method, country = 'RO') {
    // Distanță în km
    const baseShipping = 10; // Cost de bază
    const perKm = 0.5; // Cost per km
    
    // Metodă de livrare
    const methodMultipliers = {
      'standard': 1.0,
      'express': 1.5,
      'premium': 2.0,
      'international': 3.0
    };
    
    const multiplier = methodMultipliers[method] || 1.0;
    const distanceCost = distance * perKm;
    
    this.shippingCost = (baseShipping + distanceCost) * multiplier;
    
    // Ajustare pentru țări diferite
    if (country !== 'RO') {
      this.shippingCost *= 1.5;
    }
    
    return this;
  }

  // Opțiuni custom
  setCustomOption(key, value) {
    this.customOptions[key] = value;
    return this;
  }

  // Calculare total
  getTotal() {
    const customTotal = Object.values(this.customOptions).reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
    return this.basePrice + this.themeCost + this.packagingCost + this.shippingCost + customTotal;
  }

  // Obținere breakdown
  getBreakdown() {
    return {
      basePrice: this.basePrice,
      themeCost: this.themeCost,
      packagingCost: this.packagingCost,
      shippingCost: this.shippingCost,
      customOptions: this.customOptions,
      total: this.getTotal()
    };
  }

  // Reset
  reset() {
    this.basePrice = 0;
    this.themeCost = 0;
    this.packagingCost = 0;
    this.shippingCost = 0;
    this.customOptions = {};
    return this;
  }
}

// Export pentru utilizare globală
if (typeof window !== 'undefined') {
  window.SubscriptionCalculator = SubscriptionCalculator;
}



