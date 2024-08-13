import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EditDeviceScreen = ({ route, navigation }) => {
    const { device } = route.params;
    const [deviceName, setDeviceName] = useState(device.name);
    const [deviceIcon, setDeviceIcon] = useState('devices'); // Default icon

    const handleSave = () => {
        // Save logic here (e.g., update state, persist data)
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Device</Text>

            <Text style={styles.label}>Device Name:</Text>
            <TextInput
                style={styles.input}
                value={deviceName}
                onChangeText={setDeviceName}
            />

            <Text style={styles.label}>Choose Icon:</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => setDeviceIcon('devices')}>
                    <Icon name="devices" size={40} color={deviceIcon === 'devices' ? 'orange' : 'gray'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDeviceIcon('home')}>
                    <Icon name="home" size={40} color={deviceIcon === 'home' ? 'orange' : 'gray'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDeviceIcon('camera')}>
                    <Icon name="camera" size={40} color={deviceIcon === 'camera' ? 'orange' : 'gray'} />
                </TouchableOpacity>
                {/* Add more icons as needed */}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    button: {
        height: 50,
        borderRadius: 10,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default EditDeviceScreen;
