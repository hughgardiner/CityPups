import React from 'react';
import { View } from 'react-native';

export default Container = (props) => {
  return (
    <View style={{flex: 1, ...props.style}}>{props.children}</View>
  );
}