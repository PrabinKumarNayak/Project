
import AboutHead from "../../components/AboutHead/AboutHead"
import AboutPageHeader from "../../components/AboutPageHeader/AboutPageHeader"
import Feature from "../../components/Feature/Feature"
import Video from "../../components/Video/Video"
import "./About.css"

export default function About(){
    return(
        <>
        <AboutPageHeader/>
        <AboutHead/>
        <Video/>
        <Feature/>
        </>
    )
}