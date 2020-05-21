import React, { Component } from 'react';
import { Text, ScrollView, View, TextInput, Image, StatusBar } from 'react-native'

import { PacmanIndicator } from 'react-native-indicators';

import styles from './styles';
import globalStyle from '../../globalStyle';
import pokeapi from '../../services/pokeapi';

const PATHIMAGE = '../../assets/images';

export default class SearchItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }

        this.getItem = this.getItem.bind(this);
        this.renderBody = this.renderBody.bind(this);
    }

    getItem = () => {
        this.setState({ loading: true });

        let find = this.state.selectedItem.toLowerCase();
        find = find.replace(/( )+/g, '-')
        pokeapi.getItemByNameOrId(find).then(res => this.setState({ item: res, loading: false }));
    }

    renderBody = () => {
        if (this.state.loading) {
            return(
                <PacmanIndicator color='black' />
            );
        }

        if (this.state.item.name && !this.state.item.error) {
            return (
                <View style={globalStyle.body}>
                    <Image
                        source={
                            { uri: this.state.item.image }
                        }
                        style={styles.mainImageItem}
                    />
                    <Text style={globalStyle.mainName}>{this.state.item.name}</Text>
                    <View style={globalStyle.attributesContainer}>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Category</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.item.category}</Text>
                        </View>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Cost</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.item.cost}</Text>
                        </View>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Attributes</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.item.attributes}</Text>
                        </View>

                        <View style={globalStyle.card}>
                            <View style={globalStyle.cardTitleContainer}>
                                <Text style={globalStyle.cardTitle}>Effects</Text>
                            </View>

                            <Text style={globalStyle.cardBodyText}>{this.state.item.effects}</Text>
                        </View>

                    </View>
                </View>
            );
        }

        if (this.state.item.error) {
            return (
                <View style={globalStyle.body}>
                    <Text style={globalStyle.mainName}>Item not find</Text>
                </View>
            );
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor="black"/>
                <View style={globalStyle.header}>
                    <Text style={globalStyle.labelText}>Enter the name of the item</Text>
                    <View style={globalStyle.searchContainer}>
                        <Image
                            source={require(`${PATHIMAGE}/searchIcon.png`)}
                            style={globalStyle.iconInput}
                        />

                        <TextInput
                            style={globalStyle.input}
                            placeholder='E.g: Poke ball or master ball'
                            onChangeText={(text) => this.setState({ selectedItem: text })}
                            onEndEditing={this.getItem}
                        >
                        </TextInput>
                    </View>
                </View>

                {this.renderBody()}
            </ScrollView>
        );
    }
};

