import Banner from "../../components/Banner/Banner";
import BannerThree from "../../components/BannerThree/BannerThree";
import BannerTwo from "../../components/BannerTwo/BannerTwo";
import Feature from "../../components/Feature/Feature";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProduct";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

export default function Home(){
    return(
        <>
            <Header/>
            <Feature/>
            <FeaturedProducts/> 
            <Banner/>
            <NewArrivals/>
            <BannerTwo/>
            <BannerThree/>
            <NewsLetter/>
            <Footer/>
        </>
    )
}