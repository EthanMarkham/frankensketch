import styled from "styled-components";
import { COLORS } from "utils/DEFS";
import { GenericStyleProps } from "types/style";
import { getGenericProps } from "styles";

export const InputGroup = styled('div')<GenericStyleProps>`
    ${(props) => {
        let output = "";
        if (props.width)
            output += `width: ${props.width};`
        else
            output += 'width: 20.4375rem;'
        if (props.height)
            output += `height: ${props.height};`
        if (props.fontSize)
            output += `font-size: ${props.fontSize};`
        return output
    }}
    margin-bottom: 1rem;
    position: relative;
`

export const InputField = styled('input')<GenericStyleProps>`
    ${(props) => {
        let output = "";
        if (props.width)
            output += `width: ${props.width};`
        else
            output += 'width: 100%;'

        if (props.height)
            output += `height: ${props.height};`
        else
            output += 'height: 3rem;'

        if (props.fontSize)
            output += `font-size: ${props.fontSize};`
        else
            output += 'font-size: 1.0625rem;'
        if(props.backgroundColor)
            output += `background-color: ${props.backgroundColor};`
        else
            output += `background-color: ${COLORS.white};`
        
        return output
    }}
    border: none;
	border-bottom: 0.25rem solid ${COLORS.white};
	padding: 0.5rem 0.875rem;
	line-height: 147.6%;
	padding-top: 0.825rem;
	padding-bottom: 0.5rem;
    border-radius: 10px;
    font-family:inherit;
    font-weight: 300;
    &:focus{
        outline: none;
        border-color: ${COLORS.success};
    }
    &:hover{
        outline: none;
        border-color: ${COLORS.secondaryGreen};
    }
`

export const InputLabel = styled('span')<GenericStyleProps>`
    ${(props) => {
        let output = "";
        if (props.width)
            output += `width: ${props.width};`
        if (props.height)
            output += `height: ${props.height};`
        if (props.fontSize)
            output += `font-size: ${props.fontSize};`
        else
            output += `font-size: 1.25em;`
        if (props.color)
            output += `color: ${props.color};`
        else
            output += `color: ${COLORS.gray}`
        return output
    }}
    position: absolute;
	top: 0.9375rem;
	left: 0.875rem;
	line-height: 2rem;
    
`

export const InputTextHelper = styled('span')<GenericStyleProps>`
    ${(props) => {
        let output = "";
        if (props.width)
            output += `width: ${props.width};`
        if (props.height)
            output += `height: ${props.height};`
        if (props.fontSize)
            output += `font-size: ${props.fontSize};`
        else 
            output += 'font-size: 0.9375rem;'
        if (props.color)
            output += `color: ${props.color};`
        else
            output += `color: ${COLORS.danger};`
        return output
    }}
	letter-spacing: 0.0275rem;
	margin: 0.125rem 0.875rem;
    font-weight: 100;

`

export const DropdownField = styled.select<GenericStyleProps>`
    width: 100%;
    height: 3rem;
    font-size: 1.0625rem;
    background-color: ${COLORS.white};
    border: none;
    border-bottom: 0.25rem solid ${COLORS.white};
    padding: 0.5rem 0.875rem;
    line-height: 147.6%;
    padding-top: 0.825rem;
    padding-bottom: 0.5rem;
    border-radius: 10px;
    font-family:inherit;
    font-weight: 300;
    &:focus{
        outline: none;
        border-color: ${COLORS.success};
    }
    &:hover{
        outline: none;
        border-color: ${COLORS.secondaryGreen};
    }
    ${(props) => getGenericProps(props)}
`