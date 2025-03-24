import {ROGUELIKE} from "../topics/roguelike.js";
import {PUZZLE} from "../topics/puzzles.js";
import {SANDBOX} from "../topics/sandbox.js";


/**
 * @func CreateNewTopic - It builds an array with the necessary structure to be understandable by Game Dev Tycoon
 * @param {Array} newTopics
 *
 * @return {Array} following props
 * @prop {string} id - Identification of the topic
 * @example Sports
 *
 * @prop {string} name - Name of the topic
 * @example Sports
 *
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
 * @prop {Array<number>} genreWeightings - Array of six elements. It indicates the influence on the genre
 * - First position: Action
 * - Second position: Adventure
 * - Third position: Rol
 * - Fourth position: Simulation
 * - Fifth position: Strategy
 * - Sixth position: Casual
 * @example
 * // genreWeightings: (6) [1, 0.6, 0.6, 1, 0.7, 1]
 *
 */
function TopicDTO(newTopics) {
    return newTopics.map(newTopic => {
        return {
            id: newTopic.id,
            name: newTopic.id,
            audienceWeightings: () => Object.keys(newTopic.audienceWeightings).forEach(key => newTopic.audienceWeightings[key]),
            genreWeightings: () => Object.keys(newTopic.genreWeightings).map(key => newTopic.genreWeightings[key]),
            missionOverrides: () => Object.keys(newTopic.missionOverrides).map(key => newTopic.missionOverrides[key])}
    })
}


/**
 * CURRENT TOPICS AVAILABLE
 * - Sports
 * - Military
 * - Medieval
 * - Space
 * - Racing
 * - Fantasy
 * - Pirate
 * - Sci-fi
 * - Airplane
 * - Dungeon
 * - Mystery
 * - Martial Arts
 * - History
 * - Horror
 * - Business
 * - Transport
 * - Comedy
 * - Ninja
 * - Romance
 * - Movies
 * - Spy
 * - Detective
 * - Cyberpunk
 * - UFO
 * - Hospital
 * - Evolution
 * - Time travel
 * - Life
 * - Virtual Pet
 * - Vocabulary
 * - Hunting
 * - Law
 * - Game Dev
 * - City
 * - School
 * - Fashion
 * - Zombies
 * - Hacking
 * - Government
 * - Prison
 * - Surgery
 * - Music
 * - Rythm
 * - Superheroes
 * - Post Apocalyptic
 * - Alternate History
 * - Vampire
 * - Werewolf
 * - Aliens
 * - Wild West
 * - Dance
 * - Cooking
 * - Farming
 * - Crime
 * - Disasters
 * - Assassin
 * - Thief
 * - Colonization
 * - Construction
 * - Mythology
 * - Abstract
 * - Mad Science
 * - Extreme Sports
 * - Dystopian
 * - Expedition
 * - Technology
 */

TopicDTO([ROGUELIKE(), PUZZLE(), SANDBOX()]).forEach(newTopic =>
    // eslint-disable-next-line no-undef
    Topics.topics.push(newTopic))
