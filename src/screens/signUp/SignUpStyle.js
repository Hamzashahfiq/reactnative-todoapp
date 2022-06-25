import {StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container:{
        flex: 1,
       
    },
    backgroudImage: {
        flex:1,
       
    },

    loginInput1:{
        height:300,
        marginHorizontal:20,
        marginTop:100,
        justifyContent:'center',
        alignItems:'center',
    },
    loginimage :{
        height:100,
        width:100
    },
    register:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop: 30,
        
    },
    registerText: {
        color:'white'
    },
    registerBtn: {
        color:'#90e0ef',
        marginHorizontal:5
    },
    signupImage:{
       marginBottom:10,
       borderRadius:40
    }
  
})
export default Styles;

