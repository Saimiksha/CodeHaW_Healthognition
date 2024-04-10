import { Link } from "react-router-dom"
import bg from "../asset/images/site-bg.png"
import "../asset/css/Interview2.css"
const Interview2 = () => {

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

    <div className="row q">
    <div className="col-8">
    <div className="text-content ques">How strong is the headache? (1-mildest to 10-strongest)</div>
    </div>
    <div className="col-4" style={{alignSelf:"center"}}>
    <select class="form-select" aria-label="Default select example">
  <option selected>Select</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>
    </div>
    </div>
    
    <div className="row q">
    <div className="col-8">
    <div className="text-content ques">How long have had these headaches?</div>
    </div>
    <div className="col-4" style={{alignSelf:"center"}}>
    <select class="form-select" aria-label="Default select example">
  <option selected>Select</option>
  <option value="1">Less than 3 months</option>
  <option value="2">More than 3 months</option>
</select>
    </div>
    </div>
    
    <div className="row q">
    <div className="col-8">
    <div className="text-content ques">How long to headaches last?</div>
    </div>
    <div className="col-4" style={{alignSelf:"center"}}>
    <select class="form-select" aria-label="Default select example">
  <option selected>Select</option>
  <option value="1">5 minutes to 4 hours</option>
  <option value="2">4 hours to 3 days</option>
  <option value="3">More than 3 days</option>
</select>
    </div>
    </div>
    

    <div className="row q">
    <div className="col-8">
    <div className="text-content ques">Where is the headache?</div>
    </div>
    <div className="col-4" style={{alignSelf:"center"}}>
    <select class="form-select" aria-label="Default select example">
  <option selected>Select</option>
  <option value="1">All over the head</option>
  <option value="2">In specific area of head</option>
</select>
    </div>
    </div>

    <div className="text-content ques">Which of the following worsen the headache? :</div>
    <div className="row q">
    <div className="col-8">
    <div className="text-content ques"> Worsen in the morning</div>
    </div>
    <div className="col-4">
    <div className="d-grid ">
    <div className="form-check" >
      <input className="form-check-input" type="radio" name="q51" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      Yes
      </label>
    </div>
    <div className="form-check" >
      <input className="form-check-input" type="radio" name="q51" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      No
      </label>
    </div>
    </div>
    </div>
    </div>

    <div className="row q">
    <div className="col-8">
    <div className="text-content ques"> Stress</div>
    </div>
    <div className="col-4">
    <div className="d-grid ">
      <div className="form-check" >
      <input className="form-check-input" type="radio" name="q52" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      Yes
      </label>
    </div>
    <div className="form-check" >
      <input className="form-check-input" type="radio" name="q52" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      No
      </label>
    </div>
    </div>
    </div>
    </div>

    <div className="row q">
    <div className="col-8">
    <div className="text-content ques"> Bending down</div>
    </div>
      <div className="col-4">
    <div className="d-grid ">
    <div className="form-check" >
      <input className="form-check-input" type="radio" name="q53" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      Yes
      </label>
    </div>
    <div className="form-check" >
      <input className="form-check-input" type="radio" name="q53" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      No
      </label>
    </div>
    </div>
    </div>
    </div>

    <div className="row q" >
    <div className="col-8">
    <div className="text-content ques"> Physical activity</div>
     </div>
      <div className="col-4">
    <div className="d-grid ">
    <div className="form-check" >
      <input className="form-check-input" type="radio" name="q54" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      Yes
      </label>
    </div>
    <div className="form-check" >
      <input className="form-check-input" type="radio" name="q54" id="flexRadioDefault1"/>
      <label className="form-check-label" htmlFor="flexRadioDefault1">
      No
      </label>
    </div>
    </div>
    </div>
    </div>
  
    <Link to={"/Interview1"}>
    <button type="button" className="btn btn-nav m-2">Previous</button>
    </Link>
    <Link to={"/Interview3"}>
    <button type="button" className="btn btn-nav m-2">Next</button>
    </Link>
  </div>
</section>
</div>
  )
}

export default Interview2
