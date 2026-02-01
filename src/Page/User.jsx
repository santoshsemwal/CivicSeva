import Header from "../common/Header";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { loginData } from "./demodata";
import Footer from "../common/Footer";


function profile(){
    return(
        <div>

            <Header/>
            <br />
            <br /> 
        <div className="user">
            <h3>
                User login
            </h3>
             <p>Welcome, {loginData.name} 👋
                Track your complaints and stay updated on their progress.
            </p>
        </div>
        <div className="summary">
                <Card className="summary-card">
                        <Card.Header className="summary-header">
                            📊 Summary
                        </Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="total">
                            📝 Total Issues Raised :  <span>8</span>
                            </ListGroup.Item>

                            <ListGroup.Item className="pen">
                            ⏳ Pending :  <span>3</span>
                            </ListGroup.Item>

                            <ListGroup.Item className="pg">
                            🔄 In Progress :  <span>4</span>
                            </ListGroup.Item>

                            <ListGroup.Item className="res">
                            ✅ Resolved : <span>1</span>
                            </ListGroup.Item>
                        </ListGroup>
            </Card>

        </div>
        <div>
             <Button variant="primary" >
                ➕ Raise a Complaint
            </Button>
        </div>

        <Footer/>


            
        </div>

    )
}
export default profile;