import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';

// Images
import Back from '../../assets/Images/PNG/Welcome.png';
import LinearGradient from 'react-native-linear-gradient';
import Atrat, {Facebook, Gooogle, Hide, Lines, Pass, Show} from '../../assets/Images';

const Login = ({navigation}) => {
  useEffect(() => {
    const hideSplash = () => {
      RNBootSplash.hide();
    };
    const timeoutId = setTimeout(hideSplash, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const [pShow, setPShow] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: height * 0.1,
          marginBottom: height * 0.05,
        }}>
        <Text style={styles.Text}>Welcome Back!</Text>
        <Text style={styles.Text1}>Login to continue your journey</Text>
      </View>
      <View>
        <View style={styles.emailC}>
          <View style={styles.inputpic}>
            <Atrat />
          </View>
          <View style={styles.inputtitleC}>
            <Text style={styles.inputtitle}>Email Address</Text>
            <TextInput
              placeholder="jhon@gmail.com"
              placeholderTextColor={'#000'}
              style={styles.emailInput}
            />
          </View>
        </View>
        <View style={styles.emailC}>
          <View style={styles.inputpic}>
            <Pass />
          </View>
          <View style={styles.inputPC}>
            <Text style={styles.inputtitle}>Password</Text>
            <TextInput
              secureTextEntry={pShow ? false : true}
              placeholder="123123"
              placeholderTextColor={'#000'}
              style={styles.emailInput}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setPShow(!pShow);
            }}>
            {pShow == true ? <Show /> : <Hide />}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            marginRight: 30,
            marginTop: 10,
          }}>
          <Text
            style={{
              color: '#FFF',
            }}>
            Forget Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LoginB}>
          <LinearGradient
            colors={['#FF00FF', '#00FFFF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.Gradient}>
            <Text style={styles.ButtenT}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.Linet}>
          <Lines />
          <Text
            style={[
              styles.Text1,
              {marginTop: 0, marginHorizontal: 0, fontFamily: 'Outfit-Regular'},
            ]}>
            Continue With
          </Text>
          <Lines />
        </View>
        <View>
          <TouchableOpacity style={styles.googlT}>
            <Gooogle />
            <Text
              style={{
                color: '#000',
                fontFamily: 'Outfit-Regular',
                fontSize: 18,
              }}>
              Google
            </Text>
            <View
              style={{
                width: 10,
              }}></View>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{
            backgroundColor:""
          }}>
            <Facebook/>
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#120030',
    flex: 1,
  },

  Text: {
    color: '#FFF',
    fontFamily: 'Outfit-SemiBold',
    fontSize: 30,
    textAlign: 'center',
  },
  Text1: {
    color: '#FFF',
    fontFamily: 'Outfit-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 25,
    marginTop: 5,
  },
  emailC: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 100,
    width: width * 0.9,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginVertical: 10,
  },
  inputpic: {
    backgroundColor: 'rgba(242, 174, 225,0.5)',
    padding: 8,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
  },
  inputtitleC: {
    width: width * 0.72,
  },
  inputPC: {
    width: width * 0.6,
  },
  inputtitle: {
    color: '#5C5C5C',
    fontSize: 14,
  },
  emailInput: {
    backgroundColor: '#FFF',
    padding: 0,
    fontSize: 16,
    borderRadius: 50,
  },
  LoginB: {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 50,
  },
  Gradient: {
    padding: 15,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    width: width * 0.8,
  },
  ButtenT: {
    color: '#FFF',
    fontFamily: 'Outfit-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  Linet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: height * 0.1,
  },
  googlT: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.4,
    padding: 10,
    borderRadius: 50,
  },
});

export default Login;