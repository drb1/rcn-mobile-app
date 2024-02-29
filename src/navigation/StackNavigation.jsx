import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/NewsDetailsScreen';
import {BottomTab} from './BottomTabNavigation';
import {Image} from 'react-native';
import {AboutScreen} from '../screens/AboutScreen';
import {ComitteeScreen} from '../screens/ComitteeScreen';
import {ContactScreen} from '../screens/ContactScreen';
import {DownloadScreen} from '../screens/DownloadsScreen';
import {ExecutiveScreen} from '../screens/ExecutiveScreen';
import {FeedbackScreen} from '../screens/Feedback';
import {ImageScreen} from '../screens/ImageScreen';
import {VideoScreen} from '../screens/VideoScreen';
import {PrivacyScreen} from '../screens/PrivacyScreen';
import {TransparencyScreen} from '../screens/TransparencyScreen';

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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={BottomTab} />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerShown: true,
          headerRight: () => <RightComponent />,
        }}
      />
      <Stack.Screen
        name="Comittee"
        component={ComitteeScreen}
        options={{
          headerShown: true,
          headerRight: () => <RightComponent />,
        }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          headerShown: true,
          headerRight: () => <RightComponent />,
        }}
      />
      <Stack.Screen
        name="Download"
        component={DownloadScreen}
        options={{
          headerShown: true,
          headerRight: () => <RightComponent />,
        }}
      />
      <Stack.Screen
        name="Executive"
        component={ExecutiveScreen}
        options={{
          headerShown: true,
          headerRight: () => <RightComponent />,
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{
          headerShown: true,
          headerRight: () => <RightComponent />,
        }}
      />
      <Stack.Screen
        name="Images"
        component={ImageScreen}
        options={{
          headerShown: true,
          headerRight: () => <RightComponent />,
        }}
      />
      <Stack.Screen
        name="Videos"
        component={VideoScreen}
        options={{
          headerShown: true,
          headerRight: () => <RightComponent />,
        }}
      />
      <Stack.Screen
        name="Privacy"
        component={PrivacyScreen}
        options={{
          headerShown: true,
          headerRight: () => <RightComponent />,
        }}
      />
      <Stack.Screen
        name="Transparency"
        component={TransparencyScreen}
        options={{
          headerShown: true,
          headerRight: () => <RightComponent />,
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerShown: true,
          headerRight: () => <RightComponent />,
        }}
      />
    </Stack.Navigator>
  );
}
