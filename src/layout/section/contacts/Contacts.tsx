import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { SectionTitle } from "../../../components/SectionTitle"
import { S } from "./Contacts_Styles";
import React from 'react';

export const Contacts: React.FC = () => {
    return (
        <S.StyledContacts>
            <Container>
                <SectionTitle>Contact with me</SectionTitle>
                <S.StyledForm>
                    <S.Field placeholder="name"></S.Field>
                    <S.Field placeholder="sabject"></S.Field>
                    <S.Field as={"textarea"} placeholder="massage"></S.Field>
                    <Button type={"submit"}>Send Massage</Button>
                </S.StyledForm>
            </Container>
        </S.StyledContacts>
    )
}
