import {Text, View, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Location = ({email, phoneNumber, location}) => {
  return (
    <View
      style={{
        flex: 2,
        flexGrow: 3.5,
        backgroundColor: '#D3D3D3',
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
        <View style={{flex: 1}}>
          <Text>
            <Icon name="location-arrow" size={30} color="#900" />
          </Text>
        </View>
        <View style={{flex: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>Location</Text>
          <Text style={{color: 'blue', fontSize: 16}}>{location}</Text>
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
          <Text style={{fontWeight: 'bold', fontSize: 25}}>Call Us</Text>
          <Text style={{color: 'blue', fontSize: 16}}>{phoneNumber}</Text>
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
          <Text style={{fontWeight: 'bold', fontSize: 25}}>Mail Us</Text>
          <Text style={{color: 'blue', fontSize: 16}}>{email}</Text>
        </View>
      </View>
    </View>
  );
};
export default Location;
