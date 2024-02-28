import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Text, View, Button, useColorScheme, ScrollView} from 'react-native';
import {Avatar, Divider, ListItem} from '@rneui/themed';
import {useState} from 'react';
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
  },
  {
    name: 'Executive Members',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
];
export function OthersScreen() {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [expandedMembers, setExpandedMembers] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#fbe2e2',
      }}>
      <View style={{padding: 10}}>
        <ListItem>
          <ListItem.Content>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>About Us</Text>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItem.Content>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Transparency</Text>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItem.Content>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Downloads</Text>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <Divider />
        <ListItem.Accordion
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
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <Text style={{fontWeight: 'bold'}}>{l.name}</Text>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </ListItem.Accordion>
        <ListItem.Accordion
          content={
            <View style={{display: 'flex', flex: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Members
              </Text>
            </View>
          }
          isExpanded={expandedMembers}
          onPress={() => {
            setExpandedMembers(!expandedMembers);
          }}>
          {members.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <Text style={{fontWeight: 'bold'}}>{l.name}</Text>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </ListItem.Accordion>
        <ListItem>
          <ListItem.Content>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Feedback</Text>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Contact Us</Text>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Privacy Policy</Text>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
    </ScrollView>
  );
}
