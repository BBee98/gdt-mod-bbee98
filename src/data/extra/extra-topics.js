import BASE_TOPIC_GAMES from '../index.js';
import {SetInfluence} from "../utils.js";



const addExtraTopic = (extraTopic) => {
    return {
        id: extraTopic.id,
        audienceWeightings: {
            young: SetInfluence(extraTopic.audienceWeightings[0]),
            mature: SetInfluence(extraTopic.audienceWeightings[1]),
            adult: SetInfluence(extraTopic.audienceWeightings[2]),
        },
        name: extraTopic.name,
        genreWeightings: {
            action: SetInfluence(extraTopic.genreWeightings[0]),
            adventure: SetInfluence(extraTopic.genreWeightings[1]),
            rol: SetInfluence(extraTopic.genreWeightings[2]),
            simulation: SetInfluence(extraTopic.genreWeightings[3]),
            strategy: SetInfluence(extraTopic.genreWeightings[4]),
            casual: SetInfluence(extraTopic.genreWeightings[5]),
        }
    }
}

const EXTRA_TOPICS = addExtraTopic()