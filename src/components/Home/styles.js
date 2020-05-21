import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    logo: {
        width: '100%'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -90,
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        marginStart: '30%',
        color: '#000'
    },
    titleImage: {
        margin: 20,
        marginBottom: 0,
        width: 60,
        height: 60
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Roboto',
        marginLeft: '20%'
    },
    body: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 65,
        marginHorizontal: 30
    },
    buttonContent: {
        width: '45%',
        height: '40%',
        marginBottom: 30
    },
    buttonImage: {
        width: '100%',
        height: 125,
        borderRadius: 20
    },
    marginRight: {
        marginRight: 30
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.75)',
        borderRadius: 20,
        justifyContent: 'center',
    },
    textButton: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        padding: 5
    }

});

export default styles;