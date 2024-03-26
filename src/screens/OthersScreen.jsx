import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  Button,
  useColorScheme,
  ScrollView,
  Pressable,
  StyleSheet,
  Platform,
} from 'react-native';
import {Avatar, Divider, ListItem} from '@rneui/themed';
import {useState} from 'react';
import colors from '../lib/colors';
const list = [
  {
    name: 'Images',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'Videos',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
];
const members = [
  {
    name: 'Comittee Members',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    screen: 'Comittee',
  },
  {
    name: 'Executive Members',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    screen: 'Executive',
  },
];
export function OthersScreen() {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [expandedMembers, setExpandedMembers] = useState(false);
  const onPressList = (id, screen) => () => {
    navigation.navigate(screen, {id: id});
  };
  return (
    <ScrollView
      contentContainerStyle={
        Platform.OS === 'android' ? androidStyle.container : iosStyle.container
      }>
      <View style={{padding: 10}}>
        <Pressable onPress={onPressList('1', 'About')}>
          <ListItem containerStyle={{padding: 25}}>
            <ListItem.Content>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>About Us</Text>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </Pressable>
        <Divider />
        <Pressable onPress={onPressList('2', 'MissionVision')}>
          <ListItem containerStyle={{padding: 25}}>
            <ListItem.Content>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Mission And Vision</Text>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </Pressable>
        <Divider />
        <Pressable onPress={onPressList('1', 'Transparency')}>
          <ListItem containerStyle={{padding: 25}}>
            <ListItem.Content>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Transparency
              </Text>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </Pressable>
        <Divider />
        <Pressable onPress={onPressList('1', 'Download')}>
          <ListItem containerStyle={{padding: 25}}>
            <ListItem.Content>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Downloads</Text>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </Pressable>
        <Divider />
        <ListItem.Accordion
          containerStyle={{padding: 25}}
          content={
            <View style={{display: 'flex', flex: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Media Gallery
              </Text>
            </View>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}>
          {list.map((l, i) => (
            <Pressable key={i} onPress={onPressList(i, l.name)}>
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <Text style={{fontWeight: 'bold'}}>{l.name}</Text>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </Pressable>
          ))}
        </ListItem.Accordion>
        <Divider />
        <ListItem.Accordion
          containerStyle={{padding: 25}}
          content={
            <View style={{display: 'flex', flex: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Members</Text>
            </View>
          }
          isExpanded={expandedMembers}
          onPress={() => {
            setExpandedMembers(!expandedMembers);
          }}>
          {members.map((l, i) => (
            <Pressable key={i} onPress={onPressList(i, l.screen)}>
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <Text style={{fontWeight: 'bold'}}>{l.name}</Text>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </Pressable>
          ))}
        </ListItem.Accordion>
        <Divider />
        <Pressable onPress={onPressList('1', 'Feedback')}>
          <ListItem containerStyle={{padding: 25}}>
            <ListItem.Content>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Feedback</Text>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </Pressable>
        <Divider />
        <Pressable onPress={onPressList('1', 'Contact')}>
          <ListItem containerStyle={{padding: 25}}>
            <ListItem.Content>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Contact Us</Text>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </Pressable>
        <Divider />
        <Pressable onPress={onPressList('1', 'Privacy')}>
          <ListItem containerStyle={{padding: 25}}>
            <ListItem.Content>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Privacy Policy
              </Text>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const iosStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
  },
});
const androidStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
  },
});
