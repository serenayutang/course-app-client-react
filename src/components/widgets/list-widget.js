import React from 'react'
import WidgetType from "./widget-type";

const ListWidget = ({widgetActive, widgetItem, setWidget, editing}) => {
    return (
        <div>
            {
                widgetItem && editing &&
                <div>
                    <WidgetType widget={widgetActive}
                                setWidget={setWidget}/>
                    <br/>
                    <input type="checkbox"
                           checked={widgetActive.ordered === undefined ? false : widgetActive.ordered}
                           onChange={(e) => {
                               console.log(e.target.checked)
                               setWidget({...widgetActive,
                                   ordered: (e.target.checked)})
                           }}/> Ordered
                    <div className="mt-3 mb-3">
                        Please enter here.
                    </div>
                    <textarea
                        rows={10}
                        placeholder="Please enter here."
                        onChange={(e) =>
                            setWidget({...widgetActive,
                                text: e.target.value})}
                        value={widgetActive.text}
                        className="form-control"/>
                </div>
            }
            {
                widgetItem && !editing &&
                <>
                    {
                        widgetItem.ordered &&
                        <ol>
                            {
                                widgetItem.text.split("\n").map((item, i) => {
                                    return(
                                        <li key={i}>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widgetItem.ordered &&
                        <ul>
                            {
                                widgetItem.text.split("\n").map((item, i) => {
                                    return(
                                        <li key={i}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </div>
    )
}
export default ListWidget




















// const ListWidget = ({widget, setWidget, editing}) => {
//     return(
//         <div>
//             <h2>List Widget</h2>
//             {
//                 widget && editing &&
//                     <>
//                         <input checked={widget.ordered} type="checkbox"/> Ordered
//                         <br/>
//                         Item List
//                         <textarea value={widget.text} rows={10} className="form-control"/>
//                         {JSON.stringify(widget)}
//                     </>
//             }
//             {
//                 widget && !editing &&
//                     <>
//                         {
//                             widget.ordered &&
//                             <ol>
//                                 {
//                                     widget.text.split("\n").map((item) => {
//                                         return(
//                                             <li>
//                                                 {item}
//                                             </li>
//                                         )
//                                     })
//                                 }
//                             </ol>
//                         }
//                         {
//                             !widget.ordered &&
//                             <ul>
//                                 {
//                                     widget.text.split("\n").map((item) => {
//                                         return(
//                                             <li>
//                                                 {item}
//                                             </li>
//                                         )
//                                     })
//                                 }
//                             </ul>
//                         }
//                     </>
//             }
//         </div>
//     )
// }
// export default ListWidget