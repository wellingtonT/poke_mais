import { StyleSheet } from 'react-native';

const globalStyle = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    searchContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        width: '80%'
    },
    labelText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#000'
    },
    input: {
        borderWidth: 1,
        borderRadius: 12,
        height: 40,
        maxWidth: 450,
        flex: 1,
        paddingLeft: 40,
        fontSize: 16,
        zIndex: 1
    },
    iconInput: {
        position: 'absolute',
        padding: 10,
        margin: 7,
        height: 23,
        width: 23,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    mainImage: {
        marginTop: -20,
        marginBottom: -40,
        width: 300,
        height: 300
    },
    mainName: {
        fontSize: 22,
        marginTop: 15,
        color: '#000'
    },
    attributesContainer: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        backgroundColor: '#F5F5F5',
        borderColor: '#888888',
        alignItems: 'center',
        borderWidth: 1,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        minWidth: 150,
        paddingBottom: 10,
        flexWrap: 'wrap',
        marginTop: 20,
        marginHorizontal: 10
    },
    cardTitleContainer: {
        backgroundColor: '#CCD1DE',
        borderColor: '#888888',
        width: '100%',
        alignItems: 'center',
        borderWidth: 1,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: -1
    },
    cardTitle: {
        fontSize: 18,
        color: '#000'
    },
    cardBodyText: {
        marginTop: 15,
        fontSize: 18,
        paddingBottom: 2,
        paddingHorizontal: 10,
        color: '#000'
    }
});

export default globalStyle;