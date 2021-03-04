import React from "react";
import CounterDisplay from "../redux-state/counter-display";
import CounterUp from "../redux-state/counter-up";
import CounterDown from "../redux-state/counter-down";
import {createStore} from "redux";
import {Provider} from "react-redux";


const initialState = {
    count: 2234
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "UP":
            return {
                count: prevState.count + 1
            }
        case "DOWN":
            return  {
                count: prevState.count - 1
            }
        default:
            return prevState
    }
}

const store = createStore(reducer)

const CounterRedux = () =>
    <Provider store={store}>
        <div>
            <CounterDisplay/>

            <CounterUp/>

            <CounterDown/>
        </div>
    </Provider>

export default CounterRedux