import { StyleSheet, Text, SafeAreaView, View, TextInput, Button, TouchableOpacity } from 'react-native';

import React, {useState} from 'react';

export default function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);
  function plus(){
    setResult(parseInt(value1)+parseInt(value2));
  }
  
  function minus(){
    setResult(parseInt(value1)-parseInt(value2)); 
  }

  function multiplication(){
    setResult(parseInt(value1)*parseInt(value2)); 
  }

  function division(){
    setResult(parseInt(value1)/parseInt(value2)); 
  }
  function percent(){
    setResult((parseInt(value1)/parseInt(value2))*100)
  }
  return (
    <SafeAreaView style={styles.container}>
  
      <TextInput onChangeText={(value)=>{parseInt(setValue1(value))}}style={{borderWidth:3, width:200, height:30, borderRadius:30, paddingLeft:30, borderColor:'white', color: 'white', marginTop: 100}} placeholder="Enter 1st Value"></TextInput>
      <TextInput onChangeText={(value)=>{parseInt(setValue2(value))}} style={{borderWidth:3, marginTop: 30, width:200, height:30, borderRadius:30, paddingLeft:30, borderColor:'white', color: 'white'}} placeholder="Enter 2nd Value"></TextInput>
    
      <View style={{flexDirection:'row', alignItems:'center', justifyContent: "space-between", marginTop: 20}}>
      <TouchableOpacity style={{backgroundColor:"red", padding:10, borderRadius:10, marginTop: 10, height:47, width:40, justifyContent: 'center', alignItems: 'center'}} onPress={plus}>
      <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"red", padding:10, borderRadius:10, marginTop: 10, marginLeft:10, height:47, width:40, justifyContent: 'center', alignItems: 'center'}} onPress={minus}>
      <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>-</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"red", padding:10, borderRadius:10, marginTop: 10, marginLeft:10, height:47, width:40, justifyContent: 'center', alignItems: 'center'}} onPress={multiplication}> 
      <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>x</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"red", padding:10, borderRadius:10, marginTop: 10, marginLeft:10, height:47, width:40, justifyContent: 'center', alignItems: 'center'}} onPress={division}>
      <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>/</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"red", padding:10, borderRadius:10, height:47, width:40 ,marginTop: 10, marginLeft:10, justifyContent: 'center', alignItems: 'center'}} onPress= {percent}>
      <Text style={{fontSize:15, fontWeight:"bold", color:"white"}}> % </Text>
      </TouchableOpacity>
</View>
<Text style={{fontSize:30, marginTop:10, color: 'white'}}>{result}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#468468',
    alignItems: 'center'
  },
});
