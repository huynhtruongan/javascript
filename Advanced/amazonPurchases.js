// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
  }
  
  const amazonHistory = [];
  const items = [{name: "laptop", price: 3000},{name: "mouse", price: "500"}];
  // NOTE: addItemToCart is wrapper function when we use pipe 
  function addItemToCart(user, items){
    let updateCart = user.cart.concat(items);
    // NOTE: data is userClone = Object.assign({}, user , {cart: updateCart})
      return Object.assign({}, user , {cart: updateCart})   
  }
  // NOTE: addTax,buyItem,emptyCart receive data and return new data
  function addTax(user){
    let updateCart = user.cart.map(item => {
      return{
         name: item.name,
        price: item.price * 1.03
      } 
    });
      return  Object.assign({}, user , {cart: updateCart})
  }

  function buyItem(user){
    amazonHistory.push(user);
    let updatePurchase = user.purchases.concat(user.cart);
    return Object.assign({}, user , {purchases: updatePurchase})
  }
  
  function emptyCart(user){
    let updateCart = [];
    return Object.assign({}, user, {cart: updateCart})
  }
  // NOTE: we use pipe because this is simple way to execute
  const pipe = (f, g) => (...data) => g(f(...data));
  const compose = (f, g) => (...data) => f(g(data));
  //Implement a cart feature:
  // 1. Add items to cart.
  // 2. Add 3% tax to item in cart
  // 3. Buy item: cart --> purchases
  // 4. Empty cart

  // REF: reduce receive callback pipe()
  function main(...fns) {return fns.reduce(pipe)};
  // function main(...fns) {return fns.reduce(compose)};
  
  main(addItemToCart, addTax, buyItem, emptyCart)(user, items);
  //main(emptyCart, buyItem,addTax,addItemToCart)(user, items);
  
  //Bonus:
  // accept refunds.
  // Track user history.