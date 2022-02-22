import SectionText from "components/general/SectionText";
import { FlexBox,  PlaceHolderDiv} from "styles";

//TODO - Set game props
const GameInfoModal = () => {

    return (
        <FlexBox direction="column" padding="0 1rem">
            <SectionText text="Game Info"/>
            <PlaceHolderDiv height="50vh"/>
        </FlexBox>
    );
};

export default GameInfoModal;