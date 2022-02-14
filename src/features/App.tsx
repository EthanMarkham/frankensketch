import useAuth from "hooks/useAuth";
import React, { Suspense } from "react";
import { useStore } from "store";
import { AnimatedDiv } from "styles";
import { useTransition, config } from "react-spring";

import Authentication from "features/Authentication";
import HomeScreen from "./HomeScreen";
import LoadingScreen from "./LoadingScreen";
import Sketchpad from "./Sketchpad";
import Community from "./Community";
import Friends from "./Friends";
import Profile from "./Profile";
import Settings from "./Settings";
import GameViewer from "./GameViewer";

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

    const transitions = useTransition(pageIndex, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });

    const containerStyles = {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        overflow: "hidden",
    };

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                position: "fixed",
                overflow: "hidden",
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
                        case 5:
                            return (
                                <AnimatedDiv
                                    style={styles}
                                    {...containerStyles}
                                >
                                    <Profile />
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
        </div>
    );
}

export default App;
