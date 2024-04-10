import { Link } from "react-router-dom"
import bg from "../asset/images/site-bg.png"
function Introduction() {

    return (
        <div style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height: "100vh"}}>
        <section id="Intro">
            <div className="container">
                <div className="btn-group my-3" role="group">
                    <button type="button" className="btn btn-nav btn-select">Introduction</button>
                    <button type="button" className="btn btn-nav">Patient</button>
                    <button type="button" className="btn btn-nav">Symptoms</button>
                    <button type="button" className="btn btn-nav">Interview</button>
                    <button type="button" className="btn btn-nav">Result</button>
                </div>
                <div className="heading" style={{ color: 'brown' }}>Introduction</div>
                <p className="text-content my-1">First introduce yourself, list down the symptoms, give an interview and get the results.Your results will include:</p>
                <p className="text-content my-1">1)Possible causes of symptoms</p>
                <p className="text-content my-1">2)Recommendations on what to do next</p>
                <Link to={"/Terms"}>
                    <button type="button" className="btn btn-nav my-2">Next</button>
                </Link>
            </div>
        </section>
        </div>
    )
}

export default Introduction
