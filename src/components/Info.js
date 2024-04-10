import { Link } from "react-router-dom"
import { useState } from "react"
import bg from "../asset/images/site-bg.png"
function Info() {
  const [obese, setObese] = useState(
    null
  )
  const [hyper, setHyper] = useState(
    null
  )
  const [genasthma, setGenasthma] = useState(
    null
  )
  const [smoke, setSmoke] = useState(
    null
  )
  const [injury, setInjury] = useState(
    null
  )
  const [diabetes, setDiabetes] = useState(
    null
  )
  const [pregnant, setPregnant] = useState(
    null
  )

  const deleteTask = (id) => {
    console.log('delete', id)
  }
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <section id="Intro">
        <div className="container">
          <div className="btn-group my-3" role="group">
            <button type="button" className="btn btn-nav">Introduction</button>
            <button type="button" className="btn btn-nav btn-select">Patient</button>
            <button type="button" className="btn btn-nav">Symptoms</button>
            <button type="button" className="btn btn-nav">Interview</button>
            <button type="button" className="btn btn-nav">Result</button>
          </div>
          <div className="heading">Know more about patient:</div>

          <div className="row my-3">
            <div className="col-4">
              <p className="text-content ques">Obese</p>
            </div>
            <div className="col-7">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Obese" id="flexRadioDefault1"/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="radio" name="Obese" id="flexRadioDefault2"/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-4">
              <p className="text-content ques">Hypertension</p>
            </div>
            <div className="col-7">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Hypertension" id="flexRadioDefault1"/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Hypertension" id="flexRadioDefault2"/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-4">
              <p className="text-content ques">Genetic asthma,food allergy etc.</p>
            </div>
            <div className="col-7">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Genetic asthma,food allergy etc." id="flexRadioDefault1"/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Genetic asthma,food allergy etc." id="flexRadioDefault2"/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-4">
              <p className="text-content ques">Smoking(Last 3 months)</p>
            </div>
            <div className="col-7">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Smoking(Last 3 months)" id="flexRadioDefault1"/>

                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Smoking(Last 3 months)" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-4">
              <p className="text-content ques">Any injury</p>
            </div>
            <div className="col-7">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Any injury" id="flexRadioDefault1"/>

                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Any injury" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-4">
              <p className="text-content ques">Diabetes</p>
            </div>
            <div className="col-7">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Diabetes" id="flexRadioDefault1"/>

                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Diabetes" id="flexRadioDefault2"/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-4">
              <p className="text-content ques">Pregnant</p>
            </div>
            <div className="col-7">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Pregnant" id="flexRadioDefault1"/>

                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Pregnant" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>
          <Link to={"/Consult"}>
            <button type="button" className="btn btn-nav m-2">Previous</button>
          </Link>
          <Link to={"/Symptoms"}>
            <button type="button" className="btn btn-nav m-2">Next</button>
          </Link>
        </div>
      </section>
    </div>


  )
}

export default Info
