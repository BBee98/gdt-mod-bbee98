/**
 * @func CreateNewTopic - It builds an array with the necessary structure to be understandable by Game Dev Tycoon
 *
 *
 * @return
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
 */
const TopicDTO = ({ id, name, audienceWeightings, genreWeightings, missionOverrides }) => {
    return {
        id,
        name,
        audienceWeightings: () => {
            const values = []
            Object.keys(audienceWeightings).forEach(key => {
                values.push(audienceWeightings[key])
            });
            return values;
        },
        genreWeightings: () => {
            const values = []
            Object.keys(genreWeightings).forEach(key => {
                values.push(genreWeightings[key])
            });
            return values;
        },
        missionOverrides: () => {
            const values = []
            Object.keys(missionOverrides).forEach(key => {
                values.push(missionOverrides[key])
            });
            return values;
        },
    }
}

export default TopicDTO;