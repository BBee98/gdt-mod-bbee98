import React from "react";
import {createPortal} from "react-dom";

export function TopicListContainer() {

    const root = document.querySelector("#gameDefinition > .selectionOverlayContainer")

    if (!root) { return null }

    // eslint-disable-next-line no-undef
    const listOfTopics = (Topics && Topics.topics) ? Topics.topics : [];

    return createPortal(<ul id="bbee98-topicListContainer">
            { (listOfTopics.length > 0) && listOfTopics.map(topic => {
                return <li> { topic.name }</li>
            })}
            </ul>, root)
}

