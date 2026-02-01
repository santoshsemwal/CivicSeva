import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Header from "../common/Header";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { loginData } from './demodata';
import 'react-toastify/dist/ReactToastify.css';


function profile(){
    
     const [userID, setUserId] = useState();
     const [password, setPassword] = useState();
     const navigate = useNavigate();

     const login = () => {
         const user = loginData.find((u) => u.id == userID && u.password === password);
         if (!user) {
             toast.error("Invalid credentials !");
             return;
            }
            localStorage.setItem("role", user.role);
            localStorage.setItem("userId", user.id);
            toast.success("Login successful!");
            if (user.role === 'admin') {
                navigate('/admin-login');
            } else {
                navigate('/user-login');
            }
        }
        return(
            <div>
            <Header/>

            <br />
            <br />
            <br />
            <div className="pass">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Id</InputGroup.Text>
                    <Form.Control
                    placeholder="Username"
                    value={userID}
                    onChange={(e)=>setUserId(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                    <Form.Control
                    placeholder="Password"
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </InputGroup>
                 <br />
                    <div>
                        <p><strong>Note:</strong> Include "Admin" credentials for Admin login</p>
                        <p><strong>Demo Credentials</strong></p>
                        <p>Admin ID: abcdadmin@gmail.com</p>
                        <p>Password: 12345@</p>
                        <p>User ID: user1@gmail.com</p>
                        <p>Password: user123</p>
                    </div>
                <div>
                    <Button onClick={login}  aria-controls="example-collapse-text" aria-expanded={open}
                        >
                        Submit
                    </Button>
    
                    <ToastContainer />
                </div>

                            
            </div>
        </div>
    )
}
export default profile;