function suggestProducts(budget) {
    const products = [
      { name: "Pasta", price: 50 },
      { name: "Rice", price: 40 },
      { name: "Beans", price: 30 },
      { name: "Oats", price: 25 },
      { name: "Frozen vegetables", price: 60 },
      { name: "Canned fruits and vegetables", price: 45 },
      { name: "Bread", price: 20 },
      { name: "Eggs", price: 35 },
      { name: "Chicken", price: 100 },
      { name: "Cheese", price: 75 },
      { name: "Yogurt", price: 30 },
      { name: "Apples", price: 40 },
      { name: "Bananas", price: 35 },
      { name: "Carrots", price: 25 },
      { name: "Potatoes", price: 20 },
      { name: "Onions", price: 15 }
    ];
  
    const affordableProducts = [];
  
    for (let i = 0; i < products.length; i++) {
      if (products[i].price <= budget) {
        affordableProducts.push(products[i].name);
      }
    }
  
    return affordableProducts;
  }
  