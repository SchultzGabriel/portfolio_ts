import { ComponentTypes } from '../../types';

export interface TextTypes extends ComponentTypes {
    variant: string
    tag?: string
    as?: any
    color?: string
    link?: boolean
}
