import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import { S } from './Company_Styles'
import React from 'react';


export const Company: React.FC = () => {
    return <S.CompanyStyled>
        <Container>
            <S.Title>Trusted by</S.Title>
            <FlexWrapper justify="space-around" align="center" wrap="wrap">
                <Icon iconId="alpabet"></Icon>
                <Icon iconId="shopify" width="157px" height="51px" viewBox="0 0 157 51"></Icon>
                <Icon iconId="amazon" width="156px" height="51px" viewBox="0 0 156 51"></Icon>
                <Icon iconId="google" width="157px" height="51px" viewBox="0 0 157 51"></Icon>
                <Icon iconId="netflix"></Icon>
            </FlexWrapper>
        </Container>

    </S.CompanyStyled>
}
