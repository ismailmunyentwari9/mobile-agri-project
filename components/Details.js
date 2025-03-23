import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useRoute, useNavigation } from '@react-navigation/native';
import Header from './subComponents/header';

// Import the images statically
import temperatureImage from '../assets/temperature.png';
import humidityImage from '../assets/humidity.png';
import gasImage from '../assets/gas.png';
import moistureImage from '../assets/moisture.png';
import windImage from '../assets/wind.png';
import waterImage from '../assets/water.png';

const Details = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { sensorType } = route.params;

    // Get screen dimensions
    const screenWidth = Dimensions.get('window').width;

    // Mock data for demonstration purposes
    const data = {
        Temperature: {
            values: [70, 72, 75, 78, 80, 82, 100, 30],
            max: { value: 85, date: "2024-08-01" },
            min: { value: 70, date: "2024-07-25" },
            image: temperatureImage
        },
        Humidity: {
            values: [100, 35, 40, 29, 90, 55, 60, 30],
            max: { value: 100, date: "2024-07-30" },
            min: { value: 29, date: "2024-07-20" },
            image: humidityImage
        },
        GasLevel: {
            values: [200, 150, 170, 190, 210, 230, 220, 30],
            max: { value: 230, date: "2024-08-01" },
            min: { value: 150, date: "2024-07-25" },
            image: gasImage
        },
        SoilMoisture: {
            values: [30, 35, 40, 45, 50, 55, 60, 30],
            max: { value: 60, date: "2024-07-31" },
            min: { value: 30, date: "2024-07-21" },
            image: moistureImage
        },
        WindChill: {
            values: [50, 55, 60, 65, 70, 75, 80, 30],
            max: { value: 80, date: "2024-08-01" },
            min: { value: 50, date: "2024-07-23" },
            image: windImage
        },
        WaterLevel: {
            values: [75, 80, 85, 90, 95, 100, 105, 30],
            max: { value: 105, date: "2024-08-01" },
            min: { value: 75, date: "2024-07-25" },
            image: waterImage
        },
    };

    const sensorData = data[sensorType];

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header Component */}
                <Header />
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Specific Sensor Captured Data</Text>
                </View>
                <Text style={styles.title}>{sensorType} Details</Text>
                <LineChart
                    data={{
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                        datasets: [{ data: sensorData.values }]
                    }}
                    width={screenWidth * 0.9}  // 90% of the screen width
                    height={screenWidth * 0.8} // 50% of the screen width for height
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        strokeWidth: 2,
                    }}
                    style={{ marginVertical: 20 }}
                />
                <View style={styles.detailsContainer}>
                    <Image source={sensorData.image} style={styles.image} />
                    <View style={styles.measurementDetails}>
                        <View style={styles.detailsSemiContainer}>
                            <Text style={styles.detailText}>Max {sensorType}: {sensorData.max.value}</Text>
                            <Text style={styles.detailText}>Date Extracted: {sensorData.max.date}</Text>
                        </View>
                        <View style={styles.detailsSemiContainer}>
                            <Text style={styles.detailText}>Min {sensorType}: {sensorData.min.value}</Text>
                            <Text style={styles.detailText}>Date Extracted: {sensorData.min.date}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('AddLogicScreen', { sensorType })}>
    <Text style={styles.buttonText}>Add Automation</Text>
</TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    headerContainer: {
        fontWeight: 'bold',
        borderBottomColor: '#10101010',
        paddingVertical: 12,
        borderBottomWidth: 3,
        marginBottom: '10%',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    headerText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: '300',
        textAlign: 'center',
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
    measurementDetails: {
        flex: 1,
        gap: 20,
    },
    detailText: {
        fontSize: 16,
        marginVertical: 5,
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 50,
        alignItems: 'center',
    },
});

export default Details;
