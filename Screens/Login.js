import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import styles from '../style/MainStyle';


export default function Login({navigation}) {

const [email, setEmail] = useState(null)
const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Principal"}]
    })
  }

  const Cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  return (
    <View style={styles.container}>
      <Text h2>Serviços</Text>
      
     <Input
      placeholder='E-mail'
      leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'rgba(111, 202, 186, 1)' }}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
    />
      <Input
      placeholder='Sua senha'
      leftIcon={{ type: 'font-awesome', name: 'lock', color: 'rgba(111, 202, 186, 1)'  }}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
    />
     <Button
              title="Entrar"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={() => entrar()}
             
            />

<Button
              title="Cadastrar"
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
              onPress={() => Cadastrar()}
             
            />
        </View>
  );
}