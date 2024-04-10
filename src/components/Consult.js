import { Link } from "react-router-dom"
import { useState } from "react"
import bg from "../asset/images/site-bg.png"
function Consult() {
  const [consult, setConsult] = useState(
    ''
  )
  const [sex, setSex] = useState(
    null
  )

  const handleChange = (event) => {
    setConsult(event.target.value)
  }
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
      <section id="Intro">
        <div className="container">
          <div className="btn-group my-3" role="group">
            <button type="button" className="btn btn-nav">Introduction</button>
            <button type="button" className="btn btn-nav btn-select">Patient</button>
            <button type="button" className="btn btn-nav">Symptoms</button>
            <button type="button" className="btn btn-nav">Interview</button>
            <button type="button" className="btn btn-nav">Result</button>
          </div>
          <div className="row my-3">
            <div className="col-4">
              <div className="text-content ques">Whom are you consulting for?</div>
            </div>
            <div className="col-8" style={{ alignSelf: "center" }}>
              <div className="d-grid">

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="radio-group" id="flexRadioDefault1" onChange={handleChange} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Yourself
                  </label>

                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="radio-group" id="flexRadioDefault1" onChange={handleChange} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Someone else
                  </label>

                </div>
              </div>
            </div>
          </div>


          <div className="row my-3">
            <div className="col-4">
              <div className="text-content ques">Name</div>
            </div>
            <div className="col-8" style={{ alignSelf: "center" }}>
              <input className="form-control" type="text" placeholder="Enter patient's name here" aria-label="default input example" />
            </div>
          </div>

          <div className="row my-3">
            <div className="col-4">
              <div className="text-content ques">Age</div>
            </div>
            <div className="col-8" style={{ alignSelf: "center" }}>
              <input className="form-control" type="text" placeholder="Enter patient's age here (in years)" aria-label="default input example" />
            </div>
          </div>

          <div className="row my-3">
            <div className="col-4">
              <div className="text-content ques">Select regions were in last 3 months</div>
            </div>
            <div className="col-8" style={{ alignSelf: "center" }}>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select country</option>
                <option value="1">India</option>
                <option value="2">China</option>
                <option value="3">USA</option>
                <option value="4">Australia</option>
              </select>

            </div>
          </div>

          <div className="row my-3">
            <div className="col-4">
              <div className="text-content ques">Gender</div>
            </div>
            <div className="col-8">
              <div className="d-grid">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="Gender" id="flexRadioDefault1" onClick={() => setSex(true)} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="Sex" id="flexRadioDefault2" onClick={() => setSex(false)} />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>
          <Link to={"/Terms"}>
            <button type="button" className="btn btn-nav m-2">Previous</button>
          </Link>
          <Link to={"/Info"}>
            <button type="button" className="btn btn-nav m-2">Next</button>
          </Link>
        </div>
      </section>
    </div>

  )
}

export default Consult
