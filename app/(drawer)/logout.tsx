import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { auth } from '../../utils/firebase';

export default function LogoutScreen() {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      try {
        await signOut(auth);
        router.replace('/loginScreen');
      } catch (error) {
        console.error('Failed to sign out:', error);
      }
    };

    logout();
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator />
    </View>
  );
}