class pokeapi {

    getPokemonByNameOrId = async (nameOrId) => {
        try {
            return fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}/`, {
                method: 'GET',
            })
            .then(res => {
                if (!res.ok) { return { error: true } }
                return res.json();
            })
            .then(response => {
                if (response.error) { return { error: true } }

                const types = response.types.map(elem => {
                    return elem.type.name;
                }).join(' / ');

                const abilities = response.abilities.map(elem => {
                    return elem.ability.name;
                }).join(' / ');

                const moves = response.moves.map(elem => {
                    return elem.move.name;
                }).join(' / ');

                const forms = response.forms.map(elem => {
                    return elem.name;
                }).join(' / ');

                return {
                    name: response.name,
                    height: response.height,
                    weight: response.weight,
                    image: response.sprites.front_default,
                    types: types,
                    abilities: abilities,
                    forms: forms,
                    moves: moves
                }
            })
        } catch(error) {
            alert(error.message);
        }
    }

    getItemByNameOrId = async (nameOrId) => {
        try {
            return fetch(`https://pokeapi.co/api/v2/item/${nameOrId}/`, {
                method: 'GET',
            })
            .then(res => {
                if (!res.ok) { return { error: true } }
                return res.json();
            })
            .then(response => {
                if (response.error) { return { error: true } }

                const effects = response.effect_entries.map(elem => {
                    return elem.short_effect;
                }).join(' / ');

                const attributes = response.attributes.map(elem => {
                    return elem.name;
                }).join(' / ');

                return {
                    name: response.name,
                    cost: response.cost,
                    image: response.sprites.default,
                    category: response.category.name,
                    effects: effects,
                    attributes: attributes
                }
            })
        } catch(error) {
            alert(error.message);
        }
    }

    getMoveByNameOrId = async (nameOrId) => {
        try {
            return fetch(`https://pokeapi.co/api/v2/move/${nameOrId}/`, {
                method: 'GET',
            })
            .then(res => {
                if (!res.ok) { return { error: true } }
                return res.json();
            })
            .then(response => {
                if (response.error) { return { error: true } }

                const description = response.flavor_text_entries.map(elem => {
                    if (elem.language.name == 'en') {
                        return elem.flavor_text;
                    }
                })
                .filter(elem => elem)[0];

                const effects = response.effect_entries.map(elem => {
                    return elem.short_effect;
                }).join(' / ');

                return {
                    name: response.name,
                    description: description,
                    accuracy: response.accuracy,
                    power: response.power,
                    damageClass: response.type.name,
                    effects: effects
                }
            })
        } catch(error) {
            alert(error.message);
        }
    }


}

export default new pokeapi;