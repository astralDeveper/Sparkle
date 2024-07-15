import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Coin, Crown} from '../../assets/Images';
import {Explore, TopUsers} from '../../Dummy';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={{
            flex:1
        }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <View>
          <Image
            source={require('../../assets/Images/Icons/Pro.png')}
            style={{
              height: 50,
              width: 50,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: width * 0.25,
          }}>
          <Image
            source={require('../../assets/Images/Icons/Diamond.png')}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <Text
            style={{
              color: '#FFF',
              fontFamily: 'Outfit-Bold',
              width: width * 0.15,
            }}>
            30.5k
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: width * 0.25,
          }}>
          <Coin />
          <Text
            style={{
              color: '#FFF',
              fontFamily: 'Outfit-Bold',
              width: width * 0.15,
            }}>
            30.5k
          </Text>
        </View>
        <View>
          <Crown />
        </View>
      </View>
      <View>
        <Text
          style={{
            color: '#FFF',
            fontFamily: 'Outfit-Bold',
            fontSize: 20,
            marginLeft: 20,
          }}>
          Top Users
        </Text>
      </View>
      <View>
        <FlatList
        showsHorizontalScrollIndicator={false}
          horizontal
          data={TopUsers}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  borderWidth: 5,
                  height: 70,
                  width: 70,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#F72D6A',
                  margin: 10,
                }}>
                <Image
                  source={item.img}
                  style={{
                    height: 65,
                    width: 65,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View>
        <Text
          style={{
            color: '#FFF',
            fontFamily: 'Outfit-Bold',
            fontSize: 20,
            marginLeft: 20,
          }}>
          Explore
        </Text>
      </View>
      <View>
        <FlatList
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            margin: 10,
          }}
          data={Explore}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity>
                <ImageBackground
                  source={item.img}
                  style={{
                    height: height * 0.15,
                    width: width * 0.3,
                    borderRadius: 10,
                    overflow: 'hidden',
                    marginBottom: 10,
                  }}>
                  {item.Ell == true ? (
                    <View
                      style={{
                        margin: 10,
                        alignSelf: 'flex-end',
                      }}>
                      <Image source={item.Elli} />
                    </View>
                  ) : null}
                  <View style={{
                    position:"absolute",bottom:10
                  }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: '#FFF',
                        fontSize: 11,
                        width: width * 0.3,
                        fontFamily: 'Outfit-Regular',

                        textAlign: 'center',
                      }}>
                      {item.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        width: width * 0.28,
                        justifyContent: 'space-between',alignSelf:"center"
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 10,
                          fontFamily: 'Outfit-Regular',
                        }}>
                        {item.distance}
                      </Text>
                      {item.Gift == false ? (
                        <Image
                          source={item.flag}
                          style={{
                            height: 15,
                            width: 18,
                          }}
                        />
                      ) : (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: width * 0.08,
                          }}>
                          <Image
                            source={item.gift}
                            style={{
                              height: 15,
                              width: 15,
                            }}
                          />
                          <Text
                            style={{
                              color: '#FFF',
                              fontSize: 10,
                              fontFamily: 'Outfit-Regular',
                            }}>
                            {item.gN}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                </ImageBackground>
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

export default Dashboard;
