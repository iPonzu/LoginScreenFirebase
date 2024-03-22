import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { Image } from "expo-image";
import { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../config/api/firebase'
import style from '../config/style'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const fazerLogin = async () => {
        try {
           const usuario = await signInWithEmailAndPassword(auth, email, senha) 
           console.log(usuario)
           navigation.navigate("HomeScreen")
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <View style={style.Container}> 
            <View style={style.innerContainer}>
               <Text variant="headlineLarge" style={style.selfCenter}>Controle de acesso</Text> 
                <Text variant="bodyMedium" style={[style.selfCenter, style.fontVariant]}>
                    Realize seu login
                </Text>
                <Text variant="bodyMedium" style={style.selfCenter}>
                    Utilize suas credenciais
                </Text>
                <TextInput
                    label="Email"
                    mode="outlined"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    label="Senha"
                    mode="outlined"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
                <Button onPress={() => navigation.navigate("RecuperarSenhaScreen")}>
                    Recuperar senha
                </Button>
                <Button onPress={() => navigation.navigate("RegistroScreen")}>
                    Registrar-se
                </Button>
                <Button
                    mode="outlined"
                    style={{
                        marginTop: 10,
                        maxWidth: 260,
                        alignSelf: 'flex-end'
                    }}
                    onPress={fazerLogin}
                    >
                        Entrar
                </Button>
            </View>
        </View>
    
    )
}