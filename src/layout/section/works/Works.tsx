import { SectionTitle } from "../../../components/SectionTitle"
import { Work } from "./Work"
import socialImgBalcony from "./../../../assets/img/balcony.png"
import socialImgCar from "./../../../assets/img/car.png"
import socialImgStreet from "./../../../assets/img/street.png"
import socialImgNature from "./../../../assets/img/nature.png"
import { Container } from "../../../components/Container"
import { S } from "./Works_Styles"
import React from 'react';

export const Works: React.FC = () => {
    return (
        <S.StyledWorks>
            <Container>
                <SectionTitle>It’s great to always give the customer the best feed.</SectionTitle>
                <S.StyledWorkWrapper>
                    <Work src={socialImgCar} />
                    <Work src={socialImgBalcony} />
                    <Work src={socialImgStreet} />
                    <Work src={socialImgNature} />
                </S.StyledWorkWrapper>
            </Container>
        </S.StyledWorks>

    )
}

