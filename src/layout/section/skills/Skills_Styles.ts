import styled from "styled-components"
import { FlexWrapper } from './../../../components/FlexWrapper';
import { theme } from './../../../components/styles/Themes';


const StyledSkills = styled.section`
    
`
const WrapperSkills = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    ${FlexWrapper} {
        gap: 68px
    }

    @media screen and (max-width: 1200px){
        ${FlexWrapper} {
        gap: 20px;}
    }

    @media ${theme.media.tablet} {

        ${FlexWrapper} {
        gap: 5px;
    }

        flex-wrap: wrap;
        gap: 20px;
    }
`

const StyledPfotoSkill = styled.img`
    max-width: 440px;
    height: 622px;
    object-fit: cover;
    display: block;

    @media ${theme.media.notedook} {
        max-width: 340px;
        max-height: 522px;
        margin: 0 auto;
    }

    @media screen and (max-width: 1153px) {
        max-width: 240px;
        max-height: 422px
    }
`
// Skill 1

const  StyledSkill = styled.div`
    margin: 5px;
    flex-grow: 1;
    width: 275px;

    @media ${theme.media.mobile} {
        width: 278px;
    }
`

const  SkillTitle = styled.h3`
    color: ${theme.color.font};
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
`

const  SkillText = styled.p`
    margin: 20px 0;
    font-size: 12px;
    line-height: 1.3; 
`

    const  SkillLink = styled.a`
    font-size: 12px;
    font-weight: 500;
    line-height: 50%;
    color: ${theme.color.accent};
`

export const S = {
    StyledSkills,
    WrapperSkills,
    StyledPfotoSkill,
    StyledSkill,
    SkillTitle,
    SkillText,
    SkillLink
}