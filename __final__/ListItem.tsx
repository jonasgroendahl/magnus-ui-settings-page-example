import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Div, Icon} from 'react-native-magnus';
import Typography from './Typography';

type Props = {
  title: string;
  right?: JSX.Element;
  icon: string;
  onPress?: () => void;
};

const ListItem: React.FC<Props> = ({title, icon, right, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <Div
        row
        alignItems="center"
        px={16}
        py={10}
        borderBottomWidth={1}
        borderColor={'#eee'}>
        {icon && (
          <Div mr={15}>
            <Icon name={icon} fontSize={20} fontFamily="Feather" />
          </Div>
        )}
        <Div flex={1}>
          <Typography variant="lg">{title}</Typography>
        </Div>
        {right && <Div>{right}</Div>}
      </Div>
    </TouchableOpacity>
  );
};

export default ListItem;
