import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Header = () => {
  const navigation = useNavigation(); // Get the navigation object

  // Function to handle navigation
  const handleNavigate = () => {
    navigation.navigate('Dashboard'); // Navigate to Dashboard screen
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleNavigate}>
        <Image source={require('../../assets/four-dots.png')} style={styles.icon} />
      </TouchableOpacity>
      <Image source={require('../../assets/user.png')} style={styles.userIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Header;
