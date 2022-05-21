import { ComponentTypes } from '../../types';

export interface TextTypes extends ComponentTypes {
    variant: 'title' | 'subTitle' | 'paragraph1' | 'paragraph2' | 'smallestException'
    tag?: string
    as?: any
    color?: string
    link?: boolean
    align?: 'center' | 'left' | 'right' | 'justify'
}
