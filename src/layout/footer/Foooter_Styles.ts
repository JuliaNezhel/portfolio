import styled from "styled-components"
import { font } from "../../components/styles/Common";
import { theme } from './../../components/styles/Themes';

const StyledFooter = styled.footer`
background-color: ${theme.color.secondaryBg};
padding: 0 0 100px 0;
`

const Text = styled.span`
max-width: 664px;
text-align: center;
padding: 20px 0 100px 0;
${font({ Fmax: 18, Fmin: 12 })}

@media ${theme.media.mobile}{
    padding: 20px 0 70px 0;
}
`

const SocialList = styled.ul`
display: flex;
padding: 0 5px 0 0;
gap: 50px;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`

const SocialItem = styled.li`
padding: 0 0 5px 0;
`

const SocialLink = styled.a`

`

export const S = {
    StyledFooter,
    Text,
    SocialList,
    SocialItem,
    SocialLink
}