import * as React from "react";
import { CSSProperties, SVGProps } from "react";

const InfoSVG = (props: {
    onClick: React.MouseEventHandler<SVGSVGElement>;
    svg: SVGProps<SVGSVGElement>;
    path: SVGProps<SVGPathElement>;
    style: CSSProperties;
}) => (
    <svg
        onClick={props.onClick}
        width={90}
        height={90}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props.svg}
        style={props.style}
    >
        <path
            d="M45 9C25.119 9 9 25.119 9 45s16.119 36 36 36 36-16.119 36-36S64.881 9 45 9Zm3 54h-6V42h6v21Zm-3-28.5a4.502 4.502 0 0 1-4.5-4.5c0-2.484 2.016-4.5 4.5-4.5s4.5 2.016 4.5 4.5-2.016 4.5-4.5 4.5Z"
            fill="#fff"
            {...props.path}
        />
    </svg>
);

export default InfoSVG;
