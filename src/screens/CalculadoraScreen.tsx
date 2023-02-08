import React from 'react'
import { View, Text } from 'react-native'

import {styles} from '../theme/appTheme'

const CalculadoraScreen = () => {
  return (
  <View style={styles.calculadoraContainer}> 
    <Text style={styles.resultSmall}>1,500.00</Text>
    <Text style={styles.result}>1,500.00 </Text>
  
  <View>
    <View style={styles.boton}>
        <Text>
            1
        </Text>
    </View>
  </View>
  
  
  
  </View>
  )
}

export default CalculadoraScreen

