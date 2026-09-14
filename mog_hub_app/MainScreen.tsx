import React, { useState } from 'react';
import {View,Text,TextInput,Image,ScrollView,StatusBar,SafeAreaView,StyleSheet,} from 'react-native';

function MainScreen() {
  const [petName, setPetName] = useState('');

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <Image
            style={styles.mogHubLogo}
            source={require('../assets/Images/cat-logo.jpg')}
          />
          <Text style={styles.mainTxt}>Mog Hub</Text>
          <Text style={styles.slogan}>Purrfect companions</Text>

          <View style={styles.inputFlex}>
            <Text style={styles.inputTxt}>Name your Pet:</Text>
            <TextInput
              style={styles.userInputTxt}
              placeholder="Mog"
              value={petName}
              onChangeText={(newText) => setPetName(newText)}
            />
          </View>

          <StatusBar barStyle="dark-content" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mogHubLogo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  mainTxt: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  slogan: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  inputFlex: {
    marginHorizontal: 20,
  },
  inputTxt: {
    fontSize: 16,
    marginBottom: 8,
  },
  userInputTxt: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
});





