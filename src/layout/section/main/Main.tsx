import React from "react";
import pfoto from "../../../assets/img/photo.png"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { DescriptionMain } from './DescriptionMain';
import { S } from './Main_Styles'
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-around" wrap="wrap">
                    <DescriptionMain />
                    <Tilt>
                        <S.Pfoto src={pfoto} />
                    </Tilt>
                    
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    )
}
