import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from "../common/Header";
import { loginData } from './demodata';
import Footer from '../common/Footer';


function profile(){
    return(
        <div >
            <Header/>
             <br />
            <br />
            <br />
            <div className='admin'>
                <h2 className=''>Admin Dashboard</h2>
                <h3>Welcome {loginData.name} </h3>
                <p>Manage civic issues efficiently, monitor department performance, and ensure timely resolution of public concerns.</p>
            </div>
            <br />
            <div className='list'>
                    <Card className="dashboard-card">
                        <Card.Header className="card-header-custom">
                            📊 Total Issues Received : <strong>120</strong>
                        </Card.Header>

                        <ListGroup >
                                <ListGroup.Item className='pen'>
                            ⏳ Pending Issues : <strong>45</strong>
                                </ListGroup.Item>

                                <ListGroup.Item className='pg'>
                                🔄 In-Progress Issues : <strong>50</strong>
                                </ListGroup.Item>

                                <ListGroup.Item className='res'>
                                ✅ Resolved Issues : <strong>25</strong>
                                </ListGroup.Item>
                        </ListGroup>
                    </Card>
            </div>
            <Footer/>


        </div>
    )
    }
export default profile;