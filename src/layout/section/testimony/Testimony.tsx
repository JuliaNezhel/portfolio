import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Slider } from "./Slider"
import { S } from "./Tectimony_Styles"
import React from 'react';

// const testimonyDate = [
//     {
//         iconId: "line",
//         title: "Business planning",
//         text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     },
//     {
//         iconId: "dolar",
//         title: "Financial planning",
//         text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     },
//     {
//         iconId: "research",
//         title: "Market Analytics",
//         text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     }
// ]

export const Testimony: React.FC = () => {
    return (
        <S.StyledTestimony>
            <Container>
                <Slider/>
                {/* <FlexWrapper justify="space-between" wrap="wrap">
                    {testimonyDate.map((t, index) => {
                        return <Slider iconId={t.iconId} key={index}
                            title={t.title}
                            text={t.text} />
                    })}
                </FlexWrapper> */}
            </Container>

        </S.StyledTestimony>
    )
}
