import { S } from "./Careers_Styled";
import { FlexWrapper } from "../../../components/FlexWrapper";

type CareerPropsType = {
    fullname?: string
    company: string
    position: string
    year: string
}

export const Career = (props: CareerPropsType) => {
    return (
        <S.SryledCareer>
            <FlexWrapper justify="space-between">
                <span>
                    <S.StyledName>{props.fullname}</S.StyledName> / <span>{props.company}</span>
                </span>
                <span>{props.position}</span>
                <span>{props.year}</span>
            </FlexWrapper>

        </S.SryledCareer>
    )
}
