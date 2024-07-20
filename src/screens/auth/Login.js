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
import React, { useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';

// Images
import Back from '../../assets/Images/PNG/Welcome.png';
import LinearGradient from 'react-native-linear-gradient';
import Atrat, {
  Facebook,
  Gooogle,
  Hide,
  Insta,
  Lines,
  Pass,
  Show,
} from '../../assets/Images';

import { FacebookAuth, GoogleAuth } from '../../mocks/socialAuths';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';


const Login = ({ navigation }) => {

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
              placeholder="********"
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
          onPress={() => {
            navigation.navigate("FogetP")
          }}
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
        <TouchableOpacity onPress={() => {
          navigation.navigate("BottomTabs")
        }} style={styles.LoginB}>
          <LinearGradient
            colors={['#FF00FF', '#00FFFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.Gradient}>
            <Text style={styles.ButtenT}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.Linet}>
          <Lines />
          <Text
            style={[
              styles.Text1,
              { marginTop: 0, marginHorizontal: 0, fontFamily: 'Outfit-Regular' },
            ]}>
            Continue With
          </Text>
          <Lines />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginVertical: 10,
          }}>
          <TouchableOpacity style={styles.googlT}
            onPress={() =>
              GoogleAuth(true)
            }>
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
          <TouchableOpacity
          onPress={FacebookAuth}
            style={{
              backgroundColor: '#FFF',
              padding: 10,
              borderRadius: 50,
            }}>
            <Facebook />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFF',
              padding: 10,
              borderRadius: 50,
            }}>
            <Insta />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={{
            marginVertical: 30,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: '#FFF',
              fontFamily: 'Outfit-Regular',
            }}>
            Not a member?{' '}
            <Text
              style={{
                color: '#E00A9E',
              }}>
              Register Now
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const { height, width } = Dimensions.get('window');
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
    color: '#000',
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
