import { Link } from "react-router-dom"
import bg from "../asset/images/site-bg.png"
function Symptoms() {
    return(
    <div style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh"}}>
    <section id="Intro">
    <div className="container">
    <div className="btn-group my-3" role="group">
            <button type="button" className="btn btn-nav">Introduction</button>
            <button type="button" className="btn btn-nav">Patient</button>
            <button type="button" className="btn btn-nav btn-select">Symptoms</button>
            <button type="button" className="btn btn-nav">Interview</button>
            <button type="button" className="btn btn-nav">Result</button>
          </div>
    <div className="heading">Symptoms</div>
    <p className="text-content">
      Select the options that apply:
    </p>
    <div className="form-check" >
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Nausea
      </label>
    </div>
    <div className="form-check" >
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Head ache
      </label>
    </div>    
    <div className="form-check" >
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Hair fall
      </label>
    </div>
    <div className="form-check" >
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Stiffness in neck
      </label>
    </div>
    <div className="form-check" >
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Neck pain
      </label>
    </div>
    <Link to={"/Info"}>
    <button type="button" className="btn btn-nav m-2">Previous</button>
    </Link>
    <Link to={"/Interview1"}>
    <button type="button" className="btn btn-nav m-2">Next</button>
    </Link>
  </div>
  </section>
  </div>
    )
}

export default Symptoms
