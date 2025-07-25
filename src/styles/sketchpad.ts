import styled from "styled-components";
import { getGenericProps } from "styles";
import { GenericStyleProps } from "types";

interface Props extends GenericStyleProps {
    scale?: number | null;
}
const SketchCanvas = styled.canvas<Props>`
    height: 640px;
    width: ${640 / 1.1}px;
    background: #00000000;
    ${(props) => props.scale && `transform: scale(${props.scale});`}
    justify-self: center;
    align-self: center;
    margin: auto;
    ${(props) => getGenericProps(props)}
    ${(props) =>
        props.width
            ? `width: ${props.width};`
            : props.height?.indexOf("px")
            ? `width: ${parseInt(props.height) / 2}px`
            : ""}
`;

export { SketchCanvas };
//    height: ${(props) => props.height}px;
//    //border-radius: 20px;
//     border: 1px solid grey;
