import CategoryBar from "./components/CategoryBar/CategoryBar"
import GoldPassSection from "./components/GoldPassSection/GoldPassSection"
import HeroBanner from "./components/HeroBanner/HeroBanner"
import PopularCategories from "./components/PopularCategories/PopularCategories"

const Home = () => {
  return (
    <>
        <CategoryBar/>
        <HeroBanner/>
        <PopularCategories/>
        <GoldPassSection/>
    </>
  )
}

export default Home
