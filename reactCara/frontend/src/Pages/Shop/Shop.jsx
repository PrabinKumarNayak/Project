
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProduct";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import Pagination from "../../components/Pagination/Pagination";
import ShopHeader from "../../components/ShopHeader/ShopHeader";

export default function Shop() {
  return (
    <>
      <ShopHeader />
      
      <FeaturedProducts/>
      <NewArrivals/>
      <Pagination/>
    </>
  );
}
