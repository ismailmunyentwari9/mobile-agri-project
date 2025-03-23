import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
  const [name, setName] = useState('Isma');
  const [company, setCompany] = useState('HLT');
  const [email, setEmail] = useState('isma@gmail.com');
  const [phone, setPhone] = useState('119');
  const [profileImage, setProfileImage] = useState(require('../assets/user.jpg'));

  const handleSave = () => {
    // Here you can add logic to save the updated information
    Alert.alert('Profile Updated', 'Your profile information has been updated successfully.');
  };

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
      if (response.assets) {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {profileImage ? (
          <View style={styles.imageContainer}>
            <Image source={{ uri: '../assets/user.jpg '}} style={styles.profileImage} />
            <Icon name="edit" size={24} color="#fff" style={styles.editIcon} />
          </View>
        ) : (
          <View style={styles.imageContainer}>
            <Text style={styles.imagePlaceholder}>Select Profile Picture</Text>
            <Icon name="edit" size={24} color="#888" style={styles.editIcon} />
          </View>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
       <TextInput
        style={styles.input}
        placeholder="Company/Organization"
        value={company}
        onChangeText={setCompany}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagePicker: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:2,
    borderRadius:100,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 100,
    color: '#888',
  },
  editIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 50,
    padding: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
    fontSize: 18,
    paddingVertical: 8,
  },
  saveButton: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
   
});

export default Profile;
