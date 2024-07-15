import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, Keyboard } from 'react-native';
import DatePicker from 'react-native-date-picker';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectDate = (date) => {
    setSelectedDate(date);

  };

  const handlePress = () => {
    Keyboard.dismiss();
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Date</Text>
      <TouchableOpacity onPress={handlePress}>
        <TextInput
          style={styles.input}
          placeholder="Select Date"
          value={selectedDate.toDateString()}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"

      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <DatePicker
              date={selectedDate}
              onDateChange={handleSelectDate}
              mode="date"
            />
            <TouchableOpacity
              style={styles.option}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.optionText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  option: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 18,
  },
});

export default DatePickerComponent;
