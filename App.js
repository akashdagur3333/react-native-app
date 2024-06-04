import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
function clicked(){
  console.log('clicked')
}
  return (
    <View >
 <View style={styles.container}> 
  <TextInput style={styles.textInput} placeholder='Enter name here'/>
  <Button style={styles.buttonLayout} title="Press Me" onPress={clicked} />
 </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding:60,
   flexDirection:'row',
   justifyContent:'space-between'
  },
  textInput:{
  flex:2,
  borderWidth:1,
  borderRadius:2,
  padding:5,
  borderColor:'black'
  },
  buttonLayout:{
flex:1,
borderWidth:1,
borderColor:'blue',
backgroundColor:'grey',
color:'black'
  }

});
