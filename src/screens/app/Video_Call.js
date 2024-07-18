import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useRef} from 'react';
import {
  Add_Fri,
  Coin,
  Em,
  Exit,
  Left_Arrow,
  Orange_Gift,
  Parti,
  Send,
} from '../../assets/Images';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Dummy, Gifts} from '../../Dummy';
import RBSheet from 'react-native-raw-bottom-sheet';

const Video_Call = ({navigation}) => {
  const refRBSheet = useRef();
  return (
    <ImageBackground
      source={require('../../assets/Images/PNG/Vido.png')}
      style={{
        flex: 1,
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
            margin: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width * 0.5,
            }}>
            <Image
              source={require('../../assets/Images/Icons/Ma1.png')}
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
              }}
            />
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                flexDirection: 'row',
                padding: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
                width: width * 0.25,
                borderRadius: 10,
              }}>
              <Coin />
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Outfit-Regular',
                  fontSize: 18,
                }}>
                2000
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                padding: 5,
                width: width * 0.2,
                borderRadius: 50,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 16,
                  fontFamily: 'Outfit-Light',
                }}>
                End
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            marginRight: 10,
          }}>
          <Parti />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            bottom: height * 0.1,
            height: height * 0.2,
          }}>
          <ScrollView style={{}}>
            <FlatList
              contentContainerStyle={
                {
                  // flex:1
                }
              }
              data={Dummy}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      width: width * 0.8,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',

                        marginVertical: 5,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        padding: 5,
                        borderRadius: 20,
                        marginLeft: 10,
                        alignSelf: 'flex-start',
                      }}>
                      <Image
                        source={item.img}
                        style={{
                          height: 30,
                          width: 30,
                          borderRadius: 50,
                        }}
                      />

                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          color: '#FFF',
                          fontSize: 15,
                          width: width * 0.25,

                          alignSelf: 'center',
                          textAlign: 'center',
                        }}>
                        {item.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          justifyContent: 'space-evenly',
                          padding: 3,
                          borderRadius: 20,
                          width: width * 0.1,
                        }}>
                        <Image
                          source={item.rate}
                          style={{
                            height: 10,
                            width: 10,
                          }}
                        />
                        <Text
                          style={{
                            color: '#FFF',
                            fontSize: 13,
                          }}>
                          {item.rating}
                        </Text>
                      </View>
                      <View
                        style={{
                          alignSelf: 'center',
                          justifyContent: 'center',
                          marginLeft: 10,
                          maxWidth: width * 0.3,
                        }}>
                        <Text style={{color: '#FFF', textAlign: 'center'}}>
                          {item.messege}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </ScrollView>
        </View>
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
              backgroundColor: 'rgba(0,0,0,0.6)',
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
    </ImageBackground>
  );
};
const {height, width} = Dimensions.get('screen');
export default Video_Call;
