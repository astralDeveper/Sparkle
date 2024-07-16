import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Tilt_Bar, Whiteleft} from '../../assets/Images';
import LinearGradient from 'react-native-linear-gradient';
import {stroe} from '../../Dummy';

const Store = ({navigation}) => {
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
          <TouchableOpacity onPress={()=>{
            navigation.pop()
          }}>
            <Whiteleft />
          </TouchableOpacity>
          <Text
            style={{
              color: '#FFF',
              fontSize: 20,
              fontFamily: 'Outfit-SemiBold',
            }}>
            Store
          </Text>
          <View style={{width: 10}}></View>
        </View>

        <LinearGradient
          colors={['#9A0D90', '#D82483']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{
            padding: 10,
            width: width * 0.9,
            alignSelf: 'center',
            borderRadius: 10,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 18,
              fontFamily: 'Outfit-Regular',
              marginBottom: 10,
            }}>
            My Gems
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../assets/Images/Icons/Diamond.png')} />
            <Text
              style={{
                color: '#FFF',
                fontSize: 18,
                fontFamily: 'Outfit-Regular',
                marginLeft: 20,
              }}>
              400
            </Text>
          </View>
        </LinearGradient>
        <View
          style={{
            backgroundColor: '#4B3C52',
            width: width * 0.9,
            alignSelf: 'center',
            marginTop: 10,
            borderRadius: 10,
          }}>
          <View>
            <Tilt_Bar />
            <Text
              style={{
                color: '#FFF',
                transform: [{rotate: '325deg'}],
                position: 'absolute',
                marginTop: height * 0.032,
                fontSize: 18,
                fontFamily: 'Outfit-Regular',
                marginLeft: width * 0.05,
              }}>
              10% OFF
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'absolute',
              marginTop: height * 0.08,
              width: width * 0.6,
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: width * 0.2,
              }}>
              <Image
                source={require('../../assets/Images/Icons/Tilt_Diam.png')}
              />
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 18,
                  fontFamily: 'Outfit-Regular',
                }}>
                X <Text style={{fontSize: 15}}>80</Text>
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: width * 0.15,
              }}>
              <LinearGradient
                colors={['#9A0D90', '#D82483']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={{
                  padding: 5,
                  width: width * 0.15,
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 18,
                    fontFamily: 'Outfit-Regular',
                  }}>
                  $ 10
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <LinearGradient
            colors={['#9A0D90', '#D82483']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{
              padding: 10,
              alignItems: 'center',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              marginTop: height * 0.04,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#FFF',
                fontFamily: 'Outfit-Regular',
              }}>
              Most Popular
            </Text>
          </LinearGradient>
        </View>
        <View>
          <FlatList
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',marginTop:20
            }}
            data={stroe}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#231C2C',
                    width: width * 0.4,
                    height: height * 0.2,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    paddingVertical: 10,
                    borderRadius: 20,marginBottom:20
                  }}>
                  <Image source={item.img} />
                  <Text
                    style={{
                      color: '#FFF',
                      fontSize: 18,
                      fontFamily: 'Outfit-Regular',
                    }}>
                    {item.quantity}
                  </Text>
                  <LinearGradient
                    colors={['#9A0D90', '#D82483']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={{
                      padding: 5,
                      width: width * 0.2,
                      alignItems: 'center',
                      borderRadius: 50,
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        fontSize: 18,
                        fontFamily: 'Outfit-Regular',
                      }}>
                      ${item.amount}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
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
});
export default Store;
