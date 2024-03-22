import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import style from '../config/style';

export default function RecuperarSenhaScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

   // TODO: retrieve password task in firebase: https://firebase.google.com/docs/auth/web/email-link-auth?hl=pt-br
    
    return(
        <View style={style.Container}>
            <View style={style.innerContainer}>
                <Text variant="headlineLarge" style={style.selfCenter}>
                    Recupere sua senha
                </Text>
                <Text variant="bodySmall" style={style.selfCenter}>
                    Informe seu email e sua senha
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
                <Button
                    mode="outlined"
                    style={{
                        marginTop: 10,
                        maxWidth: 260,
                        alignSelf: 'flex-end'
                    }}
                    onPress={() => Navigation.navigate("LoginScreen")}
                >
                    Recuperar
                </Button>
            </View>
        </View>
    )
}