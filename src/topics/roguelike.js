export function ROGUELIKE() {
    return {
        id: "Roguelike",
        name: "Rogue Like",
        audienceWeightings: {
            young: 0,
            mature: 1,
            adult: 1
        },
        genreWeightings: {
            action: 1,
            adventure: 1,
            rol: 1,
            simulation: 1,
            strategy: 1,
            casual: 0.5,
        }
    }
}

