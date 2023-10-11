import styled from "styled-components"
import { font } from "./styles/Common";
import { theme } from './styles/Themes';

export const SectionTitle = styled.h2`
    ${font({weight: 600, color: theme.color.font, lineHeight: 1, Fmin: 30, Fmax: 48})}

    text-align: center;
    max-width: 1039px;
    margin: 0 auto;
    margin-bottom: 150px;

    @media ${theme.media.notedook} {
        margin-bottom: 120px;
    }

    @media ${theme.media.tablet} {
        margin-bottom: 100px;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 80px;
    }

    span{
        color: ${theme.color.accent};
    }
`