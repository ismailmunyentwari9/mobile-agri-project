import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from './subComponents/header';

function HomePage() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                 {/* Header Section */}
                  <Header />

                {/* Welcome Text */}
                <Text style={styles.welcomeText}>Welcome Home</Text>

                {/* Main Title */}
                <View style={styles.mainTitleContainer}>
                    <Text style={styles.mainTitle}>Happy IoT</Text>
                    <Image source={require('../assets/logo.png')} style={styles.logo} />
                </View>

                {/* Smart Devices Section */}
                <View style={styles.smartDevicesContainer}>
                    <Text style={styles.smartDevicesTitle}>Smart Devices</Text>

                    <View style={styles.subContainer}>
                        <View style={styles.deviceContainer}>
                            <Image source={require('../assets/white-lamp.png')} style={styles.deviceImage} />
                            <View style={styles.subdiviceContainer}>
                                <View>
                                    <Text style={styles.deviceLabel}>Smart</Text>
                                    <Text style={styles.deviceLabel}>Light</Text>
                                </View>
                                <TouchableOpacity style={styles.switchOn}>
                                    <View style={styles.onButton}></View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.deviceContainer}>
                            <Image source={require('../assets/ac.png')} style={styles.deviceImage} />
                            <View style={styles.subdiviceContainer}>
                                <View>
                                    <Text style={styles.deviceLabel}>Smart</Text>
                                    <Text style={styles.deviceLabel}>AC</Text>
                                </View>
                                <TouchableOpacity style={styles.switchOn}>
                                    <View style={styles.onButton}></View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.subContainer}>
                        <View style={styles.lowerDeviceContainer}>
                            <Image source={require('../assets/tv.png')} style={styles.deviceImage} />
                            <View style={styles.subdiviceContainer}>
                                <View>
                                    <Text style={styles.lowerDeviceLabel}>Smart</Text>
                                    <Text style={styles.lowerDeviceLabel}>TV</Text>
                                </View>
                                <TouchableOpacity style={styles.switchOFF}>
                                    <View style={styles.offButton}></View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.lowerDeviceContainer}>
                            <Image source={require('../assets/fan.png')} style={styles.deviceImage} />
                            <View style={styles.subdiviceContainer}>
                                <View>
                                    <Text style={styles.lowerDeviceLabel}>Smart</Text>
                                    <Text style={styles.lowerDeviceLabel}>Fan</Text>
                                </View>
                                <TouchableOpacity style={styles.switchOFF}>
                                    <View style={styles.offButton}></View>
                                </TouchableOpacity>
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
        paddingHorizontal: 20,
        backgroundColor:'white',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    iconContainer: {
        // Customize as needed
    },
    icon: {
        width: 30,
        height: 30,
    },
    userIcon: {
        width: 30,
        height: 30,
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    mainTitleContainer: {
        flexDirection:'row',
        justifyContent:'center',
        gap:20,
        alignItems: 'center',
        marginBottom: 30,
        borderBottomColor:'#10101010',
        paddingVertical:12,
        borderBottomWidth:2,
    },
    logo: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    mainTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color:'#121212'
    },
    smartDevicesContainer: {
        flexDirection: 'column',
        alignItems:'center',
    },
    smartDevicesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight:150,
        marginBottom: 10,
    },
    subdiviceContainer: {
        flexDirection: 'row',
        gap:40,
    },
    deviceContainer: {
        flexDirection: 'column',
        backgroundColor: '#121212',
        borderRadius: 20,
        gap:35,
        paddingVertical: 30,
        paddingHorizontal: 30,
        
        marginBottom: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    lowerDeviceContainer:{
        flexDirection: 'column',
        gap:35,
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
    lowerDeviceLabel:{
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
    switchOn: {
        backgroundColor: 'white',
        width:'auto',
        height:50,
        borderRadius: 20,
        dispaly:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',

    },
    switchOFF: {
        backgroundColor: 'white',
        width:'auto',
        height:50,
        borderRadius: 20,
        dispaly:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',

    },
   
    onButton:{
      width:30,
      height:30,
      borderRadius:'50%',
      backgroundColor:'lightgreen',
    },
    offButton:{
        width:30,
        height:30,
        borderRadius:'50%',
        backgroundColor:'red',
      }
});

export default HomePage;
