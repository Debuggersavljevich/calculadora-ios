import React from 'react'
import { View, Text } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import {styles} from '../theme/appTheme'

const CalculadoraScreen = () => {
  return (
  <View style={styles.calculadoraContainer}> 
    <Text style={styles.resultSmall}>1,500.00</Text>
    <Text style={styles.result}>1,500.00 </Text>
  
  <View style={styles.fila}>

    <BotonCalc texto={'C'} color="#9B9B9B"/>
    <BotonCalc texto={'+/-'} color='#9B9B9B'/>
    <BotonCalc texto={'DEL'} color='#9B9B9B'/>
    <BotonCalc texto={'/'} color='#FF9427'/>

  </View>
  
  
  
  </View>
  )
}

export default CalculadoraScreen

