import styled from "styled-components";
import { COLORS } from "utils/DEFS";
import { GenericStyleProps } from "types/style";
import { getGenericProps } from "styles";

export const Button = styled("button")<GenericStyleProps>`
    font-weight: bold;
    border-radius: 10px;
    border: none;
    &:hover {
        cursor: grab;
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.2;
    }
    &:active {
        transform: translateY(2px);
    }
    ${(props) => getGenericProps(props)}
`;

export const Text = styled("p")<GenericStyleProps>`
    ${(props) => getGenericProps(props)}
`;

export const FrankenSketchHeader = styled("h1")<GenericStyleProps>`
    color: ${COLORS.green};
    text-align: center;
    font-weight: 400;
    ${(props) => getGenericProps(props)}
`;

export const Stiches = styled("hr")<GenericStyleProps>`
    border: 2px dashed ${COLORS.darkGray};
    ${(props) => getGenericProps(props)}
`;
export const Loader = styled("div")<GenericStyleProps>`
    border: 15px solid ${COLORS.gray};
    border-radius: 50%;
    border-top: 15px solid ${COLORS.success};
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    ${(props) => getGenericProps(props)}
`;

export const Card = styled("div")<GenericStyleProps>`
    border: none;
    border-radius: 10px;
    padding: 0.75rem;
    width: 200px;
    height: 300px;
    background-color: ${COLORS.gray};
    ${(props) => getGenericProps(props)}
`;

export const NavDiv = styled.div<GenericStyleProps>`
    ${(props) => getGenericProps(props)}
`;

export const HeaderDiv = styled.div<GenericStyleProps>`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100vw;
    ${(props) => getGenericProps(props)}
`;
export const PlaceHolderDiv = styled.div<GenericStyleProps>`
    background-color: ${COLORS.darkGray};
    background-filter: blur(5px);
    border-radius: 10px;
    width: 100%;
    height: 2.5rem;
    margin: 1rem 0;
    ${(props) => getGenericProps(props)}
`;
