import styled from 'styled-components';
import { theme } from './../../../components/styles/Themes';
import { font } from './../../../components/styles/Common';
import { Button, ButtonLink } from './../../../components/Button';



const StyledMain = styled.section`
    min-height: 100vh;
    padding: 189px 0 0 0;
`

const Pfoto = styled.img`
    max-width: 478px;
    max-height: 525px;
    object-fit: cover;

    @media ${theme.media.notedook}{
        max-width: 320px;
        max-height: 400px;
    }

    @media ${theme.media.mobile}{
        max-width: 228px;
        max-height: 275px;
    }
`

//Discription


const StyledDescriptionMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 611px;
    flex-shrink: 2;
    width: 380px;
    flex-grow: 1;
`

const Line = styled.span`
    position: relative;

    &::before{
        content: "";
        position: absolute;
        width: 102px;
        height: 1px;
        background-color: ${theme.color.accent};
        display: inline-block;
        top: 50%;

        @media ${theme.media.mobile}{
            width: 75px;
        }
    }
`
const NameSpan = styled.span`
    margin: 0 0 0 104px;
    padding: 0 0 0 10px;

    ${font({weight: 500, color: theme.color.accent, Fmin: 12, Fmax: 20})}

    @media ${theme.media.mobile}{
        margin: 0 0 0 80px;
        }
`

const MainTitle = styled.h1`
    ${font({weight: 700, lineHeight: 1, color: theme.color.font, Fmin: 32, Fmax: 72})}
`

const TextMain = styled.p`
    ${font({weight: 400, Fmin: 11, Fmax: 18})}
    max-width: 553px;

    @media ${theme.media.notedook}{
        max-width: 400px;
    }
`

const ContainerBtn = styled.div`
    
    ${Button} {
        & + ${ButtonLink} {
        margin-left: 20px;
        }
    }
`

const SmallText = styled.span`
    ${font({lineHeight: 1.3, Fmin: 8, Fmax: 12})}
    position: relative;

    &::before{
        content: "";
        position: absolute;
        height: 1px;
        max-width: 622px;
        width: 100%;
        background-color: #E5E7EB;
        top: -20px;
    }
`


export const S = {
    StyledMain,
    Pfoto,
    StyledDescriptionMain,
    Line,
    NameSpan,
    MainTitle,
    TextMain,
    ContainerBtn,
    SmallText,
}
