import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Headingtext from '../ScreenHeadline';
import {useState} from 'react';
const {width, height} = Dimensions.get('window');

const Paymentmethod = () => {
  const [selected, setSelected] = useState();
  return (
    <View style={{flex: 1}}>
      <Headingtext heading={'Donate US'} />
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 25, padding: 20}}>
          Paymnet Method
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 20,

            padding: 10,
          }}>
          <View
            style={{
              width: width * 0.44,
              backgroundColor: '#D3D3D3',
            }}>
            <Image
              source={require('../../assests/esewa.png')}
              style={
                Platform.OS === 'ios' ? imageStyle.ios : imageStyle.android
              }
              alt="esewa image"
            />
          </View>
          <View
            style={{
              width: width * 0.44,
              backgroundColor: '#D3D3D3',
            }}>
            <Image
              source={require('../../assests/khalti.png')}
              style={
                Platform.OS === 'ios' ? imageStyle.ios : imageStyle.android
              }
              alt="esewa image"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const imageStyle = StyleSheet.create({
  ios: {
    height: height * 0.22,
    width: width * 0.4,
    margin: 10,
  },
  android: {
    height: height * 0.19,
    width: width * 0.4,
    margin: 10,
  },
});
export default Paymentmethod;
