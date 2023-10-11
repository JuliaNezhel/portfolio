import  styled from 'styled-components';
import { Container } from './../../../components/Container';
import { theme } from './../../../components/styles/Themes';
import { FlexWrapper } from './../../../components/FlexWrapper';

const CompanyStyled = styled.div`
    background-color: #FEF2F2;
    min-height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;


    ${Container}{
        padding-bottom: 0;

        @media ${theme.media.tablet}{
            text-align: center;
        }

    }

    ${FlexWrapper}{
        gap: 10px;
        padding-bottom: 100px;
    }
`

const Title = styled.span`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    color: #9CA3AF;
    display: block;
    padding: 100px 0 20px 11px;
`

export const S = {
    CompanyStyled,
    Title
}