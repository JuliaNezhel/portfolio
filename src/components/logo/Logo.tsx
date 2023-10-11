import styled from "styled-components"
import { theme } from "../styles/Themes"
import React  from 'react';

export const Logo: React.FC = () => {
    return (
        <LogoLink href="#">
            <StyledLogo>D </StyledLogo>
        </LogoLink>
    )
}

const LogoLink = styled.a`
    height: 62px;
    width: 62px;
    border-radius: 50%;
    background-color: #EEEBFF;

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.media.tablet} {
        height: 50px;
        width: 50px;
    }
`

const StyledLogo = styled.span`
    transform: rotate(30deg); 
    color: ${theme.color.accent};
    font-size: 25px;
    font-weight: 600;
`