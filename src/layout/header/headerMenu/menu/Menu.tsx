import React from "react";
import { S } from './../HeaderMenu_Styles';

export const Menu: React.FC<{menuItem: Array<string>}> = (props: {menuItem: Array<string>}) => {
    return (
            <ul>
                {props.menuItem.map((item, index) => {
                    return ( 
                        <li key = {index}>
                            <S.Link href="">{item}</S.Link>
                        </li>)
                })}
            </ul>
    )
}