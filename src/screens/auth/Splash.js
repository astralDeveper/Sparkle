import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Text, ImageBackground} from 'react-native';

const Splash = ({navigation}) => {
  const isAuth =  () => {
      setTimeout(() => {
         navigation.replace('Welcome')
      }, 3000);
  };
  useEffect(() => {
      isAuth()
  }, []);

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={require('../../assets/Images/PNG/splash.png')}>
      <Image
        style={{
          height: 200,
          width: 200,
        }}
        resizeMode="contain"
        source={require('../../assets/logo-with-text-animation.gif')}
      />
      <Text style={{
        fontFamily:'Outfit-SemiBold',
        color:'white',
        fontSize:45
      }}>
        Sparkle
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
