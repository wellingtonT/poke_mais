import React, { Component } from 'react';
import { Text, ScrollView, View, TextInput, Image, StatusBar } from 'react-native'

import { PacmanIndicator } from 'react-native-indicators';

import styles from './styles';
import globalStyle from '../../globalStyle';
import pokeapi from '../../services/pokeapi';

const PATHIMAGE = '../../assets/images';

export default class SearchMove extends Component {

    constructor(props) {
        super(props);
        this.state = {
            move: {}
        }

        this.getMove = this.getMove.bind(this);
        this.renderBody = this.renderBody.bind(this);
    }

    getMove = () => {
        this.setState({ loading: true });

        let find = this.state.selectedMove.toLowerCase();
        find = find.replace(/( )+/g, '-')
        pokeapi.getMoveByNameOrId(find).then(res => this.setState({ move: res, loading: false }));
    }

    renderBody = () => {
        if (this.state.loading) {
            return(
                <PacmanIndicator color='black' />
            );
        }

        if (this.state.move.name && !this.state.move.error) {
            return (
                <View style={globalStyle.body}>
                    <Text style={globalStyle.mainName}>{this.state.move.name}</Text>
                    <View style={globalStyle.attributesContainer}>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Accuracy</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.move.accuracy}</Text>
                        </View>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Power</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.move.power}</Text>
                        </View>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Damage class</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.move.damageClass}</Text>
                        </View>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Description</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.move.description}</Text>
                        </View>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Effects</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.move.effects}</Text>
                        </View>

                    </View>
                </View>
            );
        }

        if (this.state.move.error) {
            return (
                <View style={globalStyle.body}>
                    <Text style={globalStyle.mainName}>Move not find</Text>
                </View>
            );
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor="black"/>
                <View style={globalStyle.header}>
                    <Text style={globalStyle.labelText}>Enter the name of the move</Text>
                    <View style={globalStyle.searchContainer}>
                        <Image
                            source={require(`${PATHIMAGE}/searchIcon.png`)}
                            style={globalStyle.iconInput}
                        />

                        <TextInput
                            style={globalStyle.input}
                            placeholder='E.g: Pound'
                            onChangeText={(text) => this.setState({ selectedMove: text })}
                            onEndEditing={this.getMove}
                        >
                        </TextInput>
                    </View>
                </View>

                {this.renderBody()}
            </ScrollView>
        );
    }
};

