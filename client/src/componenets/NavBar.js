import React from 'react';
import '../App.css';

import * as Routes from '../constants/routes';
import SignOutButton from './SignOutButton';
import { HomeLink } from './Home';
import { CreateGroupLink } from './CreateGroup';

import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import { Row, Col } from 'reactstrap';


const background = {
    backgroundColor: '#003366',
    width: 'auto',
    height: '100%',
    overflow: 'hidden',
};

const padding = {
    marginLeft: '40px'
};

const padding2 = {
    textAlign: 'left',
};

const NavBar = (props) => {
    return (
        <div>
            <header style={background}>
                <div>
                    <Row>
                        <Col>
                            <Navbar expand="md">
                                {props.authUser ? (<section>
                                    <Nav navbar>
                                        <NavItem >
                                            <HomeLink />
                                        </NavItem>
                                        <NavItem >
                                            <CreateGroupLink />
                                        </NavItem>
                                        <NavItem>
                                            <SignOutButton />
                                        </NavItem>
                                    </Nav>
                                </section>
                                ) : (
                                        <section>
                                            <Nav navbar >
                                                <div style={padding2}>
                                                    <NavItem>
                                                        <NavLink href={Routes.signin}>Sign In </NavLink>
                                                    </NavItem>
                                                </div>
                                                <div style={padding}>
                                                    <NavItem>
                                                        <NavLink href={Routes.signup}>Sign Up</NavLink>
                                                    </NavItem>
                                                </div>
                                            </Nav>
                                        </section>
                                    )
                                }
                            </Navbar>
                        </Col>
                    </Row>
                </div>
            </header>
        </div >

    )
}


export default NavBar;