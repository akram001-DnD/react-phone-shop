import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
export default class ProductList extends Component {
  // const fit = this.state.products.map((item) => {
  //   return (
  //     <li key={item.id}>
  //       go to <Link to={`/${item.company}`}> {item.company}</Link> or{" "}
  //       <button onClick={() => this.state.CartItems.push(item.company)}>
  //         {" "}
  //         add to Cart
  //       </button>
  //     </li>
  //   );
  // });

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
