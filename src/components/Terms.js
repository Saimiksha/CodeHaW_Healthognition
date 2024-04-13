import {useNavigate} from 'react-router-dom'
import {useRef, useState,useHistory} from 'react'
import bg from "../asset/images/site-bg.png"
import Consult from "./Consult"
function Terms() {
  const[site,setSite]=useState()

  const ref = useRef(null)

  const navigate = useNavigate()


  async function onSubmit(e) {
    e.preventDefault()
    if (ref.current.checked) {
      console.log('✅ Checkbox is checked')
      setSite(navigate('/Consult'))
    } else {
      console.log('⛔️ Checkbox is NOT checked')
      setSite('**Please agree to the terms & conditions.')
    }
  }

  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '100vh' }}>
      <section id="Intro">
        <div className="container">
          <div className="btn-group my-3" role="group">
            <button type="button" className="btn btn-nav btn-select">Introduction</button>
            <button type="button" className="btn btn-nav">Patient</button>
            <button type="button" className="btn btn-nav">Symptoms</button>
            <button type="button" className="btn btn-nav">Interview</button>
            <button type="button" className="btn btn-nav">Result</button>
          </div>
          <div className="heading">Terms and Conditions</div>
          <p className="text-content">Before using the checkup, please read the Terms of Service and remember:
            Checkup isn’t a diagnosis. It’s only for your information and not a qualified medical opinion.
            Checkup isn’t for emergencies. Call your local emergency number right away when there’s a health emergency.
            Your data is safe. The information you give won’t be shared or used to identify you.</p>
          <div className="form-check">
            <input ref={ref} className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault"/>
            <label className="form-check-label text-content" htmlFor="flexCheckDefault">
              I agree that have read and accept term of service.
            </label>
          </div>
          <div className="form-check">
            <input ref={ref} className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault"/>
            <label className="form-check-label text-content" htmlFor="flexCheckDefault">
              I agree for my health information to be used for the interview.
            </label>
          </div>

          
            <button onClick={onSubmit}   type="button" className="btn btn-nav my-2">Next</button>
            <h4>{site}</h4>
        </div>
      </section>
    </div>

  )
}
export default Terms  