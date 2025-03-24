/** @jsxImportSource @emotion/react */
import {useEffect, useRef} from "react";

import {styles} from './styles.js'

export function TopicListContainer() {

    const ref = useRef(null)
    const root = document.querySelector("#gameDefinition > .selectionOverlayContainer")

    useEffect(() => {
        if(root){
            root.appendChild(ref.current);
        }
    }, [root]);

    // eslint-disable-next-line no-undef
    const listOfTopics = (Topics && Topics.topics) ? Topics.topics : [];

    return (<ul id="bb98mod-topicList" css={styles().list} ref={ref}>
            { (listOfTopics.length > 0) && listOfTopics.map(topic => {
                return <li css={[styles().topic, styles().topicDecoration]}> { topic.name }</li>
            })}
            </ul>)
}

