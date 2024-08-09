import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Button from './subComponents/Button';

function LandingPage({ navigation }) {
  return (

    <ScrollView>

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Welcome to <Text style={styles.happy}>Happy </Text>IoT</Text>
        <Text style={styles.subtitle}>Monitor your sensors effortlessly</Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
          style={styles.loginButton}
        />
        <Button
          title="Create Account"
          onPress={() => navigation.navigate('CreateAccount')}
          style={styles.createAccountButton}
        />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:"50%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: 'orange',
    marginBottom: 15,
  },
  createAccountButton: {
    backgroundColor: 'black',
  },
  happy: {
    color: 'orange',
  }
});

export default LandingPage;
