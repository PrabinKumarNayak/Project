import Banner from "../../components/Banner/Banner";
import BannerThree from "../../components/BannerThree/BannerThree";
import BannerTwo from "../../components/BannerTwo/BannerTwo";
import Feature from "../../components/Feature/Feature";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProduct";

import Header from "../../components/Header/Header";
import NewArrivals from "../../components/NewArrivals/NewArrivals";


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
            
        </>
    )
}