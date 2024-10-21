import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

export default function Sobre() {
    const navigation= useNavigation()

    const [contatos,setContatos]=useState([]);

    const apiUrl = 'http://10.0.2.2:3000/contatos';
    const fetchContatos=()=>{
      try {
        axios.get(apiUrl).then((response)=>{
          setContatos(response.data)
        })
        .catch((error)=>{
          console.error("Erro ao buscar contatos", error)
        })

    } catch (error) {
        console.error('Erro ao acionar o suporte');
        return false;
    }
    }
    useEffect(() => {
      fetchContatos();
    }, []);

  return (
    <View>
        
          {contatos.length > 0 ? (
            contatos.map((contato,index) => (
              <View key={index}>
                <Text>{contato.nome}</Text>
                <Text>{contato.telefone}</Text>
              </View>
            ))
          ) : (
            <Text>Nenhum contato</Text>
          )}
        
        <Button title="Ir para Home"
        onPress={()=>navigation.navigate('Home')}
        />
    </View>
  )
}
