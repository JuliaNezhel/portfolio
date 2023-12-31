import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./Skill";
import pfoto from "../../../assets/img/finalProect.png";
import { Container } from "../../../components/Container";
import {S} from "./Skills_Styles";
import  React  from 'react';



const SkillData = [
    {
        title: "Web design",
        description: "Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.",
    },
    {
        title: "Mobile design",
        description: "Mobile application development is a highlight that businesses are interested in at the moment and in the future.",
    },
    {
        title: "Branding",
        description: "Understanding the business and their target customers, I’m the bridges to bring the brand closer to their clients.",
    },
    {
        title: "3D Modeling",
        description: "Help you translate your existing design or concept into CAD or to work with you to develop the ideal design. 3D Models great for modern digital art",
    },
    {
        title: "Photography",
        description: "While stock photography is a great option for sourcing high-quality photos, it’s important that you choose your photos thoughtfully.",
    },
    {
        title: "Video creating",
        description: "Create high-impact social videos with our easy video maker. Use custom video templates to find the right story for your business.",
    },
]

export const Skills: React.FC = () => {
    return (
        <S.StyledSkills>
            <Container>
                <SectionTitle>
                    From beginning ideas to individual integrity, rich identity from the line <span>on the paper to final projects</span>
                </SectionTitle>
                <S.WrapperSkills>
                    <S.StyledPfotoSkill src={pfoto}></S.StyledPfotoSkill>
                    <FlexWrapper wrap="wrap" >
                        {SkillData.map((s , index) => {
                            return <Skill title={s.title} key={index}
                                description={s.description} />
                        })}
                    </FlexWrapper>
                </S.WrapperSkills>
            </Container>



        </S.StyledSkills >
    )
}



