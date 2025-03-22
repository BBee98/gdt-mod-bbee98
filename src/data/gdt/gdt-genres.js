/**
 * @prop {Array<number>} genreWeightings - Array of six elements. It indicates the influence on the genre
 * - First position: Action
 * - Second position: Adventure
 * - Third position: Rol
 * - Fourth position: Simulation
 * - Fifth position: Strategy
 * - Sixth position: Casual
 */
import {SetInfluence} from "../utils.js";

export const BASE_GENRES = (topic) => {
    return {
        genreWeightings: {
            action: SetInfluence(topic.genreWeightings[0]),
            adventure: SetInfluence(topic.genreWeightings[1]),
            rol: SetInfluence(topic.genreWeightings[2]),
            simulation: SetInfluence(topic.genreWeightings[3]),
            strategy: SetInfluence(topic.genreWeightings[4]),
            casual: SetInfluence(topic.genreWeightings[5]),
        }
    }
}