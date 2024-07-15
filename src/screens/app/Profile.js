import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {
  BIg_Coin,
  Crown,
  Crown1,
  Dots,
  Edit,
  Help,
  Log,
  Prof,
  Redright,
  Sett,
  Whiteleft,
  Whiteright,
} from '../../assets/Images';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Profile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Prof />
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 30,
                  fontFamily: 'Outfit-Regular',
                  marginLeft: 20,
                }}>
                Profile
              </Text>
            </View>
            <TouchableOpacity>
              <Dots />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: width * 0.33,
              alignSelf: 'center',
              marginVertical: 20,
            }}>
            <Image
              source={require('../../assets/Images/Icons/Propic.png')}
              style={{
                height: height * 0.16,
                width: width * 0.325,
                borderRadius: 500,
                overflow: 'hidden',
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#9E25FE',
              width: width * 0.92,
              borderRadius: 20,
              justifyContent: 'space-between',
              padding: 10,
              alignSelf: 'center',
            }}>
            <View>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 20,
                  fontFamily: 'Outfit-SemiBold',
                }}>
                Enjoy All Benefits
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  width: width * 0.67,
                  marginVertical: 5,
                  fontFamily: 'Outfit-Regular',
                }}>
                Enjoy Unlimited video calls, Hide distance, Priority Matching
                without Ads.
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FFF',
                  padding: 5,
                  borderRadius: 100,
                  width: width * 0.3,
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: '#9E25FE',
                    fontSize: 18,
                    fontFamily: 'Outfit-Regular',
                  }}>
                  Get VIP
                </Text>
              </TouchableOpacity>
            </View>
            <Crown1 />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#3F3F3F',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width * 0.9,
              alignSelf: 'center',
              padding: 20,
              borderRadius: 20,
              marginVertical: 20,
            }}>
            <Text
              style={{
                color: '#DD527F',
                fontSize: 30,
                fontFamily: 'Outfit-Regular',
              }}>
              Balance
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <BIg_Coin />
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 30,
                  fontFamily: 'Outfit-Regular',
                  marginLeft: 20,
                }}>
                2000
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#3F3F3F',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width * 0.9,
              alignSelf: 'center',
              padding: 20,
              borderRadius: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/Images/Icons/BigD.png')} />
              <Text
                style={{
                  color: '#DD527F',
                  fontSize: 30,
                  fontFamily: 'Outfit-Regular',
                  marginLeft: 20,
                }}>
                Store
              </Text>
            </View>
            <Redright />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: width * 0.85,
              justifyContent: 'space-between',
              alignSelf: 'center',
              margin: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Sett />
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 20,
                  fontFamily: 'Outfit-Regular',
                  marginLeft: 20,
                }}>
                Settings
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <Whiteright />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: width * 0.85,
              justifyContent: 'space-between',
              alignSelf: 'center',
              margin: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Help />
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 20,
                  fontFamily: 'Outfit-Regular',
                  marginLeft: 20,
                }}>
                Help Center
              </Text>
            </View>
            <Whiteright />
          </View>
          <View
            style={{
              height: 2,
              width: width * 0.9,
              backgroundColor: '#FFF',
              marginBottom: 10,
              alignSelf: 'center',
            }}></View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Welcome');
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: width * 0.85,
              justifyContent: 'space-between',
              alignSelf: 'center',
              margin: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Log />
              <Text
                style={{
                  color: '#DA2D2D',
                  fontSize: 20,
                  fontFamily: 'Outfit-Regular',
                  marginLeft: 20,
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Modal transparent={true} visible={modalVisible} animationType="slide">
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                    <TouchableOpacity
                    onPress={()=>{
                        setModalVisible(false)
                      }}>

                <Whiteleft />
                    </TouchableOpacity>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 25,
                    fontFamily: 'Outfit-Bold',
                  }}>
                  Settings
                </Text>
                <View
                  style={{
                    width: 10,
                  }}></View>
              </View>
              <TouchableOpacity
                style={{
                  width: width * 0.25,
                  alignSelf: 'center',
                  marginVertical: 20,
                }}>
                <Image
                  source={require('../../assets/Images/Icons/Propic.png')}
                  style={{
                    height: height * 0.12,
                    width: width * 0.25,
                    borderRadius: 100,
                    overflow: 'hidden',
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    alignSelf: 'flex-end',
                  }}>
                  <Edit />
                </View>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 18,
                    fontFamily: 'Outfit-Regular',
                  }}>
                  Name
                </Text>
                <TextInput
                placeholder='William H.'
                placeholderTextColor={"#FFF"}
                  style={{
                    borderBottomWidth: 2,
                    borderColor: '#FFF',
                    color: '#FFF',
                    padding: 0,
                    fontSize: 18,
                    fontFamily: 'Outifit-Regular',
                  }}
                />
              </View>
              <View style={{
                marginTop:20
              }}>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 18,
                    fontFamily: 'Outfit-Regular',
                  }}>
                  Tagline
                </Text>
                <TextInput
                placeholder='I am a dancer for last 4 years'
                placeholderTextColor={"#FFF"}
                  style={{
                    borderBottomWidth: 2,
                    borderColor: '#FFF',
                    color: '#FFF',
                    padding: 0,
                    fontSize: 18,
                    fontFamily: 'Outifit-Regular',
                  }}
                />
              </View>
              <TouchableOpacity
              onPress={()=>{
                setModalVisible(false)
              }}
              style={{
                margin:20,width:width*0.25,alignSelf:"center"
              }} >
          <LinearGradient
            colors={['#FF00FF', '#00FFFF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{
                padding:10,alignItems:"center",borderRadius:10,width:width*0.25
            }}
            >
            <Text style={{color:"#FFF",fontSize:18}}>Update</Text>
          </LinearGradient>
        </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120030',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#110030',
    borderRadius: 10,
    padding: 20,
  },
  option: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 18,
  },
});

export default Profile;
