import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NewsScreen} from '../screens/NewsScreen';
import {DonateScreen} from '../screens/DonateScreen';
import {RootStack} from './StackNavigation';
import Header from '../components/Header';
import AntIcon from 'react-native-vector-icons/AntDesign';
import OthersIcon from 'react-native-vector-icons/MaterialIcons';
import MemberIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DonateIcon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomepageScreen';
import { OthersScreen } from '../screens/OthersScreen';
import Membership from '../screens/MembershipScreen';
const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: Header,
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        
      }}>
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size,focused}) => (
            <AntIcon
              name="home"
              color={`${focused ? 'red':'gray'}`}
              size={20}
              style={{fontWeight: 'bold'}}
            />
          ),
          tabBarIconStyle:{fontWeight: 'bold'}
        }}
      />
      <Tab.Screen
        name="Membership"
        component={Membership}
        options={{
         
          tabBarIcon: ({color, size,focused}) => (
            <MemberIcon
              name="wallet-membership"
              color={`${focused ? 'red':'gray'}`}
              size={20}
              style={{fontWeight: 'bold'}}
            />
          ),
          tabBarIconStyle:{fontWeight: 'bold'}
        }}
      />
     
     {/*  <Tab.Screen
        name="Donate"
        component={DonateScreen}
        options={{
         
          tabBarIcon: ({color, size,focused}) => (
            <DonateIcon
              name="donate"
              color={`${focused ? 'red':'gray'}`}
              size={20}
              style={{}}
            />
          ),
          tabBarIconStyle:{fontWeight: 'bold'}
        }}
      /> */}
       <Tab.Screen
        name="Others"
        component={OthersScreen}
        options={{
        
          tabBarIcon: ({color, size,focused}) => (
            <OthersIcon
              name="more"
              color={`${focused ? 'red':'gray'}`}
              style={{fontWeight: 'bold'}}
              size={20}
            />
          ),
          tabBarIconStyle:{fontWeight:'bold'}
        }}
      />
    </Tab.Navigator>
  );
}
