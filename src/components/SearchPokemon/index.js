import React, { Component } from 'react';
import { Text, ScrollView, View, TextInput, Image, StatusBar } from 'react-native'

import { PacmanIndicator } from 'react-native-indicators';

import styles from './styles';
import globalStyle from '../../globalStyle';
import pokeapi from '../../services/pokeapi';

const PATHIMAGE = '../../assets/images';

export default class SearchPokemon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemon: {}
        }

        this.getPokemon = this.getPokemon.bind(this);
        this.renderBody = this.renderBody.bind(this);
    }

    getPokemon = () => {
        this.setState({ loading: true });

        let find = this.state.selectedPokemon.toLowerCase();
        find = find.replace(/( )+/g, '-')
        pokeapi.getPokemonByNameOrId(find).then(res => this.setState({ pokemon: res, loading: false }));
    }

    renderBody = () => {
        if (this.state.loading) {
            return(
                <PacmanIndicator color='black' />
            );
        }

        if (this.state.pokemon.name && !this.state.pokemon.error) {
            return (
                <View style={globalStyle.body}>
                    <Image
                        source={
                            { uri: this.state.pokemon.image }
                        }
                        style={globalStyle.mainImage}
                    />
                    <Text style={globalStyle.mainName}>{this.state.pokemon.name}</Text>
                    <View style={globalStyle.attributesContainer}>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Types</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.pokemon.types}</Text>
                        </View>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Height</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.pokemon.height} dm</Text>
                        </View>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Weight</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.pokemon.weight} hg</Text>
                        </View>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Forms</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.pokemon.forms}</Text>
                        </View>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Abilities</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.pokemon.abilities}</Text>
                        </View>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Moves</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.pokemon.moves}</Text>
                        </View>

                    </View>
                </View>
            );
        }

        if (this.state.pokemon.error) {
            return (
                <View style={globalStyle.body}>
                    <Text style={globalStyle.mainName}>Pokemon not find</Text>
                </View>
            );
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor="black"/>
                <View style={globalStyle.header}>
                    <Text style={globalStyle.labelText}>Enter the name of the pokemon</Text>
                    <View style={globalStyle.searchContainer}>
                        <Image
                            source={require(`${PATHIMAGE}/searchIcon.png`)}
                            style={globalStyle.iconInput}
                        />

                        <TextInput
                            style={globalStyle.input}
                            placeholder='E.g: Pikachu'
                            onChangeText={(text) => this.setState({ selectedPokemon: text })}
                            onEndEditing={this.getPokemon}
                        >
                        </TextInput>
                    </View>
                </View>

                {this.renderBody()}
            </ScrollView>
        );
    }
};

