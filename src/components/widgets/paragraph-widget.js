import React from 'react'
// import {useState, useEffect} from 'react'
import WidgetType from "./widget-type";

const ParagraphWidget = ({setWidget, editing, widgetActive, widgetItem}) => {
    return (
        <div>
            {
                editing &&
                <div>
                    <WidgetType widget={widgetActive} setWidget={setWidget}/>
                    <textarea
                        onChange={(e) => setWidget({...widgetActive, text: e.target.value})}
                        value={widgetActive.text}
                        className="form-control"/>
                </div>
            }
            {
                !editing &&
                <p>
                    {widgetItem.text}
                </p>
            }
        </div>
    )
};

export default ParagraphWidget