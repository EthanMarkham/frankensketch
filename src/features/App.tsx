import useAuth from "hooks/useAuth";
import React, { Suspense, useMemo } from "react";
import { useStore } from "store";
import { AnimatedDiv, FlexBox, Div } from "styles";
import { useTransition, config } from "react-spring";
import Authentication from "features/Authentication";
import HomeScreen from "./HomeScreen";
import LoadingScreen from "./LoadingScreen";
import Sketchpad from "./Sketchpad";
import Community from "./Community";
import Friends from "./Friends";
import Settings from "./Settings";
import GameViewer from "./GameViewer";
import Admin from "./Admin";
import NavBar from "components/navbar/NavBar";
import Header from "components/header/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useGameSubscription from "hooks/useGameSubscription";

/*
const Authentication = React.lazy(() => import("features/Authentication"));
const LoadingScreen = React.lazy(() => import("features/LoadingScreen"));
const Sketchpad = React.lazy(() => import("features/Sketchpad"));
const HomeScreen = React.lazy(() => import("features/HomeScreen"));
const Friends = React.lazy(() => import("features/Friends"))
const Settings = React.lazy(() => import("features/Settings"))
const Profile = React.lazy(() => import("features/Profile"))
const Community = React.lazy(() => import("features/Community"))
*/

function App() {
    useAuth();

    const pageIndex = useStore((state) => state.pageIndex);
    const setGames = useStore((state) => state.actions.setGames);
    useGameSubscription(setGames);

    const transitions = useTransition(pageIndex, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.gentle,
    });

    const showNav = useMemo(
        () => pageIndex > 0 && pageIndex !== 2,
        [pageIndex]
    );

    const showHeader = useMemo(() => pageIndex > 0, [pageIndex]);

    const containerStyles = {
        position: "absolute",
        height: "100%",
        width: "100%",
    };

    return (
        <FlexBox
            width="100vw"
            height="100vh"
            direction="column"
            justifyContent="center"
            style={{
                position: "fixed",
                overflowY: "auto",
            }}
        >
            {showHeader && <Header />}

            <Div
                style={{
                    height: "100%",
                    width: "100%",
                    flex: "1 1",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <Suspense fallback={null}>
                    {transitions((styles, item) => {
                        switch (item) {
                            case -1:
                                return (
                                    <AnimatedDiv
                                        style={styles}
                                        {...containerStyles}
                                    >
                                        <LoadingScreen />
                                    </AnimatedDiv>
                                );
                            case 0:
                                return (
                                    <AnimatedDiv
                                        style={styles}
                                        {...containerStyles}
                                    >
                                        <Authentication />
                                    </AnimatedDiv>
                                );
                            case 1:
                                return (
                                    <AnimatedDiv
                                        style={styles}
                                        {...containerStyles}
                                    >
                                        <HomeScreen />
                                    </AnimatedDiv>
                                );
                            case 2:
                                return (
                                    <AnimatedDiv
                                        style={styles}
                                        {...containerStyles}
                                    >
                                        <Sketchpad />
                                    </AnimatedDiv>
                                );

                            case 3:
                                return (
                                    <AnimatedDiv
                                        style={styles}
                                        {...containerStyles}
                                    >
                                        <Friends />
                                    </AnimatedDiv>
                                );
                            case 4:
                                return (
                                    <AnimatedDiv
                                        style={styles}
                                        {...containerStyles}
                                    >
                                        <Settings />
                                    </AnimatedDiv>
                                );
                            case 6:
                                return (
                                    <AnimatedDiv
                                        style={styles}
                                        {...containerStyles}
                                    >
                                        <Community />
                                    </AnimatedDiv>
                                );
                            case 7:
                                return (
                                    <AnimatedDiv
                                        style={styles}
                                        {...containerStyles}
                                    >
                                        <Admin />
                                    </AnimatedDiv>
                                );
                            case 9:
                                return (
                                    <AnimatedDiv
                                        style={styles}
                                        {...containerStyles}
                                    >
                                        <GameViewer />
                                    </AnimatedDiv>
                                );
                        }
                    })}
                </Suspense>
            </Div>

            {showNav && <NavBar />}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
        </FlexBox>
    );
}

export default App;
