import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Header from './components/subComponents/header';
import { BarCodeScanner } from 'expo-barcode-scanner';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const [devices, setDevices] = useState([
        { id: '1', name: 'Smart Green-House', inputs: '12' },
        { id: '2', name: 'Smart Home', inputs: '45' },
        { id: '3', name: 'Smart Hub', inputs: '32' },
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

    const renderDevice = ({ item }) => {
        const handleDevicePress = () => {
            switch (item.name) {
                case 'Smart Green-House':
                    navigation.navigate('SmartGreen');
                    break;
                case 'Smart Home':
                    navigation.navigate('SmartHome');
                    break;
                case 'Smart Camera':
                    navigation.navigate('SmartCamera');
                    break;
                default:
                    break;
            }
        };

        return (
            <View style={styles.deviceContainer}>
                <TouchableOpacity style={styles.deviceInfo} onPress={handleDevicePress}>
                    <Icon name="devices" size={50} color="orange" style={styles.deviceIcon} />
                    <View>
                        <Text style={styles.deviceName}>{item.name}</Text>
                        <Text style={styles.deviceInputs}>Inputs: {item.inputs}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editIcon} onPress={() => handleEditDevice(item)}>
                    <Icon name="edit" size={30} color="gray" />
                </TouchableOpacity>
            </View>
        );
    };

    const handleScan = ({ type, data }) => {
        setScanning(false);
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
                        <TouchableOpacity 
                            style={styles.optionButton} 
                            onPress={() => {
                                setModalVisible(false);
                                setScanning(true);
                            }}
                        >
                            <Text style={styles.optionText}>Scan QR Code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.optionButton} 
                            onPress={() => {
                                setModalVisible(false);
                                navigation.navigate('AddDevice'); // Navigate to manual add screen
                            }}
                        >
                            <Text style={styles.optionText}>Add Manually</Text>
                        </TouchableOpacity>
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
        paddingTop:50,
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
        justifyContent: 'space-between',
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
    deviceInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deviceIcon: {
        marginRight: 20,
    },
    deviceName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    deviceInputs: {
        fontSize: 14,
        color: 'gray',
    },
    editIcon: {
        padding: 10,
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
