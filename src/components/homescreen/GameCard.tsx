import { Card, Text } from "styles";
import { COLORS } from "utils/DEFS";

//TODO - Set PROPS and make dynamic
function GameCard() {
    return (
        <Card
             margin="1rem"
             height="125px"
             width="120px"
             onClick={() => alert("Display modal with game info, or sent player to this game")}
        >
            <Text
                color={COLORS.black}
            >
                Game Info Goes Here
            </Text>
        </Card>
            
    );
}

export default GameCard;
