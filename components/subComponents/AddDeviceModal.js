// AddDevice.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const AddDeviceModal = ({ navigation }) => {
    const [deviceName, setDeviceName] = React.useState('');
    const [inputs, setInputs] = React.useState('');

    const handleAddDevice = () => {
        // Add logic to save the new device
        navigation.goBack(); // Navigate back after adding device
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Device</Text>
            <TextInput
                style={styles.input}
                placeholder="Device Name"
                value={deviceName}
                onChangeText={setDeviceName}
            />
            <TextInput
                style={styles.input}
                placeholder="Number of Inputs"
                value={inputs}
                onChangeText={setInputs}
                keyboardType="numeric"
            />
            <Button title="Add Device" onPress={handleAddDevice} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});

export default AddDeviceModal;
