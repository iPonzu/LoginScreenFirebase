import { View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';
import auth, { db } from '../config/api/firebaseConfig'
import { useState } from 'react';
import style from '../config/style';


export default function RegistroScreen({ navigation }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const cadastrarUsuario = async () => {
        try {
            const usuario = await createUserWithEmailAndPassword(auth, email, senha)
            const uid = await usuario.user.uid
            await setDoc(doc(db, "usuarios", uid), {
                nome: nome,
                email: email,
            })
            navigation.navigate("LoginScreen")
        } catch (error) {
            if(error.code === "auth/email-already-in-use"){
                console.error("Email já cadastrado")
            }else{
                console.log(error)
            }
        }
    }

    return(
        <View style={style.Container}>
            <View style={style.innerContainer}>
                <Text variant="headlineLarge" style={style.selfCenter}>
                    Faça seu cadastro
                </Text>
                <Text variant="bodySmall" style={style.selfCenter}>
                    Utilize seus dados pessoais 
                </Text>
                <TextInput
                    label="Nome"
                    mode="outlined"
                    placeholder='Nome'
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    label="Email"
                    mode="outlined"
                    keyboardType="email-address"
                    placeholder='yourmail@gmail.com'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    label="Senha"
                    mode="outlined"
                    placeholder='********'
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
                <Button
                    mode="outlined"
                    style={{
                        // in native 
                        marginTop: 10,
                        maxWidth: 260,
                        alignSelf: 'flex-end'
                    }}
                    onPress={() => {
                        try {
                            cadastrarUsuario()
                            navigation.navigate("LoginScreen")
                        } catch (error) {
                            console.log(error)
                        }
                    }}
                    >
                        Cadastrar
                </Button>
            </View>
        </View>
    )
}
