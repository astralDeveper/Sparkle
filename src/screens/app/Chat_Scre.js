import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useRef} from 'react';
import {
  Add_Fri,
  Em,
  Exit,
  Left_Arrow,
  Orange_Gift,
  Send,
} from '../../assets/Images';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Gifts} from '../../Dummy';

const Chat_Scre = ({navigation}) => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#120030',
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
            backgroundColor: '#1A043F',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Matches');
            }}>
            <Left_Arrow />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              width: width * 0.5,
            }}>
            <Image
              source={require('../../assets/Images/Icons/Ma2.png')}
              style={{
                height: 50,
                width: 50,
                borderRadius: 500,
              }}
            />
            <View
              style={{
                marginLeft: 20,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  color: '#FFF',
                  fontSize: 20,
                  fontFamily: 'Outfit-Medium',
                  width: width * 0.4,
                }}>
                Chirag Wa
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  color: '#04F504',
                  fontSize: 18,
                  fontFamily: 'Outfit-Medium',
                  width: width * 0.4,
                }}>
                Online
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
            }}>
            <Add_Fri />
            <Text style={{color: '#FFF', fontSize: 10}}>Add Friend</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Matches');
            }}
            style={{
              alignItems: 'center',
            }}>
            <Exit />
            <Text style={{color: '#FFF', fontSize: 10}}>Exit</Text>
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={['#FF00FF', '#00FFFF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{
            padding: 10,
            alignItems: 'center',
            borderRadius: 10,
            width: width * 0.25,
            alignSelf: 'center',
            marginVertical: 20,
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            TODAY
          </Text>
        </LinearGradient>
        <View
          style={{
            backgroundColor: '#9416DA',
            padding: 10,
            borderRadius: 10,
            alignSelf: 'flex-end',
            margin: 10,
          }}>
          <Text style={{color: '#FFF', fontSize: 15, width: width * 0.7}}>
            Hey, did you get a chance to see new Figr Websites
          </Text>
        </View>
        <Text
          style={{
            color: '#FFF',
            alignSelf: 'center',
          }}>
          17:07
        </Text>
        <View
          style={{
            backgroundColor: '#D7138F',
            padding: 10,
            borderRadius: 10,
            alignSelf: 'flex-start',
            margin: 10,
          }}>
          <Text style={{color: '#FFF', fontSize: 15, width: width * 0.4}}>
            Nope, I'll take a look
          </Text>
        </View>
        <View></View>
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: width * 0.95,
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: width * 0.8,
              backgroundColor: '#353535',
              borderRadius: 100,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 5,
            }}>
            <Em />
            <TextInput
              placeholder="Add caption"
              placeholderTextColor={'#8e8e8e'}
              style={{
                // backgroundColor: "#FFF",
                padding: 0,
                width: width * 0.55,
                height: height * 0.05,
                color: '#FFF',
              }}
            />
            <TouchableOpacity>
              <Send />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={{
              height: 40,
              width: 40,
              backgroundColor: '#FFF',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
            }}>
            <Orange_Gift />
          </TouchableOpacity>
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        draggable={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 50, // Adjust the radius as needed
            borderTopRightRadius: 50,
            height: '50%',
          },
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
            width: '25%',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <FlatList
          data={Gifts}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(102, 62, 60, 0.6)',
                  padding: 20,
                  borderRadius: 10,
                  marginVertical: 10,
                }}>
                <Image
                  source={item.pic}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.gem}
                    style={{
                      height: 15,
                      width: 15,
                    }}
                  />
                  <Text style={{color: '#FFF', marginLeft: 5}}>
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </RBSheet>
    </SafeAreaView>
  );
};
const {height, width} = Dimensions.get('screen');
export default Chat_Scre;
