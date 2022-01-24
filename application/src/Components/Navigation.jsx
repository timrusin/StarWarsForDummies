import React, { useState} from "react";
import '../CSS/Navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, DropdownItem, NavbarText, DropdownToggle } from "reactstrap";

const Navigation = ()=>{
    const [ navExpand, setNavExpand ] = useState(false)

    return(
    <Navbar className="nav-bar" color="warning" expand="md" fixed="top" light>
        <NavbarBrand href="/">
        <div className="star-wars">StarWars</div> 
        <div className="dummies">for dummies</div>
        </NavbarBrand>
        <NavbarToggler onClick={()=> setNavExpand(!navExpand)}/>
        <Collapse navbar isOpen={ navExpand }>
        <Nav className="me-auto" navbar>
            <NavItem>
                <NavLink href="/Movies/">
                    Movies
                </NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav >
            <DropdownToggle  caret nav>Characters</DropdownToggle>
            <DropdownMenu end className="drop-down">
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

            <UncontrolledDropdown inNavbar nav >
            <DropdownToggle  caret nav>Species</DropdownToggle>
            <DropdownMenu end className="drop-down">
                <DropdownItem >
                <NavLink href='/species/page1'>Page1</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/species/page2'>Page2</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/species/page3'>Page3</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href='/species/page4'>Page4</NavLink>
                </DropdownItem>
            </DropdownMenu>
            </UncontrolledDropdown>
            
            <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>Planets</DropdownToggle>
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

            <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>Vehicles</DropdownToggle>
                <DropdownMenu end className="drop-down">
                    <DropdownItem>
                    <NavLink href='/vehciles/page1'>Page1</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href='/vehciles/page2'>Page2</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href='/vehciles/page3'>Page3</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href='/vehciles/page4'>Page4</NavLink>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>Starships</DropdownToggle>
                <DropdownMenu end className="drop-down">
                    <DropdownItem>
                    <NavLink href='/starships/page1'>Page1</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href='/starships/page2'>Page2</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href='/starships/page3'>Page3</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href='/starships/page4'>Page4</NavLink>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>


            </Nav>
        </Collapse>
    </Navbar>
    )
}
export default Navigation