import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

export default function Faq() {
    const navigation= useNavigation()

    const [faqs,setFaq]=useState([]);

    const apiUrl = 'http://10.0.2.2:3000/faq';
    const fetchFaq=()=>{
      try {
        axios.get(apiUrl).then((response)=>{
            setFaq(response.data)
        })
        .catch((error)=>{
          console.error("Erro ao buscar so faqs", error)
        })

    } catch (error) {
        console.error('Erro ao acionar o suporte');
        return false;
    }
    }
    useEffect(() => {
        fetchFaq();
    }, []);

  return (
    <View>
        
          {faqs.length > 0 ? (
            faqs.map((faq,index) => (
              <View key={index}>
                <Text>{faq.pergunta}</Text>
                <Text>{faq.resposta}</Text>
              </View>
            ))
          ) : (
            <Text>Nenhum faq</Text>
          )}
        
        <Button title="Ir para Home"
        onPress={()=>navigation.navigate('Home')}
        />
    </View>
  )
}
