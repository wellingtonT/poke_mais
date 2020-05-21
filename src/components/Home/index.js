import React, { Component } from 'react';
import { Text, ScrollView, Image, View, TouchableOpacity, StatusBar  } from 'react-native'

import styles from './styles';

const PATHIMAGE = '../../assets/images';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="black"/>
        <Image
          style={styles.logo}
          source={require(`${PATHIMAGE}/logo.png`)}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>POKE</Text>
          <Image
            style={styles.titleImage}
            source={require(`${PATHIMAGE}/titleImage.png`)}
          />
          <Text style={styles.subtitle}>See pokemons in one place!</Text>
        </View>

        <View style={styles.body}>

          <View style={[styles.buttonContent, styles.marginRight]}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchPokemon')}>
              <Image
                style={styles.buttonImage}
                source={require(`${PATHIMAGE}/pikachu.jpg`)}
              />
              <View style={styles.overlay} >
                <Text style={styles.textButton}>Search Pokemon</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContent}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchItem')}>
              <Image
                style={styles.buttonImage}
                source={require(`${PATHIMAGE}/pokebola.png`)}
              />
              <View style={styles.overlay} >
                <Text style={styles.textButton}>Search Item</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.buttonContent, styles.marginRight]}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchMove')}>
              <Image
                style={styles.buttonImage}
                source={require(`${PATHIMAGE}/fogo.png`)}
              />
              <View style={styles.overlay} >
                <Text style={styles.textButton}>Search Move</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContent}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('More')}>
            <Image
              style={styles.buttonImage}
              source={require(`${PATHIMAGE}/olho.png`)}
            />
            <View style={styles.overlay} >
              <Text style={styles.textButton}>More</Text>
            </View>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    );
  }
};

