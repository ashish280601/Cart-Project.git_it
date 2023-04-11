import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import { firestore } from "./firebase";


class App extends React.Component {
  constructor() {
    // super is used to call the constructor of the parent class if a developer is inheriting
    super();
    this.state = {
      products: [],
      loading: true
    }
  }

  componentDidMount() {
    //fetching all the products from the cloud firestore
    firestore
      //query for fecthing the product which we want as per our query
      .collection("products") //getting all the products
      // .where('price','>=', 999) // after fetching db we should write query
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });

        this.setState({
          products: products,
          loading: false,
        });
      });
  }
  



  handleIncreaseQuantity = (product) => {
    console.log('Hey please inc the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    const docRef = firestore.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('Updated Successfully');
      })
      .catch((error) => {
        console.log('Error: ', error);
      })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Hey please inc the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    const docRef = firestore.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log('Updated Successfully');
      })
      .catch((error) => {
        console.log('Error: ', error);
      })
  }
  handleDeleteProduct = (id) => {
    // const { products } = this.state;

    const docRef = firestore.collection('products').doc(id);

    docRef
      .delete()
      .then(() => {
        console.log('Product Deleted Successfully');
      })
      .catch((error) => {
        console.log('Error: ', error);
      })
  }

getCartCount = () => {
  const { products } = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })

  return count;
}

getCartTotal = () => {
  const { products } = this.state;

  let cartTotal = 0;

  products.map((product) => {
    if (product.qty > 0) {
      cartTotal = cartTotal + product.qty * product.price;
    }
    return '';
  });

  return cartTotal;
}

addProduct = () => {
  firestore
    .collection('products')
    .add({
      img: '',
      price: 900,
      qty: 3,
      title: 'Washing Machine'
    })
    .then((docRef) => {
      console.log('Products has been added',docRef);
    })
    .catch((error) => {
      console.log('Error : ',error);
    })
}

render() {
  const { products, loading } = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
      />
      {loading && <h1>Loading products ...</h1>}
      <div style={{fontSize: 20, padding: 10}}>TOTAL: {this.getCartTotal()} </div>
    </div>
  );
}
}
export default App;
