import React from 'react';
import { Button, ButtonLink } from '../../../components/Button';
import { S } from './Main_Styles';

export const DescriptionMain: React.FC = () => {
    return (
        <S.StyledDescriptionMain>
            <div>
                <S.Line></S.Line>
                <S.NameSpan>Jessica Strosin</S.NameSpan>
            </div>
            <S.MainTitle>Creative thinker Minimalism lover</S.MainTitle>
            <S.TextMain>Hi, I’m Jessica. I’m UI/UX Designer. If you are looking for Designer to build your brands and grow your business Let’s shake hands with me.</S.TextMain>
            <S.ContainerBtn>
                <Button type={"submit"}>Hire me</Button>
                <ButtonLink as={"a"} href="#">Read more</ButtonLink>
            </S.ContainerBtn>
            <S.SmallText>I am currently open for part-time work.</S.SmallText>
        </S.StyledDescriptionMain>
    )
}


