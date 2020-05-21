import React, { Component } from 'react';
import { Text, ScrollView, View, StatusBar } from 'react-native'

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
                <View style={ styles.textContainer }>
                    <Text style={styles.title}>Desenvolvido por Wellington Thalyson</Text>
                    <Text style={styles.text}>
                        Esse Aplicativo tem a intenção de praticar a tecnologia React-Native.
                        Toda a fase de desenvolvimento foi utilizada para aprendizagem e apenas isso.
                    </Text>
                    <Text style={styles.text}>
                        Foi utilizado a API PokéAPI (https://pokeapi.co/), disponibilizada de forma gratuita,
                        deixo aqui meus sinceros agradecimentos aos idealizadores.
                    </Text>
                    <Text style={styles.text}>
                        Todo e qualquer conteúdo aqui informados são de direitos da Nintendo.
                    </Text>

                    <Text style={styles.title}>Developed by Wellington Thalyson</Text>
                    <Text style={styles.text}>
                        This application is intended to practice React-native technology.
                        The entire development phase was used for learning ans that's it.
                    </Text>
                    <Text style={styles.text}>
                        The PokéAPI API (https://pokeapi.co/) was used, available free of charge,
                        I leave here my sincere thanks to the creators.
                    </Text>
                    <Text style={styles.text}>
                        Any and all content reported here are the rights of Nintendo.
                    </Text>
                </View>
            </ScrollView>
        );
    }
};