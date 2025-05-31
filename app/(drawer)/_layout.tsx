// app/(drawer)/_layout.tsx
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {

    return (
        <Drawer>
            <Drawer.Screen name="index" options={{ title: 'Home' }} />
            <Drawer.Screen
                name="logout"
                options={{
                    title: 'Logout',
                }}
            />
        </Drawer>
    );
}
