import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {Image} from 'react-native';
import Video from 'react-native-video';
import {Crown, Em, Left_Arrow, Play, Send} from '../../assets/Images';
import {Videos} from '../../Dummy';
import LinearGradient from 'react-native-linear-gradient';

const Story_Added = ({navigation, route}) => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handleVideoPress = () => {
    setPlayingIndex(!playingIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
            style={styles.backButton}>
            <Left_Arrow />
          </TouchableOpacity>
          <Text style={styles.feedText}>Add Story</Text>
          <View style={{width: 20}}></View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => handleVideoPress()}>
            <Video
              source={require('../../assets/Video/Toshow.mp4')}
              resizeMode="stretch"
              paused={playingIndex}
              style={styles.video}
            />
          </TouchableOpacity>
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
                            Gallery
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
                            <Text style={styles.buttonText}>Camera</Text>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              width: width * 0.9,
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
                width: width * 0.65,
                color: '#FFF',
              }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Send />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120030',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  backButton: {
    backgroundColor: 'rgba(217,217,217,0.5)',
    height: 30,
    width: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Outfit-SemiBold',
  },
  popularContainer: {
    borderBottomWidth: 2,
    borderColor: '#F03197',
    width: width * 0.2,
    marginLeft: 20,
    marginTop: 20,
  },
  popularText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
  },
  profileContainer: {
    flexDirection: 'row',
    width: width * 0.45,
    justifyContent: 'space-between',
    margin: 20,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileName: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Outfit-SemiBold',
  },
  profileTime: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
  },
  video: {
    height: height * 0.25,
    width: width * 0.9,
    borderRadius: 20,
    alignSelf: 'center',
  },buttonContainer: {
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

export default Story_Added;
