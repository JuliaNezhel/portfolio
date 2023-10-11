import styled from "styled-components"
import { theme } from './../../../components/styles/Themes';

const StyledContacts = styled.div`
    background-color: ${theme.color.secondaryBg};
`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 150px;
    }
`
const Field = styled.input`
width: 100%;
border: solid 1px #585c5c;
padding: 7px 15px;
color: ${theme.color.textFont};
font-family: "Inter", sans-serif;

&::placeholder{
    color: ${theme.color.placeholder};
    text-transform: capitalize;
    }
`

export const S = {
    StyledContacts,
    StyledForm,
    Field
}
