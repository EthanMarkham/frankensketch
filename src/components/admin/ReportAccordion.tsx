import { UserReport } from "models";
import { useEffect, useState } from "react";
import { Button, FlexBox, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { COLORS } from "utils/DEFS";

const ReportAccordion = (reportData: UserReport) => {
    const [isActive, setIsActive] = useState(false)

    const [reportStatus, setReportStatus] = useState("pending")

    useEffect(() => {
        //TODO update isReviewed in db to the report status clicked
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[reportStatus])

    return (
        <>
            <FlexBox direction="column" backgroundColor={COLORS.black} padding="0.75rem" borderRadius="10px" >
                <FlexBox direction="row" justifyContent="space-between" onClick={() => setIsActive(!isActive)}>
                    <FlexBox direction="row" justifyContent="flex-start">
                        {reportStatus === "pending" && <img src={Icons.PendingReport} alt="" />}
                        {reportStatus === "reviewed" && <img src={Icons.GreenCheckmark} alt="" />}
                        <Text fontWeight="300" margin="0 0 0 0.25rem">ID: </Text>
                    </FlexBox>
                    {isActive ? <Text fontWeight="bold">&#9651;</Text> : <Text>&#9661;</Text>}
                </FlexBox>
                {isActive && (
                    <FlexBox direction="column" margin="0.5rem 0 0 1.65rem" >
                         <Text fontWeight="300">Reported by: </Text>
                         <Text fontWeight="300" margin="0.5rem 0">GameID: </Text>
                         <Text fontWeight="300">Reviewed: </Text>
                         <Text fontWeight="300" margin="0.5rem 0">Created At: </Text>
                         <Text fontWeight="300">Update At: </Text>
                         <FlexBox direction="row" justifyContent="flex-end">
                            <Button margin="0 1rem" background="none" onClick={() => setReportStatus("pending")}>
                                <img src={Icons.PendingReport} alt="" />
                            </Button>
                            <Button margin="0 1rem" background="none" onClick={() => setReportStatus("reviewed")}>
                                <img src={Icons.GreenCheckmark} alt="" />
                            </Button>
                         </FlexBox>
                    </FlexBox>
                )}
            </FlexBox>

        </>
    );
};

export default ReportAccordion;      