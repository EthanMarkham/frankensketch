import { CSSProperties } from "styled-components";

//GENERIC STYLES
export interface GenericStyleProps {
    color?: string;
    fontSize?: string;
    backgroundColor?: string;
    width?: string;
    height?: string;
    zIndex?: number;
    margin?: string;
    background?: string;
    backgroundImage?: string;
    position?: string;
    padding?: string;
    borderColor?: string;
    borderRadius?: string;
    css?: CSSProperties;
    fontWeight?: string;
}

//FLEX BOX

export interface FlexBoxProps extends GenericStyleProps {
    direction?: string;
    horizontalAlignment?: string;
    verticalAlignment?: string;
    vhCenter?: boolean;
    justifyContent?: string;
    alignContent?: string;
}

export interface AnimatedDivProps extends GenericStyleProps {
    styles?: any;
}

export interface AnimatedFlexBoxProps extends FlexBoxProps, AnimatedDivProps {}
