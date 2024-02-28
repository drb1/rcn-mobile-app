import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MembershipScreen} from '../screens/MembershipScreen';
import {NewsScreen} from '../screens/NewsScreen';
import {DonateScreen} from '../screens/DonateScreen';
import HomeScreen from '../screens/HomepageScreen';
import DetailsScreen from '../screens/NewsDetailsScreen';
import Header from '../components/Header';
import {BottomTab} from './BottomTabNavigation';
import {Image} from 'react-native';
import { OthersScreen } from '../screens/OthersScreen';

const Stack = createNativeStackNavigator();
const RightComponent = () => {
  return (
    <>
      <Image
        source={require('../assests/rcn-logo-red.webp')}
        style={{height: 50, width: 50}}
        alt="logo image"
      />
    </>
  );
};
export function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Home" component={BottomTab} />
      {/* <Stack.Screen name="Membership" component={MembershipScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="Donate" component={DonateScreen} />
      <Stack.Screen name="Others" component={OthersScreen} /> */}
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerShown: true,
          headerRight: () => (
            <RightComponent/>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
