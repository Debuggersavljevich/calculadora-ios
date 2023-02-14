import {useState} from 'react'
import { View, Text, ActionSheetIOS } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import {styles} from '../theme/appTheme'

const CalculadoraScreen = () => {
  

  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')

  const clear = () => {
    setNumber('0')
  }

  const armarNumero = (numeroTexto: string) =>{
    setNumber(number + numeroTexto)
  }



  return (
  <View style={styles.calculadoraContainer}> 
    <Text style={styles.resultSmall}>{prevNumber}</Text>
    <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit> {number}  </Text>
  
  <View style={styles.fila}>

    <BotonCalc texto={'C'} color="#9B9B9B" action={clear} />
    <BotonCalc texto={'+/-'} color='#9B9B9B' action={armarNumero}/>
    <BotonCalc texto={'DEL'} color='#9B9B9B'action={armarNumero}/>
    <BotonCalc texto={'/'} color='#FF9427'action={clear}/>

  </View>

  <View style={styles.fila}>

    <BotonCalc texto={'7'} action={armarNumero}/>
    <BotonCalc texto={'8'} action={armarNumero}/>
    <BotonCalc texto={'9'} action={armarNumero}/>
    <BotonCalc texto={'X'} color='#FF9427'action={clear}/>

  </View>

  <View style={styles.fila}>

    <BotonCalc texto={'4'} action={armarNumero}/>
    <BotonCalc texto={'5'} action={armarNumero}/>
    <BotonCalc texto={'6'} action={armarNumero}/>
    <BotonCalc texto={'-'} color='#FF9427' action={clear}/>

  </View>
  
  <View style={styles.fila}>

    <BotonCalc texto={'1'}action={armarNumero} />
    <BotonCalc texto={'2'} action={armarNumero}/>
    <BotonCalc texto={'3'} action={armarNumero}/>
    <BotonCalc texto={'+'} color='#FF9427' action={clear}/>

  </View>

  <View style={styles.fila}>

    <BotonCalc texto={'0'} ancho  action={armarNumero}/>
    <BotonCalc texto={'.'} action={armarNumero}/>
    <BotonCalc texto={'='} color='#FF9427' action={clear} />

  </View>
  </View>
  )
}

export default CalculadoraScreen

