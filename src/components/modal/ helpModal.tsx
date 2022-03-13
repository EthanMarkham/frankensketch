import SectionText from "components/general/SectionText";
import { Div, FlexBox, Text } from "styles";
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
                <Text color={COLORS.white} fontSize='1.2em'>Installation:</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">To have the best experience frankensketch can offer we recommend that you install the webapp on your device.</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">Install on a Computer</Text>
                <Div fontWeight="300" margin="0 0 0 2rem">
                    <ol>
                        <li>At the top right of the address bar, there's an install icon, click Install.</li>
                        <li>Follow the onscreen instructions to install FrankenSketch.</li>
                        <li>Done.</li>
                    </ol>
                </Div>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">Install on Android</Text>
                <Div fontWeight="300" margin="0 0 0 2rem">
                    <ol>
                        <li>Open FrankenSketch on Chrome.</li>
                        <li>Click install and follow the onscreen instructions to install FrankenSketch.</li>
                        <li>Done.</li>
                    </ol>
                </Div>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">Install on iOS</Text>
                <Div fontWeight="300" margin="0 0 0 2rem">
                    <ol>
                        <li>Open FrankenSketch on Safari.</li>
                        <li>Click the share button.</li>
                        <li>Scroll down and click on Add to Home Screen.</li>
                        <li>Click Add.</li>
                        <li>Done.</li>
                    </ol>
                </Div>
            </FlexBox>
            <FlexBox direction="column" margin="1rem 0 0 0">
                <Text color={COLORS.white} fontSize='1.2em'>How To:</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">1. Join A Game: Click the draw button on the navigation bar. Your game will start and show you what part to draw using the tools FrankenSketch has to offer. When you are done, submit your drawing by clicking the submit button.</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">2. Friends: You can add and remove friends in the Friends page. Here, all your friends will be listed. Click on their username to see their homescreen with the drawings they have done. Click the trash icon to remove a friend next to their username. To add friends, click the plus icon on the top right, then use the search field or scroll to look for friends. When you find someone, click the add button next to their username.</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">3. Home: To find all the drawings/games you have been part of, go to the Home page. Here you will see your drawings information display in a card, if you click on the card, you would be able to see the finished drawing. If you click on a friend from the friends page, their drawings/games will be shown here.</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">4. Community: An important part of FrankenSketch is to be able what our community have created. Go to the Community page by clicking on the Community icon, here you will see all the drawings that other frankensketchers have created. You can see the artist, leave a like by clicking on the heart icon or double tap on the drawing. If you find that a drawing is offensive or that it would affect the community; you can report it by clicking the info button and then clicking submit report, an admin/moderator will look into it.</Text>
                <Text color={COLORS.white} fontWeight='300' margin=".5rem 0 0 0">5. Settings: In the Settings page, you can find information about your account, be able to change your password by clicking on change password button and logout if that's what you desired. You can also find help, but if you are here is because you already know that.</Text>
            </FlexBox>
        </FlexBox>
    );
};

export default HelpModal;