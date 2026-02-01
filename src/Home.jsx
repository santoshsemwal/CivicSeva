
import Button from 'react-bootstrap/Button';
import './App.css'
import Header from './common/Header';
import Footer from './common/Footer';
import { useNavigate } from 'react-router-dom';
import image1 from './assets/neatroads.png'
import image2 from './assets/city.png'
import image3 from './assets/neatcolony.png'
import image4 from './assets/dustbin.png'
import image5 from './assets/work/garbage.png'
import image6 from './assets/work/cleanedrode.png'
import image7 from './assets/work/pothole.png'
import image8 from './assets/work/renovatedrode.png'
import image9 from './assets/work/waterbefore.png'
import image10 from './assets/work/waterafter.png'


 

function Home() {
  const navigate=useNavigate();
  const handleComplaintClick=()=>{
  const user=localStorage.getItem("user")
  if(user){
    navigate('/Complaintpage')
  }
  else{
    navigate('/login')
  }
  }

  return (
    <div  className='mainbox'>
      <Header/>
      <br />
      <div className='hero-content'>
        <h1>Welcome to <span>Civic seva</span></h1>
      </div>
      <div className='middlebox'>
      </div>

        <div className='para'>
          <h1>Our Vision</h1>
          <br />
          <p>To create cleaner, safer, and smarter cities by encouraging active citizen participation and ensuring faster resolution of civic issues.</p>
      </div>
      <br />
      <div className='images'>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />

      </div>
            <div className='btn'>
        <Button  className="btn"variant="primary" onClick={handleComplaintClick}>
                <p className='btn1'>➕ Raise a Complaint</p>
      </Button>

      </div>
     
        <div className='before-after-section'>
        <h2>
          Our Work

        </h2>

        <p>Civic Seva helps citizens actively participate in building cleaner and safer communities. From reporting water leakages and broken streetlights to ensuring clean roads and well-maintained public spaces, every issue you raise creates real impact.</p>
        <div className='ba-grid'>
              <div className='ba-card'>
                <img src={image7} alt="Road before" />
                <p> ❌ Potholes on the Road(Before)</p>
              </div>
                <div className="ba-card">
                  <img src={image8} alt="Road after" />
                  <p>✅ Repaired Road (After)</p>
              </div>
              <div className="ba-card">
                <img src={image5} alt="Garbage before" />
                <p>❌ Overflowing Garbage (Before)</p>
              </div>
              <div className="ba-card">
                <img src={image6} alt="Garbage after" />
                <p>✅ Clean Surroundings (After)</p>
              </div>
              <div className="ba-card">
                <img src={image9} alt="Water berore" />
                <p>❌ Water Leakage (After)</p>
              </div>
              <div className="ba-card">
                <img src={image10} alt="water after" />
                <p>✅ Clean Surroundings (After)</p>
              </div>
          <br />



        </div>
          <h3 className='imghead'>What These Images Represent</h3>
          <div className="imgrepresent">
            <div className="rep-item">
              <span className="rep-title">Before</span>
              <p>
                  Common civic issues like water leakage, damaged roads, overflowing garbage,
                  and non-functional streetlights that affect daily life.
              </p>
            </div>
            <div className="rep-item">
              <span className="rep-title">Action</span>
              <p>
                  Complaints raised by citizens and assigned to the right departments for
                  quick attention.
              </p>
            </div>
            <div className="rep-item">
              <span className="rep-title">After</span>
              <p>
                  Clean streets, repaired infrastructure, and safer neighborhoods achieved
                  through timely resolution.
              </p>
            </div>
          </div>
      </div>




      <Footer/>


    </div>

  )
}

export default Home;
