import { Icon } from "../../../components/icon/Icon"
import {S} from "./Skills_Styles"
import  React  from 'react';

type SkillPropsType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.StyledSkill>
            <S.SkillTitle>{props.title}</S.SkillTitle>
            <S.SkillText>{props.description}</S.SkillText>
            <div>
                <S.SkillLink href="#">See Works</S.SkillLink>
                <Icon iconId="arrow" width="16" height="16" viewBox="0 0 16 11"></Icon>
            </div>
        </S.StyledSkill>
    )
}

