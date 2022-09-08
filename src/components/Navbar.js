import { Nav, Container, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Header() {
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    toast.success("user Logout success")
    // window.location.reload();
    navigate('/login')
  }

  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-light">
          <b>CMS</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto offset-lg-2 ">
          {localStorage.getItem("token") && (

            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>)}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {localStorage.getItem("token") ? (
                ""
              ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
                </Link>
                 )}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {localStorage.getItem("token") ? (
                ""
              ) : (
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              Signup
            </Link>
            )}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {localStorage.getItem("token") ? (
              <button onClick={()=>logout()} className="btn btn-primary">Logout</button>
              ) : (
                ""
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
