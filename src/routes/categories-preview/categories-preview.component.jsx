import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMaps } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMaps).map((title) => {
        const products = categoriesMaps[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
