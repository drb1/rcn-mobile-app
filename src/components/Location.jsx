import {Text, View, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Location = () => {
  return (
    <View
      style={{
        flex: 2,
        flexGrow: 4,
        backgroundColor: 'gray',
        borderRadius: 10,
        margin: 20,
      }}>
      <View
      onPress={()=>{Linking.openURL('tel:119');}}
        style={{
          flexDirection: 'row',
          gap: 10,
          padding: 20,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text>
            <Icon name="location-arrow" size={30} color="#900" />
          </Text>
        </View>
        <View style={{flex: 5}}>
          <Text style={{fontWeight: 'bold'}}>Location</Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
            dolores!
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          padding: 20,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text>
            <Icon name="phone-alt" size={30} color="#900" />
          </Text>
        </View>
        <View style={{flex: 5}}>
          <Text style={{fontWeight: 'bold'}}>Call Us</Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
            dolores!
          </Text>
        </View>
      </View>
      <View
        onPress={() => Linking.openURL('mailto:support@example.com')}
        style={{
          flexDirection: 'row',
          gap: 10,
          padding: 20,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text>
            <Icon name="mail-bulk" size={30} color="#900" />
          </Text>
        </View>
        <View style={{flex: 5}}>
          <Text style={{fontWeight: 'bold'}}>Mail Us</Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
            dolores!
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Location;
