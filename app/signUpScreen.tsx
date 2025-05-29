import { router } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from "react";
import { Button, Text, TextInput, View } from 'react-native';
import { signUp } from "../hooks/authServices";
import { db } from '../utils/firebase';

export default function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSignUp = async () => {
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        try {
            const userCred = await signUp(email, password);
            const user = userCred.user;

            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                role: 'user',
                createdAt: new Date()
            });
            setError(null);
            console.log('Signed up: ', user);
            setError(null);
            router.replace('/(tabs)');
        } catch (e) {
            console.error('Sign up error', e);
            setError('Failed to sign up. Please try again.');
        }
    };

    return (
        <View style={{padding: 16}}>
            <TextInput 
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                autoCapitalize="none"
                keyboardType="email-address"
                style={{marginBottom: 12, borderBottomWidth: 1, padding: 8}}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Choose a password"
                secureTextEntry
                style={{ marginBottom: 12, borderBottomWidth: 1, padding: 8 }}
            />
            <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm your password"
                secureTextEntry
                style={{ marginBottom: 12, borderBottomWidth: 1, padding: 8 }}
            />
            <Button title="Create Account"
            onPress={handleSignUp}
            />
            {error && <Text style={{ color: 'red', marginTop: 12}}>{error}</Text>}
        </View>

    )
};


