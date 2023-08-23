import Learning from "../molecules/home/Learning";
import Courses from "../molecules/school/Courses";
import How from "../molecules/school/How";
import ProductHero from "../molecules/school/ProductHero";

const Product = () => {
  return (
    <div>
      <ProductHero />
      <Courses />
      <How />
      <Learning ids="clearn" />
    </div>
  );
};

export default Product;
