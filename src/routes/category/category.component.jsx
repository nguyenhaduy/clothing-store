import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

import "./category.styles.scss";
import { Fragment } from "react/cjs/react.production.min";

const Category = () => {
  const { category } = useParams();
  const { categoriesMaps } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMaps[category]);

  useEffect(() => {
    setProducts(categoriesMaps[category]);
  }, [category, categoriesMaps]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
