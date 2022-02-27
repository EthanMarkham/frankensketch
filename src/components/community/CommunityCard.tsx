import useDrawer from 'hooks/useDrawer';
import React, { useEffect, useState } from 'react'
import { FlexBox, SketchCanvas } from 'styles';
import { Game } from 'models';
import { calculateScale } from 'utils';

const CommunityCard = ({ game }: { game: Game }) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState<number | null>(null);
    useDrawer(canvasRef, game);

    useEffect(() => {
        if (containerRef.current) {
            setScale(
                calculateScale(
                    containerRef.current.getBoundingClientRect(),
                    1860
                )
            );
        }
    }, [containerRef]);

    return (
        <FlexBox
            direction="column"
            height="100vh"
            css={{ overflowY: "scroll" }}
        >
            <FlexBox
                height="60%"
                position="relative"
                justifyContent="center"
                margin="auto 0"
                ref={containerRef}
            >
                <SketchCanvas
                    ref={canvasRef}
                    height="1860px"
                    scale={scale}
                    position="absolute"
                />
            </FlexBox>
            <FlexBox
                padding="4em"
                height="20%"
                justifyContent="center"
            ></FlexBox>
        </FlexBox>
    );
}

export default CommunityCard