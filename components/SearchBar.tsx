import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useSearchStore } from '../stores/useSearchStore';

// create the search bar
export default function SearchBar({ onSearch }: { onSearch: () => void }) {
    const { query, setQuery } = useSearchStore();

    return (
        <View style={styles.container}>
            <TextInput
                value={query}
                onChangeText={setQuery}
                placeholder='Search...'
                style={styles.input}
                returnKeyType="search"
                onSubmitEditing={onSearch}
            />
            <Pressable onPress={onSearch} style={styles.icon}>
                <Ionicons name="search" size={24} color="black" />
            </Pressable>
        </View>
    );
}

// create the stylesheet for container, input, icon
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    input: {
        flex: 1, 
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10, 
        height: 40,
    },
    icon: {
        padding: 8,
        marginLeft: 4,
    },
});