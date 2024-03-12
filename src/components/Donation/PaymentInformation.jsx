import {Text, View} from 'react-native';
import Headingtext from '../ScreenHeadline';

const Paymentinformation = () => {
  return (
    <View style={{flexGrow: 1}}>
      <Text style={{fontWeight: 'bold', fontSize: 25, padding: 20}}>
        Payment Steps
      </Text>
      <View style={{padding: 10,gap:12}}>
        <Text>
          1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
          placeat.
        </Text>
        <Text>
          1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
          placeat.
        </Text>
        <Text>
          1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
          placeat.
        </Text>
        <Text>
          1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
          placeat.
        </Text>
      </View>
    </View>
  );
};
export default Paymentinformation;
