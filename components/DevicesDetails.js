import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import lightImage from '../assets/white-lamp.png';
import acImage from '../assets/ac.png';
import tvImage from '../assets/tv.png';
import fanImage from '../assets/fan.png';
import Header from './subComponents/header';

function DeviceDetails() {
    const route = useRoute();
    const { device } = route.params;

    const getDeviceImage = (deviceName) => {
        switch (deviceName) {
            case 'Smart Light':
                return lightImage;
            case 'Smart AC':
                return acImage;
            case 'Smart TV':
                return tvImage;
            case 'Smart Fan':
                return fanImage;
            default:
                return null;
        }
    };

    const deviceDetails = {
        'Smart Light': {
            usage: '120 hours',
            status: 'ON',
            powerConsumption: '12W',
            description: 'This smart light can be controlled via your phone and has various color options.',
            history: [
                { event: 'Turned ON', time: '2024-08-01 10:00' },
                { event: 'Turned OFF', time: '2024-08-01 22:00' },
                { event: 'Turned ON', time: '2024-08-02 08:00' },
                { event: 'Turned OFF', time: '2024-08-02 20:00' },
            ]
        },
        'Smart AC': {
            usage: '240 hours',
            status: 'OFF',
            powerConsumption: '1.5kW',
            description: 'A smart air conditioner that adjusts temperature based on your preference.',
            history: [
                { event: 'Turned ON', time: '2024-08-01 12:00' },
                { event: 'Turned OFF', time: '2024-08-01 18:00' },
                { event: 'Turned ON', time: '2024-08-02 10:00' },
                { event: 'Turned OFF', time: '2024-08-02 16:00' },
            ]
        },
        'Smart TV': {
            usage: '300 hours',
            status: 'ON',
            powerConsumption: '150W',
            description: 'This smart TV allows you to stream your favorite shows and movies.',
            history: [
                { event: 'Turned ON', time: '2024-08-01 18:00' },
                { event: 'Turned OFF', time: '2024-08-01 23:00' },
                { event: 'Turned ON', time: '2024-08-02 19:00' },
                { event: 'Turned OFF', time: '2024-08-02 23:59' },
            ]
        },
        'Smart Fan': {
            usage: '180 hours',
            status: 'OFF',
            powerConsumption: '50W',
            description: 'A smart fan with speed control and timer functionality.',
            history: [
                { event: 'Turned ON', time: '2024-08-01 09:00' },
                { event: 'Turned OFF', time: '2024-08-01 21:00' },
                { event: 'Turned ON', time: '2024-08-02 09:00' },
                { event: 'Turned OFF', time: '2024-08-02 21:00' },
            ]
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header Component */}
            <Header />
            <View style={styles.upperPartcontainer}>
                <Text style={styles.title}>{device}</Text>
                <Image source={getDeviceImage(device)} style={styles.deviceImage} />
                <Text style={styles.usageText}>Usage: {deviceDetails[device].usage}</Text>
                <Text style={styles.statusText}>Status: {deviceDetails[device].status}</Text>
                <Text style={styles.powerConsumptionText}>Power Consumption: {deviceDetails[device].powerConsumption}</Text>
                <Text style={styles.descriptionText}>{deviceDetails[device].description}</Text>
            </View>
            <Text style={styles.historyTitle}>History Details</Text>
            {deviceDetails[device].history.map((item, index) => (
                <View key={index} style={styles.historyItem}>
                    <Text style={styles.historyEvent}>{item.event}</Text>
                    <Text style={styles.historyTime}>{item.time}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        marginBottom:50,
    },
    upperPartcontainer: {
        flex: 1,
        backgroundColor: 'black',
        borderRadius: 10,
        marginVertical: 20,
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    deviceImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    usageText: {
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
    },
    statusText: {
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
    },
    powerConsumptionText: {
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
    },
    descriptionText: {
        fontSize: 16,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    historyTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    historyItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    historyEvent: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    historyTime: {
        fontSize: 14,
        color: '#666',
    },
});

export default DeviceDetails;
