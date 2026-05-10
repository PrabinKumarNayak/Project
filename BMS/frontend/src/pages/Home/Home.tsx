import BudgetFriendly from "./components/BudgetFriendly/BudgetFriendly"
import CategoryBar from "./components/CollectionBar/CollectionBar"
import ContactUs from "./components/ContactUs/ContactUs"
import ExploreMore from "./components/ExploreMore/ExploreMore"
import GoldPassSection from "./components/GoldPassSection/GoldPassSection"
import HeroBanner from "./components/HeroBanner/HeroBanner"
import PopularCategories from "./components/PopularCategories/PopularCategories"
import Testimonials from "./components/Testimonials/Testimonials"

const Home = () => {
  return (
    <>
        <CategoryBar/>
        <HeroBanner/>
        <PopularCategories/>
        <BudgetFriendly/>
        <GoldPassSection/>
        <ExploreMore/>
        <ContactUs/>
        <Testimonials/>
    </>
  )
}

export default Home
