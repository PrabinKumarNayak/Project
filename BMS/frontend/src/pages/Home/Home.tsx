import BudgetFriendly from "./components/BudgetFriendly/BudgetFriendly"
import CategoryBar from "./components/CollectionBar/CollectionBar"
import GoldPassSection from "./components/GoldPassSection/GoldPassSection"
import HeroBanner from "./components/HeroBanner/HeroBanner"
import PopularCategories from "./components/PopularCategories/PopularCategories"

const Home = () => {
  return (
    <>
        <CategoryBar/>
        <HeroBanner/>
        <PopularCategories/>
        <BudgetFriendly/>
        <GoldPassSection/>
    </>
  )
}

export default Home
