import styled from 'styled-components';
import { Container } from './../../../components/Container';
import { theme } from './../../../components/styles/Themes';
import { font } from './../../../components/styles/Common';


const StyledTestimony = styled.section`
    
    ${Container}{
        max-width: 1249px;
    }
`
const StyledSlider = styled.div`
    max-width: 350px;
    min-width: 200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const IconWrapper = styled.div`
    position: relative;
    margin: 50px auto 0;

    &::before{
        content: "";
        display: inline-block;
        width: 140px;
        height: 140px;
        border-radius: 6px;
        background:  #EEF2FF;
        transform: translate(-50%, -50%); 
    
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: -1;
        transform-origin: top left;

        @media ${theme.media.notedook}{
            width: 100px;
            height: 100px;
        }
    }
`

const Title = styled.h3`
    padding: 90px 0 20px 0;
    ${font({ weight: 600, color: theme.color.font, lineHeight: 1.2, Fmax: 30, Fmin: 20 })}
`

const Text = styled.p`
    text-align: center;
    max-width: 361px;
    ${font({ lineHeight: 1.5, Fmax: 18, Fmin: 14 })}
    padding: 0 0 50px 0;
`



export const S = {
    StyledTestimony,
    StyledSlider,
    IconWrapper,
    Title,
    Text
}