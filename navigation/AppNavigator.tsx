// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import React from "react";
// import HomeScreen from "../app/homeScreen";
// import LoginScreen from "../app/loginScreen";

// export type RootStackParamList = {
//     Login: undefined;
//     Home: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function AppNavigator() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Login">
//                 <Stack.Screen name="Login" component={LoginScreen} />
//                 <Stack.Screen name="Home" component={HomeScreen} />
//             </Stack.Navigator>       
//         </NavigationContainer>
//     );
// }