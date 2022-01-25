import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Navigation.css'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = (props)=>{
    const [ navExpand, setNavExpand ] = useState(false)

    return(
    <Navbar className="nav-bar" color="warning" expand="sm" fixed="top" light>
        <NavbarBrand href="/">
        <span className="star-wars">StarWars</span> 
        <span className="dummies">for dummies</span>
        </NavbarBrand>
        <NavbarToggler onClick={()=> setNavExpand(!navExpand)}/>
        <Collapse navbar isOpen={ navExpand }>
        <Nav className="me-auto" navbar>
            <NavItem>
                <NavLink href="/movies/">
                    Movies
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/characters/page1">
                    Characters
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/planets/page1">
                    Planets
                </NavLink>
            </NavItem>

            

            {/* <UncontrolledDropdown inNavbar nav >
            <DropdownToggle  caret nav>Characters</DropdownToggle>
            <DropdownMenu end className="menu">
                <DropdownItem >
                <NavLink href='/characters/page1'>Page1</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/characters/page2'>Page2</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/characters/page3'>Page3</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/characters/page4'>Page4</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/characters/page5'>Page5</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/characters/page6'>Page6</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/characters/page7'>Page7</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/characters/page8'>Page8</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/characters/page9'>Page9</NavLink>
                </DropdownItem>
            </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>Planets</DropdownToggle>
                <DropdownMenu end className="menu">
                    <DropdownItem>
                    <NavLink href='/planets/page1'>Page1</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href='/planets/page2'>Page2</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href='/planets/page3'>Page3</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href='/planets/page4'>Page4</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href='/planets/page5'>Page5</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href='/planets/page6'>Page6</NavLink>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown> */}

            {/* <NavbarText className="swapi">
            powered by:<NavLink href="https://swapi.dev/" target="new">SWAPI</NavLink>
            </NavbarText> */}

            </Nav>
        </Collapse>
    </Navbar>
    )
}
export default Navigation