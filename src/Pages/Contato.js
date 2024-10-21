import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function Contato() {
    const navigation= useNavigation()
  return (
    
    <View>
        <Text>Contato</Text>

        <Button title="Ir para Home"
        onPress={()=>navigation.navigate('Home')}
        />
    </View>
  )
}
