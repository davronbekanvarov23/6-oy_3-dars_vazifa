import React, { useState } from "react";
import allProducts from "./data";
import data from "./data";
const App = () => {
  const [products, setProducts] = useState(allProducts);
  // dalete product

  const deleteProduct = (id) => {
    const filteredProducts = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(filteredProducts);
  };

  const filterByBrand = (brand) => {
    if (brand == "all") {
      setProducts(allProducts);
    } else {
      const filterBrand = allProducts.filter((product) => {
        return product.brand == brand;
      });
      setProducts(filterBrand);
    }
  };

  // const filterByprice = (price) => {
  //   if (price == "all") {
  //     setProducts(allProducts);
  //   } else {
  //     const filterPrice = products.filter((product) => {
  //       if (product.price >= 500) {
  //       }
  //     });
  //   }
  // };

  return (
    <div>
      <div className="filter-container">
        <select onChange={(e) => filterByBrand(e.target.value)}>
          <option value="all">All</option>;
          {[
            ...new Set(
              allProducts.map((product) => {
                return product.brand;
              })
            ),
          ].map((brand) => {
            return (
              <option
                key={Math.random() * new Date().getMilliseconds}
                value={brand}
              >
                {brand}
              </option>
            );
          })}
        </select>
      </div>
      {/* <div className="fiter-container">
        <select onChange={(e) => filterByPrice(e.target.value)}>
          
        </select>
      </div> */}
      <ul className="product-grid">
        {products.map((product) => {
          const {
            id,
            thumbnail,
            title,
            description,
            price,
            discountPercentage,
            rating,
            brand,
          } = product;

          return (
            <li key={id}>
              <img src={thumbnail} alt="" width={500} />
              <div className="card-body">
                <h3>{title}</h3>
                <p>
                  <b>Brand:</b>
                  <span>{brand}</span>
                </p>
                <p className="discription">
                  <b>description:</b>
                  <span>{description}</span>
                </p>
                <p>
                  <b>price:</b>
                  <span>${price}</span>
                </p>
                <p>
                  <b>Discoutn:</b>
                  <span>${discountPercentage}</span>
                </p>
                <p>
                  <b>Rating:</b>
                  <span>{rating}</span>
                </p>
                <button onClick={() => deleteProduct(id)} className="btn">
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
