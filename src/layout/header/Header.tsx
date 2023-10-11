import { Container } from "../../components/Container"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Logo } from "../../components/logo/Logo"
import { MobileMenu } from "./headerMenu/modileMenu/MobileMenu"
import  React  from 'react';
import {S} from "./Header_Styles"
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';

const items = ["Services", "Work", "Blog", "Hire me"]


export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    
    
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo />
                    {width < breakpoint ? <MobileMenu menuItem={items}/> 
                                        : <DesktopMenu menuItem={items} />}
                    
                
                </FlexWrapper>
            </Container>

        </S.Header>
    )
}

