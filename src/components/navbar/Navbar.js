import "./navbar.css"
import { Container, } from "react-bootstrap"

const Navbar = () => {
    return (
     <div className="navbar">
        <Container className="text-white d-flex align-item-center ">
            <span className="logo">EskondelBooking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </Container>
     </div>
        

    )
}

export default Navbar