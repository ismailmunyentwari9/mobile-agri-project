// screens/WelcomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Header from './components/subComponents/header';
import { BarCodeScanner } from 'expo-barcode-scanner';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const [devices, setDevices] = useState([
        { id: '1', name: 'Smart Green-House', inputs: '12' },
        { id: '2', name: 'Smart Home', inputs: '45' },
        { id: '3', name: 'Smart Camera', inputs: '32' },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [scanning, setScanning] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleAddDevice = () => {
        setModalVisible(true);
    };

    const handleEditDevice = (device) => {
        navigation.navigate('EditDevice', { device });
    };

    const renderDevice = ({ item }) => (
        <TouchableOpacity onPress={() => handleEditDevice(item)} style={styles.deviceContainer}>
            <Icon name="devices" size={50} color="orange" style={styles.deviceIcon} />
            <View style={styles.deviceInfo}>
                <Text style={styles.deviceName}>{item.name}</Text>
                <Text style={styles.deviceInputs}>Inputs: {item.inputs}</Text>
            </View>
        </TouchableOpacity>
    );

    const handleScan = ({ type, data }) => {
        setScanning(false);
        setModalVisible(false);
        console.log(`QR code with type ${type} and data ${data} scanned!`);
        // Handle scanned data here
    };

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.welcomeText}>Welcome to Your Smart Devices</Text>

            <FlatList
                data={devices}
                renderItem={renderDevice}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.noDeviceText}>No devices added yet.</Text>
                    </View>
                }
                contentContainerStyle={styles.listContainer}
            />

            <TouchableOpacity style={styles.addButton} onPress={handleAddDevice}>
                <Icon name="add-circle" size={50} color="black" />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Add a New Device</Text>
                        <TouchableOpacity style={styles.optionButton} onPress={() => setScanning(true)}>
                            <Text style={styles.optionText}>Scan QR Code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton} onPress={() => {
                            setModalVisible(false);
                            navigation.navigate('AddDevice'); // Navigate to manual add screen
                        }}>
                            <Text style={styles.optionText}>Add Manually</Text>
                        </TouchableOpacity>
                        <Button title="Cancel" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>

            {scanning && hasPermission && (
                <BarCodeScanner
                    onBarCodeScanned={handleScan}
                    style={StyleSheet.absoluteFillObject}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    welcomeText: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    addButton: {
        alignSelf: 'center',
        marginVertical: 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noDeviceText: {
        fontSize: 18,
        color: '#888',
    },
    deviceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    deviceIcon: {
        marginRight: 20,
    },
    deviceInfo: {
        flexDirection: 'column',
    },
    deviceName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    deviceInputs: {
        fontSize: 14,
        color: '#666',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    optionButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#121212',
        borderRadius: 10,
        marginVertical: 5,
    },
    optionText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    listContainer: {
        flexGrow: 1,
    },
});

export default WelcomeScreen;
