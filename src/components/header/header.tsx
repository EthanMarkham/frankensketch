
import { FrankenSketchHeader, HeaderDiv, Stiches } from "styles";
import { COLORS } from "utils/DEFS";

function Header() {

    return (
        <HeaderDiv backgroundColor={COLORS.bgPrimary}>
            <FrankenSketchHeader fontSize="2em" margin="1rem">
                FrankenSketch
            </FrankenSketchHeader>

            <Stiches margin="-1rem 0 .5rem 0" width="100%" />
        </HeaderDiv>
    );
}

export default Header;
