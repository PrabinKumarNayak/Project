import "./NewsLetter.css"
export default function NewsLetter(){
    return(
    <div id="newsletter" className="section-p1 section-m1" >
        <div className="newstext">
            <h4>Sign Up For Newsletter</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers</span>. </p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address"/>
            <button className="normal">Sign Up</button>
        </div>
    </div>
    )
}