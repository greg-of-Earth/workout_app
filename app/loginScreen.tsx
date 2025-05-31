// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from "react";
import { Button, Text, TextInput, View } from 'react-native';
import { signIn } from "../hooks/authServices";
// import { RootStackParamList } from "../navigation/AppNavigator";

// type LoginNavProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
import { router } from 'expo-router';

// react functional component
// accepts inputs (props)
// returns JSX (UI)
// uses react hooks (useState, useEfect to handle state and side effects)
export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    // const navigation = useNavigation<LoginNavProp>();
    

// async function - always returns promise
// promise is value that may not be available yet but will be resolved in future
// can use 'await' in async function to wait for promise to be resolved
// use async function here with await to wait for user to be verified
    const handleLogin = async () => {
        try {
            // await: 'wait here until finsihed'
            const user = await signIn(email, password);
            console.log('Logged in: ', user)
            setError(null);
            // navigation.navigate('Home');
            // router.push('/homeScreen');
            router.replace
            ('/(drawer)/(tabs)');
        } catch (e) {
            console.error('Login error', e);
            setError('Failed to login.');
        }
    };

// return UI
    return (
        <View style={{ padding: 16, marginBottom: 12 }}>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                style={{ marginBottom: 12, borderBottomWidth: 1, padding: 8 }}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
                style={{ marginBottom: 12, borderBottomWidth: 1, padding: 8 }}
            />
            <View style={{ marginBottom: 12}}>
                <Button
                    title="Log In"
                    onPress={handleLogin}
                />
            </View>
            {error && <Text style={{ color: 'red', marginTop: 12}}>{error}</Text>}
            <Button
                title="Sign Up"
                onPress={() => {
                    console.log("clicked sign up");router.push('/signUpScreen');
                }}
            />
        </View>
    );
}