import React from 'react';
import Header from './subComponents/header';
import { View, Text, Image, StyleSheet, ScrollView  } from 'react-native';

function Dashboard() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Header Section */}
                <Header />

                <View style={styles.header}>

                    <Text style={styles.headerTitle}>Real-time Sensor Data Capture</Text>
                </View>

                {/* Sensor Data Section */}
                <View style={styles.sensorDataContainer}>
                    <View style={styles.sensorsRow}>
                        {/* Temperature Container */}
                        <View style={styles.sensorContainer}>
                            <Image source={require('../assets/temperature.png')} style={styles.sensorImage} />
                            <View style={styles.sensorDetails}>
                                <Text style={styles.sensorTitle}>Temperature</Text>
                                <Text style={styles.sensorValue}>90°F</Text>
                                <Text style={styles.sensorLocation}>Greenhouse</Text>
                            </View>
                        </View>

                        {/* Gas Level Container */}
                        <View style={styles.sensorContainer}>
                            <Image source={require('../assets/gas.png')} style={styles.sensorImage} />
                            <View style={styles.sensorDetails}>
                                <Text style={styles.sensorTitle}>Gas Level</Text>
                                <Text style={styles.sensorValue}>200 ppm</Text>
                                <Text style={styles.sensorLocation}>Greenhouse</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.sensorsRow}>
                        {/* Soil Moisture Container */}
                        <View style={styles.sensorContainer}>
                            <Image source={require('../assets/moisture.png')} style={styles.sensorImage} />
                            <View style={styles.sensorDetails}>
                                <Text style={styles.sensorTitle}>Soil Moisture</Text>
                                <Text style={styles.sensorValue}>30%</Text>
                                <Text style={styles.sensorLocation}>Indoor Grow Room</Text>
                            </View>
                        </View>

                        {/* Wind Chill Container */}
                        <View style={styles.sensorContainer}>
                            <Image source={require('../assets/wind.png')} style={styles.sensorImage} />
                            <View style={styles.sensorDetails}>
                                <Text style={styles.sensorTitle}>Wind Chill</Text>
                                <Text style={styles.sensorValue}>50°F</Text>
                                <Text style={styles.sensorLocation}>Greenhouse</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.sensorsRow}>
                        {/* Humidity Container */}
                        <View style={styles.sensorContainer}>
                            <Image source={require('../assets/humidity.png')} style={styles.sensorImage} />
                            <View style={styles.sensorDetails}>
                                <Text style={styles.sensorTitle}>Humidity</Text>
                                <Text style={styles.sensorValue}>70%</Text>
                                <Text style={styles.sensorLocation}>Greenhouse</Text>
                            </View>
                        </View>

                        {/* Water Level Container */}
                        <View style={styles.sensorContainer}>
                            <Image source={require('../assets/water.png')} style={styles.sensorImage} />
                            <View style={styles.sensorDetails}>
                                <Text style={styles.sensorTitle}>Water Level</Text>
                                <Text style={styles.sensorValue}>75%</Text>
                                <Text style={styles.sensorLocation}>Hydroponics</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    header: {
        marginTop: 20,
        marginBottom: 30,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    sensorDataContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 20,
    },
    sensorContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        flexBasis: '48%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    sensorsRow: {
        flexDirection: 'row',
        gap: 12,
    },
    sensorImage: {
        width: 50,
        height: 50,
        marginRight: 20,
    },
    sensorDetails: {
        flex: 1,
    },
    sensorTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sensorValue: {
        fontSize: 16,
        marginTop: 5,
    },
    sensorLocation: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
});

export default Dashboard;
