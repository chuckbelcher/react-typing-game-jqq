import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavbar, StyledNavBrand, StyledNavItems, StyledLink } from '../styled/Navbar'
import { Accent } from '../styled/Misc'

export default function Navbar() {
    return (

        <StyledNavbar>
            <StyledNavBrand>
                <Link to="/">Learn.Build.<Accent>Type</Accent>.</Link>
            </StyledNavBrand>
            <StyledNavItems>
                <li><StyledLink to="/highscores">High Scores</StyledLink></li>
                <li><StyledLink to="/">Login</StyledLink></li>
            </StyledNavItems>
        </StyledNavbar>
    )
}
