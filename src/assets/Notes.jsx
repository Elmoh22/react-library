// function addToCart(book) {
//   const dupeItem = cart.find(item => +item.id === +book.id)

//   if (dupeItem) {
//     setCart(cart.map(item => {
//       if (item.id === dupeItem.id) {
//         return {
//           ...item, 
//           quantity: item.quantity + 1
//         }
//       }
//       else {
//         return item;
//       }
//     }))

//   }
//   else {
//     setCart([...cart, {...book, quantity: 1}])
//   }
// }

// useEffect(() => {console.log(cart);}, [cart])