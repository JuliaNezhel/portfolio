import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { S } from "./Foooter_Styles";
import React from 'react';

const SocialItemData = [
    { iconId: "tviter" },
    { iconId: "bro" },
    { iconId: "facebook" },
    { iconId: "codepen" },
    { iconId: "dog" },
    { iconId: "inst" }
]

export const Footer: React.FC = () => {
    return (
        <S.StyledFooter>
            <FlexWrapper direction="column" align="center">
                <S.Text>I’m not currently taking on new client work but feel free to contact me for any other inquiries.</S.Text>
                <S.SocialList>
                    {SocialItemData.map((s, index) => {
                        return <S.SocialItem key={index}>
                            <S.SocialLink href="#">
                                <Icon iconId={s.iconId} key={index} width="35" height="31" viewBox="0 0 35 31" />
                            </S.SocialLink>
                        </S.SocialItem>
                    })}
                </S.SocialList>
            </FlexWrapper>
        </S.StyledFooter>
    )
}