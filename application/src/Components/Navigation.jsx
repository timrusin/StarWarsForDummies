import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Navigation.css'
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, DropdownItem, NavbarText, DropdownToggle } from "reactstrap";


const Navigation = ()=>{
    return(
    // <nav>
    //     <Link to ='/'><div className="Home-Logo">Star Wars: the basics</div></Link>
    //     <div className="buttons">
    //     <Link to ='/characters'><button>characters</button></Link>  
    //     <Link to ='/planets'><button>planets</button></Link>
    //     <Link to ='/movies'><button>movies</button></Link>
    //     </div>
    // </nav>
<Container>
    <Navbar className="nav-bar" color="warning" expand="md" light>
        <NavbarBrand href="/">
        StarWars for dummies
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
        <Nav className="me-auto" navbar>
            <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav> Characters</DropdownToggle>
            <DropdownMenu end>
                <DropdownItem>
                <NavLink href='/characters'>Page1</NavLink>
                </DropdownItem>
                <DropdownItem>
                Page2
                </DropdownItem>
                {/* <DropdownItem divider />
                <DropdownItem>
                Reset
                </DropdownItem> */}
            </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
                <NavLink href="/Movies/">
                Movies
                </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/planets">
                Planets
            </NavLink>
            </NavItem>
        </Nav>
        <NavbarText className="swapi">
            powered by:<NavLink href="https://swapi.dev/" target="new">SWAPI</NavLink>
        </NavbarText>
        </Collapse>
    </Navbar>
  </Container>
    )
}
export default Navigation