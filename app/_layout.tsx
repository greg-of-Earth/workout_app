// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';
// import { useColorScheme } from '../hooks/useColorScheme';


// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   if (!loaded) {
//     // Async font loading only occurs in development.
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }

// app/_layout.tsx
import { Slot, usePathname, useRouter } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { auth } from '../utils/firebase';


export default function RootLayout() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  // const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // setUser(user);
      console.log('auth state changed:', user);
      setLoading(false);

      if (!user && pathname !== '/loginScreen' && pathname !== '/signUpScreen') {
        router.replace('/loginScreen'); // go to login if not signed in
      } else if (user && (pathname === '/loginScreen' || pathname === '/signUpScreen')) {
        router.replace('/(drawer)/(tabs)'); // go to tabs if signed in
      }
    });

    return unsubscribe;
  }, [router, pathname]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return <Slot />;
}


