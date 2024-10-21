import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Card from '../Components/Card'

export default function Home() {
    const navigation= useNavigation()

  return (
    <View style={styles.container}>
        <Text style={styles.tituloContato}>
            Home
        </Text>
        <Card
        title="Sobre"
        content="Saiba mais sobre nós e nossos serviços."
        buttonText="Ir para Sobre"
        onPress={()=>navigation.navigate("Sobre")}
        />
        <Text style={styles.tituloInfo}>
            Mais Informações
        </Text>
        <Card
        title="Contato"
        content="Clique abaixo para entrar em contato"
        buttonText="Ir para Contato"
        onPress={()=>navigation.navigate("Contato")}
        />
        <Text style={styles.tituloInfo}>
            Faq
        </Text>
        <Card
        title="Faq"
        content="Clique abaixo para ver o nosso Faq"
        buttonText="Ir para Faq"
        onPress={()=>navigation.navigate("Faq")}
        />
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        padding:20
    },
    tituloContato:{
        fontWeight:'bold',
        marginBottom:20,
        textAlign:"center"
    },
    tituloInfo:{
        fontWeight:'bold',
        marginTop:20,
        marginBottom:20,
        textAlign:"center"
    }
})
