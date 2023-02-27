import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import styles from '../style/MainStyle';


export default function Cadastro({navigation}) {

const [email, setEmail] = useState(null)
const [nome, setNome] = useState(null)
const [cpf, setCpf] = useState(null)
const [telefone, setTelefone] = useState(null)
const [isSelected, setSelected] = useState(false)
const [errorEmail, setErrorEmail] = useState(null)
const [errorNome, setErrorNome] = useState(null)
const [errorCpf, setErrorCpf] = useState(null)
const [errorTelefone, setErrorTelefone] = useState(null)


const salvar = () => {
  if (validar()){
  console.log("Salvou")
  }
}

  return (
    <View style={styles.container}>
      <Text h3>Cadastre-se</Text>
      
     <Input
      placeholder='E-mail'
      leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'rgba(111, 202, 186, 1)' }}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
      errorMessage={errorEmail}
      
    />
      <Input
      placeholder='Nome'
      leftIcon={{ type: 'font-awesome', name: 'user', color: 'rgba(111, 202, 186, 1)'  }}
      onChangeText={value => setNome(value)}
      errorMessage={errorNome}
      
    />
    <Input
      placeholder='CPF'
      leftIcon={{ type: 'font-awesome', name: 'question', color: 'rgba(111, 202, 186, 1)' }}
      onChangeText={value => setCpf(value)}
      keyboardType="number-pad"
      returnKeyType='done'
      errorMessage={errorCpf}
    />
    <Input
      placeholder='Telefone'
      leftIcon={{ type: 'font-awesome', name: 'phone', color: 'rgba(111, 202, 186, 1)' }}
      onChangeText={value => setTelefone(value)}
      keyboardType="phone-pad"
      returnKeyType='done'
      errorMessage={errorTelefone}
    />

<CheckBox
    title="Eu aceito os termos de uso"
    checkedIcon="check"
    uncheckedIcon= "square-o"
    uncheckedColor='red'
    backgroundColor='F5EFDF'
    checkedColor='rgba(111, 202, 186, 1)'
    checked={isSelected}
    onPress={() => setSelected(!isSelected)}

/>
    
<Button
              title="Salvar"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: '#B575FA',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={() => salvar()}
             
            />
        </View>
  );
}