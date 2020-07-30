import React from 'react';

import {Input} from './styles';

const TextInput = ({testID, onChange, value, placeholder}) => {
  return (
    <Input
      testID={testID}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
