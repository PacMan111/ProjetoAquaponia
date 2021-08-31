import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    body: {
      backgroundColor: '#aff',
      height: '100%'
    },
    text:{
        margin: 5,
        fontSize: 17,
        borderBottomWidth: 0.5,
        marginBottom: 10
    },
    header:{
        backgroundColor: '#0af',
        width: '100%',
        height: 65,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 20,
        marginTop: 10
    },
    conteudo: {
        backgroundColor: '#7df',
        marginTop: 20,
        borderWidth: 1.5,
        borderColor: '#000',
        width: '90%',
        marginLeft: '5%'
    },
});
  

export default styles;