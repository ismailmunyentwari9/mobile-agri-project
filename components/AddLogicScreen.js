import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, Alert, ScrollView, Modal, TouchableOpacity, FlatList } from 'react-native';
import Header from './subComponents/header';
import { useRoute } from '@react-navigation/native';

const AddLogicScreen = () => {
    const route = useRoute();
    const { sensorType } = route.params;

    // Mock devices list
    const devices = [
        { id: '1', name: 'Smart Light' },
        { id: '2', name: 'Smart AC' },
        { id: '3', name: 'Smart TV' },
        { id: '4', name: 'Smart Fan' },
    ];

    const [selectedDevice, setSelectedDevice] = useState(devices.length > 0 ? devices[0].name : '');
    const [threshold, setThreshold] = useState('');
    const [action, setAction] = useState('');
    const [actionType, setActionType] = useState('Turn on');
    const [isAlertEnabled, setIsAlertEnabled] = useState(false);

    const [deviceModalVisible, setDeviceModalVisible] = useState(false);
    const [actionTypeModalVisible, setActionTypeModalVisible] = useState(false);

    const handleSave = () => {
        if (!selectedDevice || !threshold || !action) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        console.log(`For device ${selectedDevice}, set threshold to ${threshold} and perform ${actionType} action: ${action}`);
        if (isAlertEnabled) {
            console.log('Alert is enabled');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header />
            <Text style={styles.title}>Add Logic for {sensorType}</Text>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Select Device:</Text>
                <TouchableOpacity style={styles.dropdown} onPress={() => setDeviceModalVisible(true)}>
                    <Text style={styles.dropdownText}>{selectedDevice || 'Select Device'}</Text>
                </TouchableOpacity>
                <Modal
                    visible={deviceModalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setDeviceModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <FlatList
                            data={devices}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.modalItem}
                                    onPress={() => {
                                        setSelectedDevice(item.name);
                                        setDeviceModalVisible(false);
                                    }}
                                >
                                    <Text style={styles.modalItemText}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </Modal>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Threshold:</Text>
                <TextInput
                    style={styles.input}
                    value={threshold}
                    placeholder='Set Threshold (e.g: 12.5)'
                    onChangeText={setThreshold}
                    keyboardType='numeric'
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Action:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Specify action (e.g: Turn on the light)'
                    value={action}
                    onChangeText={setAction}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Action Type:</Text>
                <TouchableOpacity style={styles.dropdown} onPress={() => setActionTypeModalVisible(true)}>
                    <Text style={styles.dropdownText}>{actionType}</Text>
                </TouchableOpacity>
                <Modal
                    visible={actionTypeModalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setActionTypeModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <TouchableOpacity
                            style={styles.modalItem}
                            onPress={() => {
                                setActionType('Turn on');
                                setActionTypeModalVisible(false);
                            }}
                        >
                            <Text style={styles.modalItemText}>Turn on</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalItem}
                            onPress={() => {
                                setActionType('Turn off');
                                setActionTypeModalVisible(false);
                            }}
                        >
                            <Text style={styles.modalItemText}>Turn off</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Enable Alert:</Text>
                <Switch
                    value={isAlertEnabled}
                    onValueChange={setIsAlertEnabled}
                />
            </View>

            <Button title="Save Logic" onPress={handleSave} />
        </ScrollView>
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
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        fontSize: 16,
    },
    dropdown: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
    },
    dropdownText: {
        fontSize: 16,
    },
    modalContainer: {
        marginTop: 100,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00000080',
    },
    modalItem: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    modalItemText: {
        fontSize: 16,
    },
});

export default AddLogicScreen;
