/**
 * BASE_TOPIC_GAMES definition.
 * @typedef {Array} BASE_TOPIC_GAMES - Array of base game topics.
 *
 * @prop {string} id - Identification of the topic
 * @prop {string} name - Name of the topic
 * @prop {Array<number>} missionOverrides - Defines the importance of engine, gameplay,
 * story/quests, dialogues, level design, AI, world design, graphics and sound for each topic.
 * @see https://github.com/greenheartgames/gdt-modAPI/wiki/missionOverrides
 * @example in documentation above
 *
 * @prop {Array<number>} audienceWeightings - Array of three elements. It indicates the influence on the audiences.
 * - First position: Young audience
 * - Second position: Mature audience
 * - Third position: Adult audience
 * @example
 * // audienceWeightings: (3) [1, 1, 0.8]
 *
 * @prop {Array<number>} genreWeightings: - Array of six elements. It indicates the influence on the genre
 * - First position: Action
 * - Second position: Adventure
 * - Third position: Rol
 * - Fourth position: Simulation
 * - Fifth position: Strategy
 * - Sixth position: Casual
 * @example
 * // genreWeightings: (6) [1, 0.6, 0.6, 1, 0.7, 1]
 */


import {SetInfluence} from "../utils.js";

// eslint-disable-next-line no-undef
export const BASE_TOPIC_GAMES = Topics.topics.map( topic => {
    return {
            id: topic.id,
            audienceWeightings: {
                young: SetInfluence(topic.audienceWeightings[0]),
                mature: SetInfluence(topic.audienceWeightings[1]),
                adult: SetInfluence(topic.audienceWeightings[2]),
            },
            name: topic.name,
            genreWeightings: {
                action: SetInfluence(topic.genreWeightings[0]),
                adventure: SetInfluence(topic.genreWeightings[1]),
                rol: SetInfluence(topic.genreWeightings[2]),
                simulation: SetInfluence(topic.genreWeightings[3]),
                strategy: SetInfluence(topic.genreWeightings[4]),
                casual: SetInfluence(topic.genreWeightings[5]),
            }
        };
});


/**
 * CURRENT TOPICS
 * - Sports
 * - Military
 * - Medieval
 * - Space
 */