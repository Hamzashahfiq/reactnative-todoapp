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
    delBtn2: {
        flex: 1,
        marginHorizontal:20
    },
    dataCheck: {
        flex: 1
    },

    compText:{
        color: 'white',
        fontSize:15,
        backgroundColor:'black',
        padding:5,
        borderRadius:5,
        width:120,
        marginHorizontal:5,
        marginVertical:5
    }

})
export default Styles;