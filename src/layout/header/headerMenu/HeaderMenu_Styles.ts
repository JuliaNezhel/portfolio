import styled, { css } from "styled-components"
import { theme } from './../../../components/styles/Themes';

const Link = styled.a`
    color: #6B7280;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    padding: 12px 32px;

    &:hover {
        color: ${theme.color.accent};
        outline: 1px solid ${theme.color.accent};
        border-radius: 6px;
    }
`

//  Mobile Menu

const StyledMobileMenu = styled.nav`

`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 99999999;
    cursor: pointer;
    background-color: rgba(254, 242, 242, 0.63);
    border: solid 1px ${theme.color.accent};
    

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.color.accent};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
            `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.color.accent};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}

        }
        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.color.accent};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`


const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: ${theme.color.secondaryBg};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
        `
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        
    }
`

// Desktop Menu


const StyledDesktopMenu = styled.nav`
    min-width: 48%;

    ul{
        display: flex;
        justify-content: space-between;
    }
`

export const  S ={
    Link,
    StyledMobileMenu,
    BurgerButton,
    MobileMenuPopup,
    StyledDesktopMenu,
}

