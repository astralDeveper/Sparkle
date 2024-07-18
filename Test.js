import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const Tesxt = () => {
  const scrollViewRef = useRef();

  const scrollToSection = (section) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: section,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => scrollToSection(0)} style={styles.navButton}>
          <Text>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection(400)} style={styles.navButton}>
          <Text>People</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection(800)} style={styles.navButton}>
          <Text>Request</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} ref={scrollViewRef} horizontal={true} style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionText}>Chat Section</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>People Section</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>Request Section</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#333',
  },
  navButton: {
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    width: 400, // Adjust the width of each section as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 24,
  },
});

export default Tesxt;
