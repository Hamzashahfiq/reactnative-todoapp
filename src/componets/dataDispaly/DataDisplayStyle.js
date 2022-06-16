import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    dataView: {
        backgroundColor: '#0a9396',
        padding: 8,
        color: 'white',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 3,
        borderWidth: 2,
        borderColor: '#94d2bd',

    },
    dataText: {
        color: 'white',
        flex: 9,
        fontSize: 17,
        paddingHorizontal: 5
    },
    delBtn: {
        flex: 1
    },
    dataCheck: {
        flex: 1
    }

})
export default Styles;