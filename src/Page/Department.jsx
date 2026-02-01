import { useState } from "react";
import Header from "../common/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { departments } from "./Depart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../common/Footer";

function Department() {
  const [search, setSearch] = useState("");

  // filter logic
  const showdata = departments.filter((data) =>data.name.toLowerCase().includes(search.toLowerCase()) || data.id.toString().includes(search))
    .map((data, i) => {
      return <Showdept data={data} key={i} />;
    });

  return (
    <div className="dbox">
      <Header />

      <div className="dbox2">
        <h1>🏛️ What is the Department Page?</h1>
        <p>
          The Department Page shows all civic departments responsible for
          handling reported issues. It helps citizens understand who handles
          what, and helps admins route issues faster.
        </p>
      </div>

      <div className="input">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search Department by ID or Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-secondary">Search</Button>
        </InputGroup>

        <br />

        <div className="dept1">
          <div className="h">
            <h3>Search As per the Given Id / Name</h3>
          </div>

          <br />

          {showdata.length > 0 ? showdata : <p>No department found ❌</p>}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Department;

function Showdept(props) {
  const { id, name ,description,contact} = props.data;

  return (
    <ul>
      <li>
        <Container className="mb-2">
          <Row className="border rounded p-2">
            <Col md={2}>
              <strong>{id}</strong>
            </Col>
            <Col md={10} className="head">{name}</Col>
            <Col  md={10}>{description}</Col>
            <Col  md={10}> Contact: {contact}</Col>
          </Row>
        </Container>
      </li>
    </ul>
  );
}
