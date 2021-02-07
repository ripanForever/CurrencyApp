import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Snackbar from 'react-native-snackbar';

const currencyPerRupee={
  DOLLER: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
}

const App=()=>{

  const [inputValue, setInputValue] = useState(0);
  const [resultValue,setResultValue]=useState(0);

  const buttonPressed=(currency)=>{
    if(!inputValue){
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    let result= parseFloat(inputValue) * currencyPerRupee[currency];

      setResultValue(result.toFixed(2));
  }


  return (
    <>
    <StatusBar backgroundColor='#1b262c'/>
    <ScrollView backgroundColor='#1b262c'
    keyboardShouldPersistTaps='handled'
    contentInsetAdjustmentBehavior='automatic'>
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>
            {resultValue}
          </Text>
        </View>
        <View style={styles.inputConatainer}>
          <TextInput
           style={styles.input}
           keyboardType='numeric'
           placeholder='Enter Value'
           placeholderTextColor='#c1c1c1'
           value={String(inputValue)}
          onChangeText={(inputValue)=>{setInputValue(inputValue)}}></TextInput>
        </View>
        <View style={styles.convertButtonContainer}>
        {Object.keys(currencyPerRupee).map((currency)=>(
          <TouchableOpacity 
          style={styles.converterButton} 
          key={currency}
          onPress={()=>{
            buttonPressed(currency)
          }}>
            <Text>{currency}</Text>
          </TouchableOpacity>
        ))}
        </View>
      </SafeAreaView>
    </ScrollView>
    </>
  )
}

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1b262c'
  },
  resultContainer:{
    height:70,
    marginTop: 100,
    justifyContent:'center',
    borderColor:"#bbe1fa",
    borderWidth: 2,
    alignItems:'center',
    borderRadius:20
  },
  resultValue:{
    fontSize:30,
    color:'#FFF',
    fontWeight:'bold'
  },
  inputConatainer:{
    height:70,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'#bbe1fa',
    borderRadius:20
  },
  input:{
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  convertButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop: 10
  },
  converterButton:{
    alignItems:'center',
    justifyContent:'center',
    height:100,
    width:'32%',
    borderColor:'#bbe1fa',
    borderWidth:2,
    marginTop:10,
    backgroundColor:"#0f4c75",
    marginHorizontal: 2,
    borderRadius:10
    
  },
  converterButtonText:{
    color:'#FFF',
    fontSize: 15
  }

})