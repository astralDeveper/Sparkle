import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';

// Images
import Back from '../../assets/Images/PNG/Welcome.png';
import LinearGradient from 'react-native-linear-gradient';
import Atrat, {
  Callen,
  Down_Arrow,
  Facebook,
  Female,
  Gend,
  Gooogle,
  Hide,
  Insta,
  Lines,
  Male,
  Pass,
  Show,
  Up_Arrow,
} from '../../assets/Images';
import DatePicker from 'react-native-date-picker';

const Register = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectGender = gender => {
    setSelectedGender(gender);
    setModalVisible(false);
  };
  const [pShow, setPShow] = useState(false);
  const handlePress = () => {
    Keyboard.dismiss();
    // setModalVisible(true);
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateVisible, setdateVisible] = useState(false);

  const handleSelectDate = date => {
    setSelectedDate(date);
  };
  const Datepress = () => {
    Keyboard.dismiss();
    setdateVisible(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: height * 0.1,
          marginBottom: height * 0.05,
        }}>
        <Text style={styles.Text}>Make Your Account!</Text>
        <Text style={styles.Text1}>Register to start your journey</Text>
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
        <View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setModalVisible(true);
              handlePress();
            }}
            style={[
              styles.emailC,
              {
                borderBottomLeftRadius: modalVisible ? 0 : 100,
                borderBottomRightRadius: modalVisible ? 0 : 100,
                borderRadius: modalVisible ? 10 : 100,
              },
            ]}>
            <View style={styles.inputpic}>
              <Gend />
            </View>
            <View style={[styles.inputPC]}>
              <Text style={styles.inputtitle}>Gender</Text>
              <TextInput
                placeholder="Male"
                placeholderTextColor={'#000'}
                editable={false}
                value={selectedGender}
                pointerEvents="none"
                style={styles.emailInput}
              />
            </View>
            <TouchableOpacity>
              {modalVisible ? <Up_Arrow /> : <Down_Arrow />}
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              Datepress();
            }}
            style={styles.emailC}>
            <View style={styles.inputpic}>
              <Callen />
            </View>
            <View style={styles.inputPC}>
              <Text style={styles.inputtitle}>Birthday</Text>
              <TextInput
                placeholderTextColor={'#000'}
                style={styles.emailInput}
                placeholder="Select Date"
                value={selectedDate.toDateString()}
                editable={false}
                pointerEvents="none"
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setPShow(!pShow);
              }}>
              <Down_Arrow />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("BottomTabs")
          }} style={styles.LoginB}>
          <LinearGradient
            colors={['#FF00FF', '#00FFFF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.Gradient}>
            <Text style={styles.ButtenT}>Register</Text>
          </LinearGradient>
        </TouchableOpacity>
          {modalVisible && (
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelectGender('Male')}>
                  <Male />
                  <Text style={styles.optionText}>Male</Text>
                  <View style={{width: 10}}></View>
                </TouchableOpacity>
                <View
                  style={{
                    height: 2,
                    width: width * 0.8,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    alignSelf: 'center',
                    borderRadius: 100,
                  }}></View>
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelectGender('Female')}>
                  <Female />
                  <Text style={styles.optionText}>Female</Text>
                  <View style={{width: 10}}></View>
                </TouchableOpacity>
              </View>
            </View>
          )}
          <Modal transparent={true} visible={dateVisible} animationType="slide">
            <View style={styles.modalBackground2}>
              <View style={styles.modalContainer2}>
                <DatePicker
                  date={selectedDate}
                  onDateChange={handleSelectDate}
                  mode="date"
                />
                <TouchableOpacity
                  style={styles.option2}
                  onPress={() => setdateVisible(false)}>
                  <Text style={styles.optionText2}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

                </View>
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginVertical: 10,
          }}>
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
          <TouchableOpacity
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
            navigation.navigate('Login');
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
            Already have an account?{' '}
            <Text
              style={{
                color: '#E00A9E',
              }}>
              Login Now
            </Text>
          </Text>
        </TouchableOpacity>
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
    color: '#000',
  },
  LoginB: {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 10,
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
    marginTop: height * 0.04,
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
  modalBackground: {
    // flex: 1,
    // justifyContent: 'center',
    position: 'absolute',
    marginTop: height * 0.08,
    alignSelf: 'center',
    width: width * 0.9,
  },
  modalContainer: {
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  option: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.9,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 18,
    color: '#000',
  },
  modalBackground2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer2: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  option2: {
    paddingVertical: 10,
  },
  optionText2: {
    fontSize: 18,
    color: '#000',
  },
});

export default Register;
