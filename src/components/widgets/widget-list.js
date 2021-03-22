import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";
import {useParams} from "react-router-dom";
import widgetActions from "../../actions/widget-actions";

const WidgetList = ({
                        widgets,
                        createWidgetForTopic,
                        findWidgetsForTopic,
                        updateWidget,
                        deleteWidget,
                        activeWidget,
                        setActiveWidget,
                        cleanState
                    }) => {
    const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams();

    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined")
            findWidgetsForTopic(topicId);
        else
            cleanState([]);
    }, [topicId]);

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined")
            findWidgetsForTopic(topicId);
        else
            cleanState([]);
    }, [lessonId]);

    return(
        <div>
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus btn float-right"/>
            <h4>Widgets</h4>
            <ul className="list-group">
                {
                    widgets
                    &&
                    widgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item">
                            {
                                _widget.id === activeWidget.id &&
                                <>
                                    <i onClick={() => deleteWidget(_widget.id)} className="fas btn fa-trash float-right"/>
                                    <i onClick={() => {
                                        updateWidget(_widget.id, activeWidget)
                                    }} className="fas btn fa-check float-right"/>

                                    {
                                        activeWidget.type === "HEADING" &&
                                        <HeadingWidget
                                            setWidget={setActiveWidget}
                                            editing={_widget.id === activeWidget.id}
                                            widgetActive={activeWidget}
                                            widgetItem={_widget}/>
                                    }
                                    {
                                        activeWidget.type === "PARAGRAPH" &&
                                        <ParagraphWidget
                                            setWidget={setActiveWidget}
                                            editing={_widget.id === activeWidget.id}
                                            widgetActive={activeWidget}
                                            widgetItem={_widget}/>
                                    }
                                </>
                            }
                            {
                                _widget.id !== activeWidget.id &&
                                <div>
                                    <i onClick={() => setActiveWidget(_widget)} className="fas btn fa-cog float-right"/>
                                    {
                                        _widget.type === "HEADING" &&
                                        <HeadingWidget
                                            setWidget={setActiveWidget}
                                            editing={_widget.id === activeWidget.id}
                                            widgetActive={activeWidget}
                                            widgetItem={_widget}/>
                                    }
                                    {
                                        _widget.type === "PARAGRAPH" &&
                                        <ParagraphWidget
                                            setWidget={setActiveWidget}
                                            editing={_widget.id === activeWidget.id}
                                            widgetActive={activeWidget}
                                            widgetItem={_widget}/>
                                    }
                                </div>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )}

const stateToPropertyMapper = (state) => (
    {
        widgets: state.widgetReducer.widgets,
        activeWidget: state.widgetReducer.activeWidget
    })
const dispatchToPropertyMapper = (dispatch) => ({
    findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId),
    createWidgetForTopic: (topicId) => widgetActions.createWidgetForTopic(dispatch, topicId),
    deleteWidget: (id) => widgetActions.deleteWidget(dispatch, id),
    updateWidget: (id, widget) => widgetActions.updateWidget(dispatch, id, widget),
    setActiveWidget: (widget) => widgetActions.setActiveWidget(dispatch, widget),
    cleanState : () => widgetActions.cleanState(dispatch)
})

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(WidgetList)