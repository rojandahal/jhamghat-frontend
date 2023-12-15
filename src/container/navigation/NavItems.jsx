import { useState } from "react";
import "./navitem.css";
import Cart from "../../assets/cart.svg";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Nav,
} from "reactstrap";
import Button from "../../components/Button/Button";
export default function NavItems(args) {
  const [isOpen, setIsOpen] = useState(false);
  const isExpanded = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        {...args}
        expand={isExpanded ? "lg" : false}
        className='navbar-custom'
        style={{ paddingInlineStart: "6rem", paddingInlineEnd: "6rem" }}
      >
        <NavbarBrand
          href='/'
          className='me-5 custom-logo'
        >
          <img
            src='https://murphystechnology.com/jhamghatkhajagharweb/assets/img/logo.png'
            className='me-5 '
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
        >
          <Nav
            className='d-flex justify-content-evenly me-auto custom-nav-items '
            color='black'
            navbar
          >
            <NavItem className='me-5'>
              <NavLink
                href='#'
                className='nav-link'
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem className='me-5'>
              <NavLink
                href='#'
                className='nav-link'
              >
                Menu
              </NavLink>
            </NavItem>
            <NavItem className='me-5'>
              <NavLink
                href='#'
                className='nav-link'
              >
                About
              </NavLink>
            </NavItem>
            <NavItem className='me-5'>
              <NavLink
                href='#'
                className='nav-link'
              >
                Gallery
              </NavLink>
            </NavItem>
            <NavItem className='me-5'>
              <NavLink
                href='#'
                className='nav-link'
              >
                Packages
              </NavLink>
            </NavItem>
            <NavItem className='me-5'>
              <NavLink
                href='#'
                className='nav-link'
              >
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem className='d-flex flex-row'>
              <NavLink
                href='#'
                className='w-25'
              >
                <img
                  src={Cart}
                  className='cart-icon'
                />
              </NavLink>
            </NavItem>
            <NavItem>
              <Button title={"Reserve a table"}></Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
