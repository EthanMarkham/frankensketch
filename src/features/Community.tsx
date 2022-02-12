import Header from "components/header/header";
import NavBar from "components/navbar/NavBar";
import { FlexBox } from "styles";

function Community() {
    

    return (
        <FlexBox direction="column">
            <Header/>
            <FlexBox direction="column" justifyContent="center" alignContent="center">
                Coming soon...
            </FlexBox>
            <NavBar/>
        </FlexBox>
    );
}

export default Community;
