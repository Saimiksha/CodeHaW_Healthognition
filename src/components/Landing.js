import { Link } from "react-router-dom"
import logo from "../asset/images/Heealthognition.png"
import bg from "../asset/images/site-bg.png"
import "../asset/css/Landing.css"
const Landing = () => {
  return (
  //   <div style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
  //   <div id="Intro">
  // <div className="container" style={{padding:0,margin:0}} >
    <div className="row px-4 justify-content-center" style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      {/* <div className="text-start">
        <img className="rounded float-start position-absolute top-0 start-0" src={logo} alt="healthognition" />
      </div> */}
      {/* <div className="text-end">
        <div className="btn-group position-absolute top-0 end-0" role="group">
          <a href="#About"><button type="button" className="btn btn-primary" style={{color: 'black'}}>About</button></a>
          <a href="#Partners"><button type="button" className="btn btn-primary" style={{color: 'black'}}>Partners</button></a>
          <a href="#Login"><button type="button" className="btn btn-primary" style={{color: 'black'}}>Login</button></a>
          <select class="form-select" aria-label="Default select example">
  <option selected>Languages</option>
  <option value="1">Hindi</option>
  <option value="2">English</option>
  <option value="3">Marathi</option>
</select>
        </div>
      </div> */}
      {/* <div className="display-2 fw-bolder" style={{textAlign: "center",color:'darkgreen'}}>HEALTHOGNITION</div> */}
      <div className="row justify-content-center align-items-center">
        <div className="col-4">
        <img className="rounded float-start" style={{width:"100%"}} src={logo} alt="healthognition" />
        </div>
    
        <div className="col-4" >
        <div className="title">HEALTHOGNITION</div>
        </div>      
        <div className="col-4">
        <div className="btn-group" role="group">
          <a href="#About"><button type="button" className="btn mx-1 btn-nav">About</button></a>
          <a href="#Partners"><button type="button" className="btn mx-1 btn-nav">Partners</button></a>
          <a href="#Login"><button type="button" className="btn mx-1 btn-nav">Login</button></a>
          <select className="form-select mx-1 btn-nav" aria-label="Default select example">
  <option selected>Languages</option>
  <option value={1}>Hindi</option>
  <option value={2}>English</option>
  <option value={3}>Marathi</option>
</select>

        </div>
        </div>

      </div>


     <div id="About" className="heading my-1" style={{color: 'brown'}} >About</div>
      <p className="text-content my-1">Healthognition is a site that helps to get to know about possible health problems in 2-3 minutes</p>
      <div id="Partners" className="heading my-1" style={{color: 'brown'}}>Partners</div>
      <p className="text-content my-1">1) Medanta – The Medicity, Gurgaon.</p>
      <p className="text-content my-1">2) Kokilaben Dhirubhai Ambani Hospital, Mumbai.</p>
      <p className="text-content my-1">3) Fortis Memorial Research Institute, Gurgaon.</p>
      <p className="text-content my-1">4) Indraprastha Apollo Hospital, New Delhi.</p>
      <p className="text-content my-1">5) Artemis Hospital, Gurgaon.</p>
      <p className="text-content my-1">6) Gleneagles Global Health City.</p>
      <p className="text-content my-1">7) Nanavati Super Specialty Hospital, Mumbai.</p>
      <div id="Login" className="heading my-1" style={{color: 'brown'}}>Login</div>
      <div className=""> 
        <label htmlFor="exampleFormControlInput1" className="form-label text-content">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      
      <div className="col-auto">
        <Link to={"/Introduction"}>
            <button type="submit" className="btn btn-nav my-3">Login</button>
        </Link>
      </div>
    </div>
//   </div>
// </div>
// </div>
  )
}

export default Landing
