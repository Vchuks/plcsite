import Learning from "../molecules/home/Learning";
import Courses from "../molecules/school/CourseProduct";
import How from "../molecules/school/How";
import ProductHero from "../molecules/school/product/ProductHero";

const Product = () => {
  return (
    <div>
      <ProductHero />
      <Courses />
      <How />
      <Learning />
    </div>
  );
};

export default Product;
