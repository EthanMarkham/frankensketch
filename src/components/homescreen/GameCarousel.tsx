import { HomeScreenProps } from "types";
import { Carousel } from "@trendyol-js/react-carousel";
import GameCard from "./GameCard";
import { Button, FlexBox } from "styles";
import { COLORS } from "utils/DEFS";

//TODO - Set PROPS and make dynamic
function GameCarousel(props: HomeScreenProps) {
    return (
        <Carousel
            show={2.5}
            slide={2}
            swiping={true}
            infinite={false}
            useArrowKeys={true}
            responsive={true}
            dynamic={true}
            leftArrow={
                <FlexBox vhCenter={true} height="100%" width="1.25rem">
                    <Button
                        height="100%"
                        width="1.25rem"
                        fontSize="1.25em"
                        background="none"
                        color={COLORS.white}
                    >
                        &lt;
                    </Button>
                </FlexBox>
            }
            rightArrow={
                <FlexBox vhCenter={true} height="125px" width="1.25rem">
                    <Button
                        height="4rem"
                        width="1.25rem"
                        fontSize="1.25em"
                        background="none"
                        color={COLORS.white}
                    >
                        &gt;
                    </Button>
                </FlexBox>
            }
        >
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
        </Carousel>
    );
}

export default GameCarousel;
