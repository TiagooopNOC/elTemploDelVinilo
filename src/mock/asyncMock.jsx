import { products } from "./products";

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let prod = products.find((product) => product.id === id);
      resolve(prod);
    }, 2000);
  });
};
