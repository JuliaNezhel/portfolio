import styled from "styled-components";
import { font } from "./styles/Common";
import { theme } from './styles/Themes';


export const Button =styled.button`
    padding: 12px 32px;
    background-color: ${theme.color.accent};
    ${font({weight: 500, color: "#fff", Fmin: 12, Fmax: 18})}
    border-radius: 6px;

    margin: 0;
    cursor: pointer;

    @media ${theme.media.tablet}{
        padding: 10px 25px;
    }
`

export const ButtonLink = styled(Button)`
    background-color: ${theme.color.primapyBg};
    border: 1px solid ${theme.color.accent};
    color: ${theme.color.accent};
`