import styled from "styled-components";
import {
    AnimatedDivProps,
    AnimatedFlexBoxProps,
    FlexBoxProps,
    GenericStyleProps,
} from "types/style";
import {
    InputGroup,
    InputField,
    InputLabel,
    InputTextHelper,
    DropdownField
} from "./inputform";
import {
    Button,
    FrankenSketchHeader,
    Stiches,
    Text,
    Loader,
    Card,
    NavDiv,
    HeaderDiv,
    PlaceHolderDiv
} from "./generic";
import { SketchCanvas } from "./sketchpad";
import { animated } from "react-spring";

//GENERIC STYLES
const cssToString = (style: any) => {
    return Object.keys(style).reduce((accumulator, key) => {
        const regex = new RegExp(/[A-Z]/g);
        const kebabCase = (str: string) =>
            str.replace(regex, (v) => `-${v.toLowerCase()}`);

        const cssKey = kebabCase(key);
        const cssValue = style[key].replace("'", "");
        return `${accumulator}${cssKey}:${cssValue};`;
    }, "");
};

export const getGenericProps = (props: GenericStyleProps) => {
    let output = "";
    //size
    if (props.width) output += `width: ${props.width};`;
    if (props.height) output += `height: ${props.height};`;
    //colors
    if (props.backgroundColor)
        output += `background-color: ${props.backgroundColor};`;
    if (props.background) output += `background: ${props.background};`;

    if (props.color) output += `color: ${props.color};`;
    if (props.borderColor) output += `border-color: ${props.borderColor};`;

    //position
    if (props.position) output += `position: ${props.position};`;
    if (props.zIndex) output += `z-index: ${props.zIndex};`;

    if (props.margin) output += `margin: ${props.margin};`;
    if (props.padding) output += `padding: ${props.padding};`;

    if (props.backgroundImage) {
        output += `
            background-image: url(${props.backgroundImage});
            
            height: 100vh;

            background-position: center;
            background-repeat: no-repeat;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        `;
    }
    if(props.fontSize) output += `font-size: ${props.fontSize};`
    if(props.borderRadius) output += `border-radius: ${props.borderRadius};`
    if(props.fontWeight) output += `font-weight: ${props.fontWeight};`

    if (props.css) output += cssToString(props.css);

    return output;
};

export const AnimatedDiv = styled(animated("div"))<AnimatedDivProps>`
    ${(props) => getGenericProps(props)};
`;

export const FlexBox = styled("div")<FlexBoxProps>`
    ${(props) => getGenericProps(props)}
    ${(props) => {
        let output = getGenericProps(props);
        if (props.verticalAlignment && props.direction === "row")
            output += `justify-content: ${props.verticalAlignment};`;
        else if (props.verticalAlignment)
            output += `align-content: ${props.verticalAlignment}; align-items: ${props.verticalAlignment};`;

        if (props.horizontalAlignment && props.direction === "row")
            output += `align-content: ${props.horizontalAlignment}; align-items: ${props.horizontalAlignment};`;
        else if (props.horizontalAlignment)
            output += `justify-content: ${props.horizontalAlignment};`;

        if (props.direction) output += `flex-direction: ${props.direction};`;

        if (props.vhCenter) {
            output += `
                justify-content: center;
                align-items:center;
            `;
        }
        if (props.justifyContent)
            output += `justify-content: ${props.justifyContent};`;
        if (props.alignContent)
            output += `align-content: ${props.alignContent}; align-items: ${props.alignContent};`;

        return output;
    }}
    display: flex;
`;

export const AnimatedFlex = styled(animated("div"))<AnimatedFlexBoxProps>`
    ${(props) => getGenericProps(props)}
    ${(props) => {
        let output = getGenericProps(props);
        if (props.verticalAlignment && props.direction === "row")
            output += `justify-content: ${props.verticalAlignment};`;
        else if (props.verticalAlignment)
            output += `align-content: ${props.verticalAlignment}; align-items: ${props.verticalAlignment};`;

        if (props.horizontalAlignment && props.direction === "row")
            output += `align-content: ${props.horizontalAlignment}; align-items: ${props.horizontalAlignment};`;
        else if (props.horizontalAlignment)
            output += `justify-content: ${props.horizontalAlignment};`;

        if (props.direction) output += `flex-direction: ${props.direction};`;

        if (props.vhCenter) {
            output += `
                justify-content: center;
                align-items:center;
            `;
        }
        if (props.justifyContent)
            output += `justify-content: ${props.justifyContent};`;
        if (props.alignContent)
            output += `align-content: ${props.alignContent}; align-items: ${props.alignContent};`;

        return output;
    }}
    display: flex;
`;

// IMPORT AND EXPORT OTHER CLASSES HERE SO WE CAN JUST IMPORT styles.whatever
export {
    InputGroup,
    InputField,
    InputLabel,
    InputTextHelper,
    Button,
    FrankenSketchHeader,
    Stiches,
    Text,
    Loader,
    Card,
    SketchCanvas,
    NavDiv,
    HeaderDiv,
    PlaceHolderDiv,
    DropdownField
};
