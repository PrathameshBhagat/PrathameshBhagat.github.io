import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

const Header = () => {
 
return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'gold'}}>
                Prathamesh Bhagat
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <a className ="nav-link" href="http://github.com/PrathameshBhagat">GitHub</a>
                    <a className ="nav-link" href="http://linkedin.com/in/prathameshvivekbhagat">LinkedIn</a>
                    <a className ="nav-link" href="http://leetcode.com/Prathamesh_Bhagat">LeetCode</a>
                    <a className ="nav-link" href="https://t.me/+917058031648/Hello Prathamesh">Telegram</a>
                </Nav>
                <a href="tel:+917058031648">
                    <Button variant="outline-info" className="me-2">Call</Button>
                </a>
                <a href="mailto:prathameshbhagat0608@gmail.com">
                    <Button variant="outline-info" className="me-2">Mail</Button>
                </a>
                <a href="https://wa.me/7058031648">
                    <Button variant="outline-info" className="me-2">WhatsApp</Button>
                </a>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
