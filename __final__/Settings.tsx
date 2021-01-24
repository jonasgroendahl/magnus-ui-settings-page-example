import {Dimensions, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {
  Div,
  Dropdown,
  DropdownRef,
  Input,
  Text,
  Toggle,
} from 'react-native-magnus';
import ListItem from './ListItem';
import Typography from './Typography';
import React, {useRef, useState} from 'react';

const Settings: React.FC = () => {
  const dropdownRef = useRef<DropdownRef | null>(null);
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    gender: 'male',
    isCool: true,
  });

  return (
    <SafeAreaView style={styles.safe}>
      <Div px={'lg'} mt={10}>
        <Text fontWeight="bold" fontSize="4xl" mt="md" mb={'lg'}>
          Settings
        </Text>
        <ListItem
          title="Firstname"
          icon="user"
          right={
            <TextInput
              placeholder="John"
              style={{width: Dimensions.get('screen').width / 2}}
            />
          }
        />
        <ListItem
          title="Lastname"
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
          onPress={() => dropdownRef.current?.open()}
          right={<Typography>Male</Typography>}
        />
        <ListItem
          title="Cool?"
          icon="meh"
          right={
            <Toggle
              bg="gray200"
              circleBg="blue500"
              activeBg="blue700"
              h={30}
              w={60}
              on={form.isCool}
              onPress={() =>
                setForm((prev) => ({...prev, isCool: !prev.isCool}))
              }
            />
          }
        />
      </Div>
      <Dropdown
        ref={dropdownRef}
        title={
          <Typography mx="xl" color="gray500" pb="md">
            Make a selection
          </Typography>
        }
        mt="md"
        pb="2xl"
        showSwipeIndicator={true}
        roundedTop="xl">
        <Dropdown.Option value={'male'} py="md" px="xl" block>
          Male
        </Dropdown.Option>
        <Dropdown.Option value={'female'} py="md" px="xl" block>
          Female
        </Dropdown.Option>
        <Dropdown.Option value={'null'} py="md" px="xl" block>
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
