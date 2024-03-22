import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RecuperarSenhaScreen from "../screens/RecuperarSenhaScreen";
import RegistroScreen from "../screens/RegistroScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegistroScreen"
          component={RegistroScreen}
          options={{
            title: "Registrar-se",
          }}
        />
        <Stack.Screen
          name="RecuperarSenhaScreen"
          component={RecuperarSenhaScreen}
          options={{
            title: "Recuperar senha",
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Página Inicial",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}