import { useStore } from "store";
import { FlexBox } from "styles";
import { COLORS } from "utils/DEFS";
import ActionButton from "../general/ActionButton";

//TODO - Set PROPS and make dynamic
function JoinOptions() {
    const joinGame = useStore((state) => state.actions.joinGame);

    const joinPublic = () => {
        joinGame(true);
    };

    const joinPrivate = () => {
        console.log("Need Private Page");
        //joinGame(false);
    };
    return (
        <FlexBox margin="1rem" direction="row" justifyContent="space-around">
            <ActionButton
                text="Private"
                onClick={joinPrivate}
                color={COLORS.success}
            />
            <ActionButton
                text="Public"
                onClick={joinPublic}
                color={COLORS.primaryBTN}
            />
        </FlexBox>
    );
}

export default JoinOptions;
