import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

const SryledCareers = styled.section`
    justify-content: space-between;

    ${Container}{
        max-width: 1249px;
    }
`


const SryledCareer = styled.div`
    ${FlexWrapper}{
        gap: 50px;
    }
`

const StyledName = styled.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    color: #1F2937;
`

export const S = {
    SryledCareers,
    SryledCareer,
    StyledName
}