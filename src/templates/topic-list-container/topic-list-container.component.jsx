import {useEffect, useRef} from "react";

const TopicListContainer = () => {

    const element = document.querySelector("#listContainer");
    const container = useRef(null);

    useEffect(() => {
        if(element && container?.current){
            element.replaceWith(container.current);
        }
    }, [container.current, element]);
// eslint-disable-next-line no-undef
    const listOfTopics = Topics.topics;


    // eslint-disable-next-line no-undef
    console.log("Topics.topics", Topics.topics)
    console.log("LIST OF TOPICS", listOfTopics)

    return (<ul id="listContainer" ref={container}>
            { (listOfTopics && listOfTopics.length > 0) && listOfTopics.map(topic => {
                return <li> { topic.name }</li>
            })}
            </ul>)
}

export default TopicListContainer;