import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { departments } from "./Depart"; 
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import states from './state';
import Header from '../common/Header';


function Complaintpage() {

    const Stat=states.map((data,i)=>{
        return(
            <Sstate data={data} key={i}/>
        )
    })


    return (
        <div className='complaint'>
           <Header/>


            <div >
                <InputGroup className="mb-3">
                    <Form.Control aria-label="Text input with dropdown button" placeholder='Discription'/>
                </InputGroup>

                <DropdownButton
                    variant="outline-secondary"
                    title="Select Department"
                    id="department-dropdown"
                    >
                    {departments.map((dept) => (
                        <Dropdown.Item key={dept.id} href="#">
                            {dept.name} 
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <Form.Group controlId="formFileLg" className="mb-3 mt-3">
                    <Form.Label>Upload File</Form.Label>
                    <Form.Control type="file" size="lg" />
                </Form.Group>
            </div>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            {Stat}
                        </Form.Select>
                        </Form.Group>

                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
        </div>
    )
 
}

export default Complaintpage;

function Sstate({data}){
    return(
           <option value={data}>{data.name}</option>
    )
}
