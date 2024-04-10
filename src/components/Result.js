import { Link } from "react-router-dom"
import bg from "../asset/images/site-bg.png"
const Result = () => {
  return (
    <div style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    <section id="Intro">
  <div className="container-lg">
  <div className="btn-group my-3" role="group">
            <button type="button" className="btn btn-nav">Introduction</button>
            <button type="button" className="btn btn-nav">Patient</button>
            <button type="button" className="btn btn-nav">Symptoms</button>
            <button type="button" className="btn btn-nav">Interview</button>
            <button type="button" className="btn btn-nav btn-select">Result</button>
  </div> 
    <div className="heading">Consult a doctor</div>
    <p className="text-content">Your symptoms may require medical evaluation. Schedule an appointment with a neurologist in-person. If your symptoms get worse, see a doctor immediately.</p>
    <div className="heading">Possible conditions:</div>
    <div className="sub-heading">1)Tension headaches</div>
    <div className="text-content" style={{textDecoration: 'underline'}}>WHAT?-</div>
    <p className="text-content">It is a mild to moderate pain that's often described as feeling like a tight band around the head.</p>
    <div className="text-content" style={{textDecoration: 'underline'}}>CAUSE-</div>
    <p className="text-content">Stress is the most commonly reported trigger for tension-type headaches.</p>
    <div className="text-content" style={{textDecoration: 'underline'}}>DIAGNOSIS-</div>
    <p className="text-content">Laboratory tests for patients with headache include a complete blood count (CBC), thyroid function, erythrocyte sedimentation rate (ESR), glucose levels, electrolyte and fluid balance, and kidney function.</p>
    <div className="sub-heading">2)Neck strain</div>
    <div className="text-content" style={{textDecoration: 'underline'}}>WHAT?-</div>
    <p className="text-content">It is an injury to the muscle or tendon in the neck that generally occurs when the neck muscle or tendon stretches too far and tears.</p>
    <div className="text-content" style={{textDecoration: 'underline'}}>CAUSE-</div>
    <p className="text-content">Common causes such as poor posture ,sleeping in an awkward position ,tension in your muscles ,injury such as a muscle strain ,prolonged use of a desktop or laptop computer.</p>
    <div className="text-content" style={{textDecoration: 'underline'}}>DIAGNOSIS-</div>
    <p className="text-content">For diagnosis the health care provider will take a medical history and do an exam. The exam will include checking for tenderness, numbness and muscle weakness. And it will test how far you can move your head forward, backward and side to side.</p>
    <div className="sub-heading">3)Cervical neuropaty</div>
    <div className="text-content" style={{textDecoration: 'underline'}}>WHAT?-</div>
    <p className="text-content">It is a condition that results in radiating pain, muscle weakness and/or numbness down your arm.</p>
    <div className="text-content" style={{textDecoration: 'underline'}}>CAUSE-</div>
    <p className="text-content">It's caused by compression and inflammation of any of the nerve roots in your neck</p>
    <div className="text-content" style={{textDecoration: 'underline'}}>DIAGNOSIS-</div>
    <p className="text-content">Healthcare providers typically use a CT scan for the diagnosis of traumatic injuries that result in cervical radiculopathy symptoms.</p>
    <p className="text-content">An electromyography (EMG) test measures muscle response or electrical activity in response to a nerve’s stimulation of the muscle. This test can help determine if a nerve is working normally.</p>
    <div className="sub-heading">4)Migraine</div>
    <div className="text-content" style={{textDecoration: 'underline'}}>WHAT?-</div>
    <p className="text-content">It is a headache that can cause severe throbbing pain or a pulsing sensation, usually on one side of the head.</p>
    <div className="text-content" style={{textDecoration: 'underline'}}>CAUSE-</div>
    <p className="text-content">Common causes include a drop in estrogen levels (pre-menstruation), alcohol use, stress,sleep deprivation.</p>
    <div className="text-content" style={{textDecoration: 'underline'}}>DIAGNOSIS-</div>
    <p className="text-content">Having the symptoms of headache associated with sensitivity to light, a decrease in function and nausea, you likely have migraine.</p>
    <Link to={"/Interview3"}>
    <button type="button" className="btn btn-nav m-2">Previous</button>
    </Link>
  </div>
</section>
</div>
  )
}

export default Result
