import React, {useRef, useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {
  Button,
  Div,
  Dropdown,
  DropdownRef,
  Text,
  Toggle,
} from 'react-native-magnus';
import ListItem from './ListItem';

const Settings: React.FC = () => {
  const ref = useRef<DropdownRef | null>(null);
  const [on, setOn] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.safe}>
      <Div
        px={'lg'}
        mt={10}
        row
        mb={20}
        justifyContent="space-between"
        alignItems="center">
        <Text fontSize="4xl">Settings</Text>
        <Button bg="transparent" color="blue500">
          Save
        </Button>
      </Div>
      <ListItem
        title="First name"
        icon="user"
        right={
          <TextInput
            placeholder="John"
            style={{width: Dimensions.get('screen').width / 2}}
          />
        }
      />
      <ListItem
        title="Last name"
        icon="user"
        right={
          <TextInput
            placeholder="Doe"
            style={{width: Dimensions.get('screen').width / 2}}
          />
        }
      />
      <ListItem
        title="Gender"
        icon="heart"
        right={<Text>Male</Text>}
        onPress={() => {
          ref.current?.open();
        }}
      />
      <ListItem
        title="Cool"
        icon="meh"
        right={
          <Toggle
            on={on}
            onPress={() => setOn(!on)}
            bg="gray200"
            circleBg="blue500"
            activeBg="orange500"
          />
        }
      />
      <Dropdown
        ref={ref}
        title={
          <Text mx="xl" pb="md" fontSize="xl">
            Select gender
          </Text>
        }
        showSwipeIndicator={true}
        roundedTop="xl"
        pb="2xl"
        mt="md">
        <Dropdown.Option py="md" px="xl" value="male" block>
          Male
        </Dropdown.Option>
        <Dropdown.Option py="md" px="xl" value="female" block>
          Female
        </Dropdown.Option>
        <Dropdown.Option py="md" px="xl" value="notlisted" block>
          Not listed
        </Dropdown.Option>
      </Dropdown>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});

export default Settings;
