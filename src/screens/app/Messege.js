import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import {Add_Fri, Mag, People, Random} from '../../assets/Images';
import {Chat_Data, Freiend, Request} from '../../Dummy';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Messege = ({navigation}) => {
  const scrollViewRef = useRef();
  const [currentScreen, setCurrentScreen] = useState(0);

  const scrollToSection = sectionIndex => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: sectionIndex * 400,
        animated: true,
      });
      setCurrentScreen(sectionIndex);
    }
  };

  const handleMomentumScrollEnd = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const sectionIndex = Math.round(offsetX / 400);
    setCurrentScreen(sectionIndex);
  };

  const getHeaderText = () => {
    if (currentScreen === 0) {
      return 'Chat';
    } else if (currentScreen === 1) {
      return 'Friends';
    } else if (currentScreen === 2) {
      return 'Friends Request';
    }
    return '';
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>{getHeaderText()}</Text>
      </View>
      <View style={styles.navigation}>
        <TouchableOpacity
          onPress={() => scrollToSection(0)}
          style={styles.navButton}>
          <Random />
          <Text style={styles.navButtonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => scrollToSection(1)}
          style={styles.navButton}>
          <People />
          <Text style={styles.navButtonText}>People</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => scrollToSection(2)}
          style={styles.navButton}>
          <Add_Fri />
          <Text style={styles.navButtonText}>Request</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#FFF',
          alignItems: 'center',
          padding: 10,
          width: width * 0.9,
          borderRadius: 100,
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}>
        <Mag />
        <TextInput
          placeholder="Search"
          placeholderTextColor={'#8e8e8e'}
          style={{
            padding: 2,
            width: width * 0.75,
            color: '#000',
            fontSize: 18,
            fontFamily: 'Outfit-Regular',
          }}
        />
      </View>
      <ScrollView
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        horizontal={true}
        style={styles.scrollView}
        onMomentumScrollEnd={handleMomentumScrollEnd}>
        <View style={[styles.section, {width: width}]}>
          <ScrollView>
            <FlatList
              contentContainerStyle={{
                marginTop: 30,
              }}
              data={Chat_Data}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Chat_Scre');
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: width * 0.85,
                      alignSelf: 'center',
                      marginVertical: 10,
                      backgroundColor: '#343434',
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={item.pic}
                        style={{height: 50, width: 50, borderRadius: 100}}
                      />
                      <View
                        style={{
                          width: width * 0.5,
                          marginLeft: 25,
                        }}>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          style={{
                            color: '#FFF',
                            fontSize: 18,
                            fontFamily: 'Outfit-Regular',
                          }}>
                          {item.Name}
                        </Text>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          style={{
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: 15,
                            fontFamily: 'Outfit-Regular',
                          }}>
                          {item.Last_M}
                        </Text>
                      </View>
                    </View>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: 13,
                        fontFamily: 'Outfit-Light',
                      }}>
                      {item.time}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
        </View>
        <View
          style={[
            styles.section,
            {
              width: width * 1.1,
              alignItems: 'center',
              paddingLeft:width*0.06
              
            },
          ]}>
          <ScrollView>
            <View
              style={{
                width: width * 1.1,
                alignItems: 'center',
              }}>
              <FlatList
                contentContainerStyle={{
                  marginTop: 30,
                  alignItems: 'center',
                  width: width * 1.1,
                }}
                data={Freiend}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: width * 0.85,
                        alignSelf: 'center',
                        marginVertical: 10,
                        backgroundColor: '#343434',
                        padding: 10,
                        borderRadius: 10,
                      }}>
                      <Image
                        source={item.pic}
                        style={{height: 30, width: 30, borderRadius: 100}}
                      />
                      <View
                        style={{
                          width: width * 0.65,
                        }}>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          style={{
                            color: '#FFF',
                            fontSize: 18,
                            fontFamily: 'Outfit-Regular',
                          }}>
                          {item.Name}
                        </Text>
                      </View>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          color: 'rgba(255,255,255,0.8)',
                          fontSize: 13,
                          fontFamily: 'Outfit-Light',
                        }}>
                        {item.time}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.section}>
          <ScrollView>
            <FlatList
              contentContainerStyle={{
                marginTop: 30,
              }}
              data={Request}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      alignItems: 'center',
                      // justifyContent: 'space-between',
                      width: width * 0.85,
                      alignSelf: 'center',
                      marginVertical: 10,
                      backgroundColor: '#343434',
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: width * 0.8,
                      }}>
                      <Image
                        source={item.pic}
                        style={{height: 60, width: 60, borderRadius: 100}}
                      />
                      <View
                        style={{
                          width: width * 0.6,
                        }}>
                        <Text
                          numberOfLines={2}
                          ellipsizeMode="tail"
                          style={{
                            color: '#FFF',
                            fontSize: 15,
                            fontFamily: 'Outfit-Regular',
                          }}>
                          {item.name}{' '}
                          <Text
                            style={{
                              fontSize: 13,
                              fontFamily: 'Outfit-Light',
                            }}>
                            send you a friend request.
                          </Text>
                        </Text>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          style={{
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: 13,
                            fontFamily: 'Outfit-Light',
                          }}>
                          {item.time}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginVertical: 20,
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: width * 0.8,
                      }}>
                      <TouchableOpacity>
                        <LinearGradient
                          colors={['#E00A9E', '#8727F3']}
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 1}}
                          style={{
                            padding: 10,
                            alignItems: 'center',
                            borderRadius: 10,
                            width: width * 0.25,
                          }}>
                          <Text style={{color: '#FFF', fontSize: 18}}>
                            Confirm
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonContainer}>
                        <LinearGradient
                          colors={['#ff00ff', '#00ffff']} // Replace with your gradient colors
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 1}}
                          style={styles.gradientBorder}>
                          <View style={styles.button}>
                            <Text style={styles.buttonText}>Cancel</Text>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120030',
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'Outfit-Bold',
    color: '#FFF',
    alignSelf: 'center',
    margin: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  navButton: {
    padding: 10,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Outfit-Regular',
    marginTop: 5,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    width: width, // Adjust the width of each section as needed
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingRight: width * 0.06,
  },
  sectionText: {
    fontSize: 24,
    color: '#FFF',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientBorder: {
    padding: 2, // Border width
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#333333', // Button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Messege;
