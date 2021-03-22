import WidgetType from "./widget-type";
const HeadingWidget = ({setWidget, editing, widgetActive, widgetItem}) =>
    <div>
        {
            !editing &&
            <div>
                {widgetItem.size === 1 && <h1>{widgetItem.text}</h1>}
                {widgetItem.size === 2 && <h2>{widgetItem.text}</h2>}
                {widgetItem.size === 3 && <h3>{widgetItem.text}</h3>}
                {widgetItem.size === 4 && <h4>{widgetItem.text}</h4>}
                {widgetItem.size === 5 && <h5>{widgetItem.text}</h5>}
                {widgetItem.size === 6 && <h6>{widgetItem.text}</h6>}
            </div>

        }
        {
            editing &&
            <div>
                {widgetActive.size === 1 && <h1>{widgetActive.text}</h1>}
                {widgetActive.size === 2 && <h2>{widgetActive.text}</h2>}
                {widgetActive.size === 3 && <h3>{widgetActive.text}</h3>}
                {widgetActive.size === 4 && <h4>{widgetActive.text}</h4>}
                {widgetActive.size === 5 && <h5>{widgetActive.text}</h5>}
                {widgetActive.size === 6 && <h6>{widgetActive.text}</h6>}
                <WidgetType widget={widgetActive} setWidget={setWidget}/>
                <input onChange={(e) =>
                    setWidget(
                        {...widgetActive, text: e.target.value}
                    )}
                       value={widgetActive.text}
                       className="form-control"/>
                <select onChange={(e) =>
                    setWidget({...widgetActive, size: parseInt(e.target.value)})}
                        value={widgetActive.size}
                        className="form-control">
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
            </div>
        }
    </div>

export default HeadingWidget