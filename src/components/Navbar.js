import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavbar, StyledNavBrand, StyledNavItems, StyledLink } from '../styled/Navbar'
import { Accent } from '../styled/Misc'
import { useAuth0 } from '@auth0/auth0-react'

export default function Navbar() {
    const { isAuthenticated, loginWithPopup, logout } = useAuth0() 
    return (

        <StyledNavbar>
            <StyledNavBrand>
                <Link to="/">Learn.Build.<Accent>Type</Accent>.</Link>
            </StyledNavBrand>
            <StyledNavItems>
                <li><StyledLink to="/highscores">High Scores</StyledLink></li>
                {!isAuthenticated &&
                    <li><button onClick={() => loginWithPopup()}>Login</button></li>
                }
                {isAuthenticated &&
                    <li><button onClick={ () => logout({ returnTo: window.location.origin })}>Logout</button></li>
                }
            </StyledNavItems>
        </StyledNavbar>
    )
}
