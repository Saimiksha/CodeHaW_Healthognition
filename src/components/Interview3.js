import { Link } from "react-router-dom"
import bg from "../asset/images/site-bg.png"
const Interview3 = () => {
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
    <div className="row">
    <div className="col-8">
    <div className="text-content ques" >Do you have neck pain at one side?</div>
    </div>
    <div className="col-4">
    <div className="d-grid ">
    <div className="form-check">
      <input className="form-check-input" type="radio" name="q1" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      Yes
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="q1" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      No
      </label>
    </div>
    </div>
    </div>
    </div>

    <div className="row">
    <div className="col-8">
    <div className="text-content ques" >How long have had neck pain?</div>
    </div>
    <div className="col-4">
    <div className="d-grid ">
    <div className="form-check">
      <input className="form-check-input" type="radio" name="q2" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      Less than 7 days
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="q2" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      7 days to 3 months
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="q2" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      More than 3 months
      </label>
    </div>
    </div>
    </div>
    </div>

    <div className="row">
    <div className="col-8">
    <div className="text-content ques" >Are you unable to actively rotate neck left and right?</div>
    </div>
    <div className="col-4">
    <div className="d-grid ">
    <div className="form-check">
      <input className="form-check-input" type="radio" name="q3" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      Yes
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="q3" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      No
      </label>
    </div>
    </div>
    </div>
    </div>

    <Link to={"/Interview2"}>
    <button type="button" className="btn btn-nav m-2">Previous</button>
    </Link>
    <Link to={"/Result"}>
    <button type="button" className="btn btn-nav m-2">Next</button>
    </Link>
  </div>
</section>
</div>
  )
}

export default Interview3
