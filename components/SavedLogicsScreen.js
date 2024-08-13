import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './subComponents/header';

const SavedLogicsScreen = ({ navigation }) => {
    // Example data representing saved logics
    const savedLogics = [
        { id: '1', device: 'Smart Light', threshold: '12.5', actionType: 'Turn on', action: 'Turn on the light', isAlertEnabled: true, date: '2024-08-13' },
        { id: '2', device: 'Smart AC', threshold: '25.0', actionType: 'Turn off', action: 'Turn off the AC', isAlertEnabled: false, date: '2024-08-12' },
        { id: '3', device: 'Smart Fan', threshold: '18.0', actionType: 'Turn on', action: 'Turn on the fan', isAlertEnabled: true, date: '2024-08-11' },
        // Add more logics here
    ];

    const renderLogicItem = ({ item }) => (
        <TouchableOpacity style={styles.logicItem} onPress={() => { /* Handle logic click */ }}>
            <Text style={styles.logicTitle}>{item.device}</Text>
            <Text style={styles.logicDetails}>Threshold: {item.threshold}</Text>
            <Text style={styles.logicDetails}>Action: {item.actionType} - {item.action}</Text>
            <Text style={styles.logicDetails}>Alert Enabled: {item.isAlertEnabled ? 'Yes' : 'No'}</Text>
            <Text style={styles.logicDetails}>Date: {item.date}</Text> 
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Saved Logics</Text>
            <FlatList
                data={savedLogics}
                keyExtractor={(item) => item.id}
                renderItem={renderLogicItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    listContainer: {
        paddingBottom: 20,
        
    },
    logicItem: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        
    },
    logicTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    logicDetails: {
        fontSize: 16,
        marginTop: 5,
        color:'orange,'
    },
});

export default SavedLogicsScreen;
