import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import './index.css'

export function Home(){
    return(

        /* Aqui não houve alteração, mas tem as sintaxes do reactstrap para formar a navbar e seus itens. */

        <div>
            <Navbar
                color="dark"
                dark
                expand="md"
                light>

                <NavbarBrand href="/">
                Liber
                </NavbarBrand>
                
                <NavbarToggler onClick={function noRefCheck(){}} />

                <Collapse navbar>
                <div className='test'>
                <Nav className="me-auto" navbar right>
                        <NavItem className='navRight'>
                            <NavLink href="/components/">
                                Components
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>

                        <UncontrolledDropdown inNavbar nav>
                            <DropdownToggle
                                caret
                                nav
                            >
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                Option 1
                                </DropdownItem>
                                <DropdownItem>
                                Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                </Nav>
                </div>
                    <NavbarText>
                       Simple Text
                    </NavbarText> 
                </Collapse>
            </Navbar>
        </div>
    )
}