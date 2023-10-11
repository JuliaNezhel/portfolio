import { Icon } from "../../../components/icon/Icon"
import { S } from "./Works_Styles"
import React from 'react';

type WorkPropsType = {
    src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.GridItem>
            <S.StyledWork src={props.src}></S.StyledWork>
            <S.ButtomeWork>
                <S.StyledDl>
                    <dt>Project title here</dt>
                    <dd>Photograph</dd>
                </S.StyledDl>
                <Icon iconId="arrow" width="16" height="16" viewBox="0 0 16 11"></Icon>
            </S.ButtomeWork>
        </S.GridItem>
    )
}

