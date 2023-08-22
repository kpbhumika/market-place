import React from "react";

const SafetyReason = ({ reason }) => {
    return (
        <div className="safety-check">
            <h4>{reason && reason}</h4>
        </div>)
}
export default SafetyReason
