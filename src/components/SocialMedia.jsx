import {Linking, Text, View} from 'react-native';
import Headingtext from './ScreenHeadline';
import Icon from 'react-native-vector-icons/AntDesign';
import TiktokIcon from 'react-native-vector-icons/MaterialIcons';

const SocialMedia = () => {
  return (
    <View style={{flex:1,flexGrow:1}}>
      <Headingtext heading={'Let us connect'} />
      <View
        style={{
          backgroundColor: 'gray',
          borderRadius: 10,
          margin: 20,
        }}>
        <View
          onPress={() => {
            Linking.openURL('tel:119');
          }}
          style={{
            flexDirection: 'row',
            gap: 10,
            padding: 20,
            alignItems: 'center',
          }}>
          <View style={{flex: 1,flexDirection:'row',gap:20,alignItems:'center',justifyContent:'center'}}>
            <Text>
              <Icon name="twitter" size={30} color="#900" />
            </Text>
            <Text>
              <Icon name="facebook-square" size={30} color="#900" />
            </Text>
            <Text>
              <Icon name="instagram" size={30} color="#900" />
            </Text>
            <Text>
              <TiktokIcon name="tiktok" size={30} color="#900" />
            </Text>
            <Text>
              <Icon name="youtube" size={30} color="#900" />
            </Text>
          </View>
         
        </View>
      </View>
    </View>
  );
};

export default SocialMedia;
