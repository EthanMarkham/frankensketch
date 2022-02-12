import { AnimatedFlex, Button, FlexBox, Stiches, Text } from "styles";
import { GenericStyleProps } from "types";
import { COLORS } from "utils/DEFS";
import { useSpring, config } from "react-spring";

function Dialog({
    close,
    children,
    title,
    headerProps,
    bodyProps,
}: {
    close: () => void;
    children: JSX.Element;
    title: string;
    headerProps?: GenericStyleProps;
    bodyProps?: GenericStyleProps;
}) {
    const transition = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.gentle,
    });

    return (
        //CONTAINER TAKING UP WHOLE PAGE TO AVOID CLICK THROUGHS
        <FlexBox
            position="absolute"
            zIndex={10}
            width="100vw"
            height="100vh"
            css={{
                display: "hidden",
                userSelect: "none",
                pointerEvents: "none",
            }}
            justifyContent="center"
            verticalAlignment="center"
        >
            {/*DIALOG BODY: WHAT YOU SEE*/}
            <AnimatedFlex
                style={transition}
                backgroundColor={COLORS.bgLight}
                color={COLORS.black}
                css={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    pointerEvents: "initial",
                }}
                direction="column"
                width="80vw"
                height="auto"
                {...bodyProps}
            >
                {/*HEADER: MAYBE REUSABLE COMP AGAIN? */}
                <FlexBox
                    width="100%"
                    backgroundColor={COLORS.darkGray}
                    padding="0.2em"
                    alignContent="center"
                    justifyContent="center"
                    {...headerProps}
                >
                    <Text fontSize="1.5em" margin="1.5rem 0" width="100%">
                        {title}
                    </Text>

                    {/*MAKE REUSABLE COMPONENT*/}
                    <FlexBox
                        css={{ flex: "1 1" }}
                        horizontalAlignment="flex-end"
                    >
                        <Button onClick={close} height="80%">
                            Close
                        </Button>
                    </FlexBox>
                </FlexBox>

                <Stiches margin="0" width="100%" />

                {/*BODY*/}
                {children}
            </AnimatedFlex>
        </FlexBox>
    );
}

export default Dialog;
