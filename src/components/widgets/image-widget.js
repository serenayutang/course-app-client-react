import React from 'react'
import WidgetType from "./widget-type";

const ImageWidget = ({widgetActive, widgetItem, setWidget, editing}) => {
    return (
        <div>
            {
                widgetItem && editing &&
                <div>
                    <WidgetType widget={widgetActive}
                                setWidget={setWidget}/>
                    URL
                    <input
                        onChange={(e) =>
                            setWidget({
                                ...widgetActive,
                                url: e.target.value}
                                )}
                        value={widgetActive.url || ''}
                        className="form-control"/>
                    Height
                    <input
                        onChange={(e) =>
                            setWidget({
                                ...widgetActive,
                                height: parseInt(e.target.value)}
                                )}
                        value={widgetActive.height || ''}
                        className="form-control"/>
                    Width
                    <input
                        onChange={(e) =>
                            setWidget({
                                ...widgetActive,
                                width: parseInt(e.target.value)}
                                )}
                        value={widgetActive.width || ''}
                        className="form-control"/>
                </div>
            }
            {
                widgetItem && !editing &&
                <p>
                    <img src={widgetItem.url}
                         height={widgetItem.height}
                         width={widgetItem.width}
                         alt="ERROR"/>
                </p>
            }
        </div>
    )
}
export default ImageWidget




















// const ImageWidget = ({widget= {}, setWidget, editing}) => {
//     return(
//         <div>
//             <h2>Image Widget</h2>
//             {
//                 !editing &&
//                 <img width={widget.width} height={widget.height} src={widget.src}/>
//             }
//
//             {
//                 editing &&
//                 <>
//                     <input value={widget.src} className="form-control">
//                         URL
//                     </input>
//                     <input value={widget.width} className="form-control">
//                         Width
//                     </input>
//                     <input value={widget.height} className="form-control">
//                         Height
//                     </input>
//                 </>
//             }
//     </div>
// )}
// export default ImageWidget