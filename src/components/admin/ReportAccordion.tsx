import { useState } from "react";
import { Button, FlexBox, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { COLORS } from "utils/DEFS";


const ReportAccordion = () => {
    const [isActive, setIsActive] = useState(false)

    const [reportStatus, setReportStatus] = useState("pending")

    //TODO - Change report status to actual state and update db, Replaced place holder with actual data 

    return (
        <>
            <FlexBox direction="column" backgroundColor={COLORS.black} padding="0.5rem" >
                <FlexBox direction="row" justifyContent="space-between" onClick={() => setIsActive(!isActive)}>
                    <Text fontWeight="300">Created by: username - Date</Text>

                    {reportStatus === "cancelled" && <img src={Icons.RedX} alt="" />}
                    {reportStatus === "pending" && <img src={Icons.PendingReport} alt="" />}
                    {reportStatus === "reviewed" && <img src={Icons.GreenCheckmark} alt="" />}
                    
                </FlexBox>
                {isActive && (
                    <FlexBox direction="column" margin="0.5rem" padding=".25rem" backgroundColor={COLORS.grayTransparent}>
                         <Text fontWeight="300">Replace with actual report info</Text>
                         <FlexBox direction="row" justifyContent="flex-end">
                            <Button margin="0 1rem" background="none" onClick={() => setReportStatus("cancelled")}>
                                <img src={Icons.RedX} alt="" />
                            </Button>
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