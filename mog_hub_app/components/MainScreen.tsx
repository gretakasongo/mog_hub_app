import {StatusBar} from 'expo-status-bar';
import { Text, TextInput, View, Image, SafeAreaView, ScrollView} from 'react-native';
import {useState} from 'react';
import styles from './Styles'

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

          <StatusBar style="dark" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default MainScreen





