import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,Switch,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './subComponents/header';
import Dashboard from './realDataDashboard';

function SmartGreen() {
    const navigation = useNavigation();
    const [isAlertEnabled, setIsAlertEnabled] = useState(false);

    const handleDevicePress = (device) => {
        navigation.navigate('DeviceDetails', { device });
    };

    const handleAddLogicPress = (device) => {
        navigation.navigate('AddLogic', { devices: [{ id: device, name: device }] });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Header />
                <Text style={styles.welcomeText}>Welcome Home</Text>
                <View style={styles.mainTitleContainer}>
                    <Text style={styles.mainTitle}>Happy IoT</Text>
                    <Image source={require('../assets/logo.png')} style={styles.logo} />
                </View>
                <Dashboard />
                <View style={styles.smartDevicesContainer}>
                    <Text style={styles.smartDevicesTitle}>Smart Devices</Text>
                    <View style={styles.subContainer}>
                        <TouchableOpacity
                            style={styles.deviceContainer}
                            onPress={() => handleDevicePress('Smart Light')}
                        >
                            <Image source={require('../assets/white-lamp.png')} style={styles.deviceImage} />
                            <View style={styles.subdiviceContainer}>
                                <View>
                                    <Text style={styles.deviceLabel}>Smart</Text>
                                    <Text style={styles.deviceLabel}>Light</Text>
                                </View>
                                <Switch
                                    value={isAlertEnabled}
                                    onValueChange={setIsAlertEnabled}
                                />  
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.deviceContainer}
                            onPress={() => handleDevicePress('Smart AC')}
                        >
                            <Image source={require('../assets/ac.png')} style={styles.deviceImage} />
                            <View style={styles.subdiviceContainer}>
                                <View>
                                    <Text style={styles.deviceLabel}>Smart</Text>
                                    <Text style={styles.deviceLabel}>AC</Text>
                                </View>
                                <Switch
                                    value={isAlertEnabled}
                                    onValueChange={setIsAlertEnabled}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subContainer}>
                        <TouchableOpacity
                            style={styles.lowerDeviceContainer}
                            onPress={() => handleDevicePress('Smart TV')}
                        >
                            <Image source={require('../assets/tv.png')} style={styles.deviceImage} />
                            <View style={styles.subdiviceContainer}>
                                <View>
                                    <Text style={styles.lowerDeviceLabel}>Smart</Text>
                                    <Text style={styles.lowerDeviceLabel}>TV</Text>
                                </View>
                                <Switch
                                    value={isAlertEnabled}
                                    onValueChange={setIsAlertEnabled}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.lowerDeviceContainer}
                            onPress={() => handleDevicePress('Smart Fan')}
                        >
                            <Image source={require('../assets/fan.png')} style={styles.deviceImage} />
                            <View style={styles.subdiviceContainer}>
                                <View>
                                    <Text style={styles.lowerDeviceLabel}>Smart</Text>
                                    <Text style={styles.lowerDeviceLabel}>Fan</Text>
                                </View>
                                <Switch
                                    value={isAlertEnabled}
                                    onValueChange={setIsAlertEnabled}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
    },
    scrollViewContent: {
        flexGrow: 1,
       
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    mainTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        alignItems: 'center',
        marginBottom: 30,
        borderBottomColor: '#10101010',
        paddingVertical: 12,
        borderBottomWidth: 2,
    },
    logo: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    mainTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#121212'
    },
    smartDevicesContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    smartDevicesTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subdiviceContainer: {
        flexDirection: 'row',
        gap: 40,
    },
    deviceContainer: {
        flexDirection: 'column',
        backgroundColor: '#121212',
        borderRadius: 20,
        width:'45%',
        gap: 35,
        paddingVertical: 30,
        paddingHorizontal: 30,
        marginBottom: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    lowerDeviceContainer: {
        flexDirection: 'column',
        gap: 35,
        width:'45%',
        backgroundColor: '#10101010',
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 30,
        marginBottom: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    deviceImage: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    deviceLabel: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
    },
    lowerDeviceLabel: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
    switchOn: {
        backgroundColor: 'white',
        width: 'auto',
        height: 50,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    switchOFF: {
        backgroundColor: 'white',
        width: 'auto',
        height: 50,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    onButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'lightgreen',
    },
    offButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'red',
    }
});

export default SmartGreen;
