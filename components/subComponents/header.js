import React, { useState, useRef, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Modal, Text, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const screenWidth = Dimensions.get('window').width;

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(-screenWidth)).current;

  // Function to toggle the side navigation bar
  const toggleNavBar = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isNavVisible ? 0 : -screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isNavVisible]);

  const navigateToProfile = () => {
    navigation.navigate('Profile');
    setIsNavVisible(false); // Close the modal after navigating to Profile
  };
  const navigateToSavedAutomations = () => {
    navigation.navigate('Saved');
    setIsNavVisible(false); // Close the modal after navigating to Profile
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconContainer} onPress={toggleNavBar}>
        <Image source={require('../../assets/four-dots.png')} style={styles.icon} />
      </TouchableOpacity>

      {/* User image that navigates to Profile */}
      <TouchableOpacity onPress={navigateToProfile}>
        <Image source={require('../../assets/user.jpg')} style={styles.userIcon} />
      </TouchableOpacity>

      {/* Side Navigation Bar */}
      <Modal
        transparent={true}
        visible={isNavVisible}
        onRequestClose={toggleNavBar}
        animationType="fade"
      >
        <TouchableOpacity style={styles.modalContainer} onPress={toggleNavBar}>
          <Animated.View style={[styles.navContainer, { transform: [{ translateX: slideAnim }] }]}>
            <TouchableOpacity activeOpacity={1} style={styles.navBar} onPress={() => { }}>
              {/* Navigation Bar Header */}
              <View style={styles.navHeader}>
                
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
                <Text style={styles.appName}>Happy IOT</Text>
              </View>

              <View style={styles.navBody}>
                {/* Navigation Links */}
                <TouchableOpacity style={styles.navItem} onPress={() => { /* Handle navigation to Settings */ }}>
                  <Icon name="settings" size={24} color="#000" />
                  <Text style={styles.navItemText}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={navigateToProfile}>
                  <Icon name="person" size={24} color="#000" />
                  <Text style={styles.navItemText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={navigateToSavedAutomations}>
                  <Icon name="save" size={24} color="#000" />
                  <Text style={styles.navItemText}>Saved Automations</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => { /* Handle navigation to Logout */ }}>
                  <Icon name="exit-to-app" size={24} color="#000" />
                  <Text style={styles.navItemText}>Logout</Text>
                </TouchableOpacity>
              </View>

            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 30,
  },
  iconContainer: {
    // Customize as needed
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
    color: '#121212',
  },
  icon: {
    width: 30,
    height: 30,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Dark overlay background
  },
  navContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: screenWidth,
  },
  navBar: {
    width: 250,
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 50,
    position: 'absolute',
    left: 0,
  },
  navHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 20,
    width: '100%',
    borderBottomRightRadius: 10,
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    right: 20,
  },
  navBody: {
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  navItemText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: '300',
  },
});

export default Header;
