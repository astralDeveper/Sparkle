import {View, Text, SafeAreaView, Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

const Selection = ({navigation,route}) => {
  const [selected, setSelected] = useState('both');
const {data}=route.params
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
        <Text
          style={{
            color: '#FFF',
            fontSize: 20,
            fontFamily: 'Outfit-Regular',
            textAlign: 'center',
            marginTop: 50,
          }}>
          Sparkle
        </Text>
        <Text
          style={{
            color: '#FFF',
            fontSize: 25,
            fontFamily: 'Outfit-SemiBold',
            textAlign: 'center',marginTop:20
           
          }}>
          Find your best match
        </Text>
            <Text
              style={{
                color: '#FFF',
                fontSize: 20,
                fontFamily: 'Outfit-Regular',
                textAlign: 'center',
                marginTop: 20,width:width*0.6,alignSelf:"center"
              }}>
              Find Your Spark: Where
              Connections Ignite
            </Text>
            <View style={{
              alignItems:"center",marginVertical:40
            }}>
              <Image source={require("../../assets/Images/Icons/Mat.png")}
              style={{resizeMode:"contain"}}
              />
            </View>
            <View style={styles.container}>
      <TouchableOpacity
        style={[styles.option, selected === 'boys' && styles.selectedOption]}
        onPress={() => setSelected('boys')}
      >
        <Text style={[styles.optionText, selected === 'boys' && styles.selectedText]}>BOYS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, selected === 'both' && styles.selectedOption]}
        onPress={() => setSelected('both')}
      >
        <Text style={[styles.optionText, selected === 'both' && styles.selectedText]}>BOTH</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, selected === 'girls' && styles.selectedOption]}
        onPress={() => setSelected('girls')}
      >
        <Text style={[styles.optionText, selected === 'girls' && styles.selectedText]}>GIRLS</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={()=>{
        navigation.navigate("Connecting",{
          Alsodata:data
        })
    }} style={[styles.container,{
      alignItems:"center",justifyContent:"center",marginVertical:20
    }]}>
      <Text style={{
        color:"#D7138F",fontSize:20,padding:10
      }}>
        START MATCHING
      </Text>
    </TouchableOpacity>
    
      </View>
    </SafeAreaView>
  );
};
const {width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F9E8E8', // light pink background
    borderRadius: 10,
    padding: 5,width:width*0.9,alignSelf:"center"
  },
  option: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  selectedOption: {
    backgroundColor: '#FF0090', // pink color for selected option
  },
  optionText: {
    color: '#000', // black color for unselected text
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#FFF', // white color for selected text
  },
});
export default Selection;