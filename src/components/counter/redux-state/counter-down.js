import React from "react";
import {connect} from "react-redux";

const CounterDown = ({down}) =>
    <button onClick={down}>Down</button>

const stateToProperyMapper = (state) => {

}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        down: () => {
            dispatch({type: "DOWN"})
        }
    }
}

export default connect(stateToProperyMapper, dispatchToPropertyMapper) (CounterDown)