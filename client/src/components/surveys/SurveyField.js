import React from 'react'

const SurveyField = ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: "5px"}} />
            <div style={{ color:"red", marginBottom: "5px"}}>
                {touched && error}
            </div>
        </div>
    )
}

export default SurveyField;
