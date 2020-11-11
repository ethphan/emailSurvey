import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import formFields from "./formFields";
import * as actions from '../../actions';
import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({label, name}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        )
    })

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button onClick={onCancel} className="btn-flat yellow darken-3 white-text darken-3">
                Back
            </button>
            <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>
                Send Survey 
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {  
        formValues: state.form.surveyForm.values
    }
}

export default withRouter(connect(mapStateToProps, actions)(SurveyFormReview))
