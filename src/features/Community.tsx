import InfiniteScroll from "components/community/InfiniteScroll";
import { FlexBox } from "styles";

function Community() {
    return (
        <FlexBox direction="column" padding="0 1.5rem">
            <FlexBox
                direction="column"
                justifyContent="center"
                alignContent="center"
            >
                <InfiniteScroll />
            </FlexBox>
        </FlexBox>
    );
}

export default Community;
