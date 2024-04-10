import { Link } from "react-router-dom"
import { useState } from "react"
import bg from "../asset/images/site-bg.png"
const Interview1 = () => {
  const [fatigue, setFatigue]= useState(
    null
   )
   const [fever, setFever]= useState(
    null
   )
   const [vomit, setVomit]= useState(
    null
   )
   const [neck, setNeck]= useState(
    null
   )
   const [body, setBody]= useState(
    null
   )
  return (
    <div style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh"}}>
    <section id="Intro">
  <div className="container">
  <div className="btn-group my-3" role="group">
            <button type="button" className="btn btn-nav">Introduction</button>
            <button type="button" className="btn btn-nav">Patient</button>
            <button type="button" className="btn btn-nav">Symptoms</button>
            <button type="button" className="btn btn-nav btn-select">Interview</button>
            <button type="button" className="btn btn-nav">Result</button>
          </div>
    <div className="heading">Do you have any of the following symptoms?</div>
    <p className="text-content">
      Select all the options that apply:
    </p>
    <div className="form-check" >
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" onClick={() => setFatigue(true)}/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Fatigue
      </label>
    </div>
    <div className="form-check" >
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" onClick={() => setFever(true)}/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Fever
      </label>
    </div>    
    <div className="form-check" >
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" onClick={() => setVomit(true)}/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Vomiting
      </label>
    </div>
    <div className="form-check" >
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" onClick={() => setNeck(true)}/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Twisted neck
      </label>
    </div>
    <div className="form-check" >
      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" onClick={() => setBody(true)}/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Body/muscle pain 
      </label>
    </div>
    <Link to={"/Symptoms"}>
    <button type="button" className="btn btn-nav m-2">Previous</button>
    </Link>
    <Link to={"/Interview2"}>
    <button type="button" className="btn btn-nav m-2">Next</button>
    </Link>
  </div>
  </section>
</div>
  )
}

export default Interview1
