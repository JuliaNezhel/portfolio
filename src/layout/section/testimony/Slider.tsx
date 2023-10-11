import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from "./Tectimony_Styles";
import { Icon } from "../../../components/icon/Icon";
import styled from 'styled-components';

type SliderPropsType = {
    iconId: string
    title: string
    text: string
}


const Slyde = (props: SliderPropsType) => {
    return (
        <S.StyledSlider>
            <S.IconWrapper>
                <Icon width="40" height="40" viewBox="0 0 40 40" iconId={props.iconId} />
            </S.IconWrapper>
            <S.Title>{props.title}</S.Title>
            <S.Text>{props.text}</S.Text>
        </S.StyledSlider>
    )
}

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <Slyde  iconId='line' title='Business planning' text='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'></Slyde>,
    <Slyde iconId="dolar" title="Financial planning" text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ></Slyde>,
    <Slyde iconId="research"title="Market Analytics" text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
];

export const Slider = () => (
    <SlyledDlyderReact>
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
        />
    </SlyledDlyderReact>

);

const SlyledDlyderReact = styled.div`
    display: flex;
`

/*import { Icon } from "../../../components/icon/Icon";
import { S } from "./Tectimony_Styles";
import React from 'react';
import { styled } from 'styled-components';

type SliderPropsType = {
    iconId: string
    title: string
    text: string
}


export const Slider: React.FC<SliderPropsType> = (props: SliderPropsType) => {
    return (
        <S.StyledSlider>
            <S.IconWrapper>
                <Icon width="40" height="40" viewBox="0 0 40 40" iconId={props.iconId} />
            </S.IconWrapper>

            <S.Title>{props.title}</S.Title>
            <S.Text>{props.text}</S.Text>
        </S.StyledSlider>
    )
}*/