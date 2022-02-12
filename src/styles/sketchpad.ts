import styled from "styled-components";

const SketchCanvas = styled.canvas<{
    scale?: number|null,
}>`
    border: 1px solid grey;
    height: 640px;
    width: 360px;
    background: #F7FFF3;
    border-radius: 20px;
    ${(props) => props.scale && `transform: scale(${props.scale})`}
    justify-self: center;
    align-self: center;
    margin: auto;
`;

export {
    SketchCanvas
}
//    height: ${(props) => props.height}px;
