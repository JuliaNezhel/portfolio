import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Career } from "./Career"
import { S } from "./Careers_Styled"

const CareerDate = [
    {
        fullname: "Massa Fames",
        company: "New York",
        position: "Junior Front-End Developer",
        year: "2016"
    },
    {
        fullname: "Massa Fames",
        company: "New York",
        position: "Junior Front-End Developer",
        year: "2016"
    },
    {
        fullname: "Massa Fames",
        company: "New York",
        position: "Junior Front-End Developer",
        year: "2016"
    },
    {
        fullname: "Massa Fames",
        company: "New York",
        position: "Junior Front-End Developer",
        year: "2016"
    },
    {
        fullname: "Massa Fames",
        company: "New York",
        position: "Junior Front-End Developer",
        year: "2016"
    },
]

export const Careers = () => {
    return (
        <S.SryledCareers>
            <Container>
                <SectionTitle>Careers</SectionTitle>
                <FlexWrapper direction="column" gap="80px">
                    <FlexWrapper justify="space-between">
                        <span>COMPANY</span><span>POSITION</span><span>YEAR</span>
                    </FlexWrapper>
                    {CareerDate.map((c, index) => {
                        return (
                            <Career key={index}
                                fullname={c.fullname}
                                company={c.company}
                                position={c.position}
                                year={c.year} />
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.SryledCareers>
    )
}