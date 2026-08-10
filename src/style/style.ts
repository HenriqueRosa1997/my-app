import { StyleSheet } from 'react-native';
export const style = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        paddingHorizontal: 16,
    },
    list: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
});

