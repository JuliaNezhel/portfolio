import { Menu } from "../menu/Menu"
import React, { useState } from 'react';
import { S } from "./../HeaderMenu_Styles";

export const MobileMenu: React.FC<{ menuItem: Array<string> }> = (props: { menuItem: Array<string> }) => {

    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => { setmenuIsOpen(!menuIsOpen) }

    return (
        <S.StyledMobileMenu>

            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setmenuIsOpen(false)}}>
                <Menu menuItem={props.menuItem} />
            </S.MobileMenuPopup>
        </S.StyledMobileMenu>
    )
}