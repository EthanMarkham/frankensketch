import styled from "styled-components";
import { getGenericProps } from "styles";
import { GenericStyleProps } from "types";

interface Props extends GenericStyleProps {
    scale?: number | null;
}
const SketchCanvas = styled.canvas<Props>`
    border: 1px solid grey;
    height: 640px;
    width: ${640 / 2}px;
    background: #f7fff3;
    border-radius: 20px;
    ${(props) => props.scale && `transform: scale(${props.scale});`}
    justify-self: center;
    align-self: center;
    margin: auto;
    ${(props) => getGenericProps(props)}
    ${(props) => props.height && `width: ${parseInt(props.height) / 2}px`}
`;

export { SketchCanvas };
//    height: ${(props) => props.height}px;
