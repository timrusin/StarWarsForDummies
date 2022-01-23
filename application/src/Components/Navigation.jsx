import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Navigation.css'
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, DropdownItem, NavbarText, DropdownToggle } from "reactstrap";


const Navigation = ()=>{
    return(
<Container>
    <Navbar className="nav-bar" color="warning" expand="md"  light>
        <NavbarBrand href="/">
        <span className="star-wars">StarWars</span> <span className="dummies">for dummies</span>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
        <Nav className="me-auto" navbar>
            
            <NavItem>
                <NavLink href="/Movies/">
                Movies
                </NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav> Characters</DropdownToggle>
            <DropdownMenu end className="drop-down">
                <DropdownItem>
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
            <DropdownToggle caret nav> Planets</DropdownToggle>
            <DropdownMenu end className="drop-down">
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
            </UncontrolledDropdown>
            
            
            
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