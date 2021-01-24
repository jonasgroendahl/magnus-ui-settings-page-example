import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TextProps} from 'react-native-magnus';

interface Props extends TextProps {
  variant?: 'sm' | 'md' | 'lg' | '2xl';
}

const Typography: React.FC<Props> = ({
  variant = 'md',
  children,
  style,
  ...props
}) => {
  return (
    <Text fontSize={variant} style={style} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
