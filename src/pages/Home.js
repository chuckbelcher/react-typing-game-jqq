import React from 'react'
import CTA from '../styled/CTA';
import { Accent, StyledTitle } from '../styled/Misc'
import { useAuth0 } from '@auth0/auth0-react';

export default function Home() {
    const { user } = useAuth0();
    console.log(user)
    return (
        <div>
            <StyledTitle>Ready to <Accent>type</Accent>  ?</StyledTitle>
            <CTA to="/game">
                Click or type '<Accent>'s'</Accent>' to start playing!
            </CTA>
        </div >
    )
}
