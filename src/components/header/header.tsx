import { FlexBox, FrankenSketchHeader, HeaderDiv, Stiches } from "styles";
import { COLORS } from "utils/DEFS";

function Header() {
    return (
        <FlexBox
            direction="column"
            flex="0 1"
            backgroundColor={COLORS.bgPrimary}
            width="100vw"
        >
            <FrankenSketchHeader fontSize="2em" margin="1rem">
                FrankenSketch
            </FrankenSketchHeader>

            <Stiches margin="-1rem 0 .5rem 0" width="100vw" />
        </FlexBox>
    );
}

export default Header;
