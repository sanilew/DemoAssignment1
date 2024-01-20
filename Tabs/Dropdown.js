import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const placeholder = {
    label: 'Select Gender',
    value: null,
  };

  const options = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
 
  ];

  return (
    <View>
      <Text>Select an option:</Text>
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
      {selectedValue && <Text>Selected: {selectedValue}</Text>}
    </View>
  );
};

export default Dropdown;