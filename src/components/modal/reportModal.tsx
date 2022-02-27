import SectionText from "components/general/SectionText";
import React, { useState } from "react";
import { Button, FlexBox, InputField, InputGroup, InputLabel } from "styles";
import { COLORS } from "utils/DEFS";

const ReportModal = () => {
    const [reporting, setReporting] = useState("");
    const [reason, setReason] = useState("");

    return (
        <FlexBox direction="column" padding="0 1rem">
            <SectionText text="Report"/>

            <InputGroup width="100%">
                <InputLabel>What are you reporting?</InputLabel>
                <InputField
                    onChange={(event) => setReporting(event.target.value)}
                    type="text"
                    required={true}
                ></InputField>
            </InputGroup>

            <InputGroup width="100%">
                <InputLabel>Reason/s</InputLabel>
                <InputField
                    onChange={(event) => setReporting(event.target.value)}
                    type="text"
                    required={true}
                ></InputField>
            </InputGroup>
            <FlexBox vhCenter={true}>
                <Button backgroundColor={COLORS.success} width="5rem" height="2rem" color={COLORS.white} onClick={() => alert("Submit report ()")}>Submit</Button>
            </FlexBox>
        </FlexBox>
    );
};

export default ReportModal;