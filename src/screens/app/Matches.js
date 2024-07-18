// import {View, Text, SafeAreaView, Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
// import React, { useState } from 'react';

// const Matches = () => {
//   const [selected, setSelected] = useState('both');
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: '#120030',
//       }}>
//       <View
//         style={{
//           flex: 1,
//         }}>
//         <Text
//           style={{
//             color: '#FFF',
//             fontSize: 20,
//             fontFamily: 'Outfit-Regular',
//             textAlign: 'center',
//             marginTop: 50,
//           }}>
//           Sparkle
//         </Text>
//         <Text
//           style={{
//             color: '#FFF',
//             fontSize: 25,
//             fontFamily: 'Outfit-SemiBold',
//             textAlign: 'center',marginTop:20
           
//           }}>
//           Find your best match
//         </Text>
//             <Text
//               style={{
//                 color: '#FFF',
//                 fontSize: 20,
//                 fontFamily: 'Outfit-Regular',
//                 textAlign: 'center',
//                 marginTop: 20,width:width*0.6,alignSelf:"center"
//               }}>
//               Find Your Spark: Where
//               Connections Ignite
//             </Text>
//             <View style={{
//               alignItems:"center",marginVertical:40
//             }}>
//               <Image source={require("../../assets/Images/Icons/Mat.png")}
//               style={{resizeMode:"contain"}}
//               />
//             </View>
//             <View style={styles.container}>
//       <TouchableOpacity
//         style={[styles.option, selected === 'boys' && styles.selectedOption]}
//         onPress={() => setSelected('boys')}
//       >
//         <Text style={[styles.optionText, selected === 'boys' && styles.selectedText]}>BOYS</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.option, selected === 'both' && styles.selectedOption]}
//         onPress={() => setSelected('both')}
//       >
//         <Text style={[styles.optionText, selected === 'both' && styles.selectedText]}>BOTH</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.option, selected === 'girls' && styles.selectedOption]}
//         onPress={() => setSelected('girls')}
//       >
//         <Text style={[styles.optionText, selected === 'girls' && styles.selectedText]}>GIRLS</Text>
//       </TouchableOpacity>
//     </View>
//     <TouchableOpacity style={[styles.container,{
//       alignItems:"center",justifyContent:"center",marginVertical:20
//     }]}>
//       <Text style={{
//         color:"#D7138F",fontSize:20,padding:10
//       }}>
//         START MATCHING
//       </Text>
//     </TouchableOpacity>
    
//       </View>
//     </SafeAreaView>
//   );
// };
// const {width,height}=Dimensions.get("window")
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#F9E8E8', // light pink background
//     borderRadius: 10,
//     padding: 5,width:width*0.9,alignSelf:"center"
//   },
//   option: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderRadius: 10,
//   },
//   selectedOption: {
//     backgroundColor: '#FF0090', // pink color for selected option
//   },
//   optionText: {
//     color: '#000', // black color for unselected text
//     fontWeight: 'bold',
//   },
//   selectedText: {
//     color: '#FFF', // white color for selected text
//   },
// });
// export default Matches;
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
import {
  Alert,
  Coin,
  Crown,
  For_Story,
  Random,
  Right_Arrow,
  Store,
  Video_C,
} from '../../assets/Images';
import {Explore, TopUsers} from '../../Dummy';

const Matches = ({navigation}) => {
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
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate("Story_Added")
          }}
            style={{
              backgroundColor: '#F94C84',
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: width * 0.9,
              borderRadius: 10,
              alignSelf: 'center',
            }}>
            <For_Story />
            <Text
              style={{
                color: '#FFF',
                fontSize: 20,
                fontFamily: 'Outfit-SeimBold',
                marginLeft: 20,
              }}>
              Add Story
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              marginVertical: 30,
            }}>
            <Image
              source={require('../../assets/Images/PNG/Below_Story.png')}
            />
          </View>
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate("Selection",{data:"Chat"})
          }}
            style={{
              backgroundColor: '#282828',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              width: width * 0.9,
              borderRadius: 10,
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Random />
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 18,
                  fontFamily: 'Outfit-Regular',
                  marginLeft: 30,
                }}>
                Random Chat
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(217,217,217,0.3)',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                width: 30,
              }}>
              <Right_Arrow />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate("Selection",{data:"Video"})
          }}
            style={{
              backgroundColor: '#282828',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              width: width * 0.9,
              borderRadius: 10,
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Video_C />
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 18,
                  fontFamily: 'Outfit-Regular',
                  marginLeft: 30,
                }}>
                Video Call
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(217,217,217,0.3)',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                width: 30,
              }}>
              <Right_Arrow />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#282828',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              width: width * 0.9,
              borderRadius: 10,
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Store />
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 18,
                  fontFamily: 'Outfit-Regular',
                  marginLeft: 30,
                }}>
                Store
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(217,217,217,0.3)',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                width: 30,
              }}>
              <Right_Arrow />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.8,
              alignSelf: 'center',marginVertical:20
            }}>
            <Alert />
            <View
              style={{
                width: width * 0.7,
              }}>
              <Text
                style={{
                  color: '#FFF',
                  textAlign: 'justify',
                }}>
                Any kind of content which promotes nudity, smoking, alcohol is
                not allowed. Streaming this kind of content might result to a
                permanent account ban.
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  textAlign: 'justify',
                  marginTop: 10,
                }}>
                Viewers must be 18 or older to recharge and send gifts.
              </Text>
            </View>
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

export default Matches;
