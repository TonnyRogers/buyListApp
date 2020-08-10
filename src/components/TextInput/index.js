import React from 'react';

import {Input} from './styles';

const TextInput = ({testID, onChange, value, placeholder, ...rest}) => {
  return (
    <Input
      testID={testID}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default TextInput;
