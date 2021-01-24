import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Div, Icon, Text} from 'react-native-magnus';

type Props = {
  title: string;
  right?: JSX.Element;
  icon: string;
  onPress?: () => void;
};

const ListItem: React.FC<Props> = ({title, right, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <Div
        row
        alignItems="center"
        px={16}
        py={10}
        borderBottomColor="#eee"
        borderBottomWidth={1}>
        <Div mr={15}>
          <Icon name={icon} fontSize={20} fontFamily="Feather" />
        </Div>
        <Div flex={1}>
          <Text fontSize="lg">{title}</Text>
        </Div>
        {right && <Div>{right}</Div>}
      </Div>
    </TouchableOpacity>
  );
};

export default ListItem;
