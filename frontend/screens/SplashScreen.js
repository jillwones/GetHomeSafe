import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('token').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'NavbarContainer'
        ),
      );
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Home Safe</Text>
      {/* Can add our logo once finalised using code below (and deleting above text) */}
      {/* <Image
        source={require('../Image/aboutreact.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      /> */}
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#64C5F0",
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});