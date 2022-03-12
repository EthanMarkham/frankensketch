import SectionText from "components/general/SectionText";
import { FlexBox, Text } from "styles";
import { COLORS } from "utils/DEFS";

const HelpModal = () => {

    return (
        <FlexBox direction="column" padding="0 1rem">
            <SectionText text="Help" />
            <FlexBox direction="column">
                <Text color={COLORS.white} fontSize='1.2em'>About:</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">This is FrankenSketch, a game to let your creativity go wild! Create, Explore and have Fun.</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0"> Created by Ethan & Leo for your entertaiment.</Text>
            </FlexBox>
            <FlexBox direction="column" margin="1rem 0 0 0">
                <Text color={COLORS.white} fontSize='1.2em'>How To:</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">1. To join a game, click the draw button on the navigation bar. Your game will start and show you what part to draw using the tools FrankenSketch has to offer. When you are done, submit your drawing by clicking the submit button.</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">2. You can add and remove friends in the Friends page. Here, all your friends will be listed. Click the trash icon to remove a friend next to their username. Click the plus icon on the top right, then use the search field or scroll to look for friends. When you find someone, click the add button next to their username. Done, you know how to add and remove friends.</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">3. To find all the drawings/games you have been part of, go to the Home page. Here you will see your drawings information display in a card, if you click on the card, you would be able to see the complete drawing.</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">4. An important part of FrankenSketch is to be able what our community have created. Go to the Community page by clicking on the Community icon, here you will see all the drawings that other frankensketchers have created. You can see the artist, leave a like by clicking on the heart icon. If you find that a drawing offensive or that would affect the community; you can report it by clicking the info button and then clicking submit report, an admin/moderator will look into it.</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">5. In the Settings page, you can find information about your account, be able to change your password by clicking on change password button and logout if that's what you desired.</Text>
            </FlexBox>
        </FlexBox>
    );
};

export default HelpModal;