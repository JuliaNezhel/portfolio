import iconSprite from "../../assets/img/icon-srite.svg"

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
    

export const Icon = (props: IconPropsType) => {
    return ( 
            <svg width={props.width || "135"} height={props.height || "38"} viewBox={props.viewBox || "0 0 157 38"} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconSprite}#${props.iconId}`} />
            </svg>
    )
}