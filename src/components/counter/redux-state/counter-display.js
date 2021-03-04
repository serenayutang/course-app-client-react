import React from 'react'
import {connect} from "react-redux";

const CounterDisplay = ({count, message}) =>
    <h1>Count: {count} {message} </h1>

const stateToPropertyMapper = (state) => {
    return {
        count: state.count,
        message: "Hi"
    }
}

// const ewq = connect()
// ewq(CounterDisplay)

export default connect(stateToPropertyMapper) (CounterDisplay)