import { theme } from './Themes';

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ( {family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) =>`
    font-family: ${family || 'Inter'};
    font-weight: ${weight || 400};
    color: ${color || theme.color.textFont};
    line-height: ${lineHeight || 1.5};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`