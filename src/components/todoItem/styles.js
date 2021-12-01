import { StyleSheet } from 'react-native';

const constants = {
    white: '#fff',
    black: '#000',
    primary: '#5dcff3',
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: constants.primary,
        marginVertical: 5,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    selectedItem: {
        backgroundColor: constants.white,
        borderWidth: 1,
        borderColor: constants.primary,
    },
    leftSide: {
        flexDirection: 'row',
    },
    texts: {
        color: constants.white,
    },
    selectedText: {
        color: constants.black,
    },
});
export default styles;
