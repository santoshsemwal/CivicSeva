import Header from "../common/Header";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {solvedProblems} from "./About1.jsx";
import Footer from "../common/Footer.jsx";

function About(){
        let showd = solvedProblems.map((data, i) => showpro(data, i));
    return(
        <div className="a">
            <Header/>
            <div className="content">


            <h2>About Us</h2>
            <p>Civic Seva is a digital platform created to empower citizens and strengthen the connection between the public and civic authorities. Our goal is to make reporting civic issues simple, transparent, and effective so that communities can actively participate in improving their surroundings.

                    Everyday problems like potholes, garbage overflow, water leakage, faulty streetlights, or drainage issues often go unnoticed or unresolved. Civic Seva provides a single platform where citizens can easily report these issues, track their progress, and stay informed about the actions taken by the concerned departments.

                    Our system ensures that each complaint is properly recorded, categorized, and forwarded to the appropriate department. Administrators can efficiently manage, prioritize, and resolve issues while maintaining accountability and transparency throughout the process.
                    <div className="vision">
                       <h4>Our Vision</h4> 
                    To build cleaner, safer, and smarter cities by encouraging active citizen participation and enabling faster resolution of civic issues.
                    </div>
                    <div className="Mission">
                        <h4>Our Mission</h4>
                    To simplify the process of reporting civic problems
                    To promote transparency in complaint tracking
                    To improve coordination between citizens and civic departments
                    To ensure timely updates and accountability
                    </div>
                    <div className="why">


                    <h4>Why Civic Seva?</h4>
                    Easy and accessible issue reporting
                    Real-time status tracking
                    Department-wise issue management
                    Transparent and accountable resolution process
                    Community-driven urban improvement
                    At Civic Seva, we believe that meaningful change starts with informed and engaged citizens. Together, we can create better cities—one issue at a time.
                    </div>
                
            </p>
            </div>
                <h5>Problem Solved</h5>
            <div className="card1">

            {showd}
            </div>
            <Footer/>


        </div>
    )
}
export default About;


function showpro(data,i){
    return(
    <div className="card1">


        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title  className="title">{data.title}</Card.Title>
                     <Card.Text className="text">
                        <h6> IssueReported:</h6>
                        <p>{data.issueReported}</p>
                        </Card.Text>
                        <Button variant="primary">Status: {data.status}</Button>
                        <br />
                        <br />
                        <p>ResolutionTime : {data.resolutionTime}</p>
                    </Card.Body>
        </Card>
    </div>

    )
}
