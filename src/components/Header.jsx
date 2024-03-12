import * as React from 'react';
import {Header, Icon} from '@rneui/base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
const LeftComponent = () => {
  return (
    <>
      <Image
        source={require('../assests/rcn-logo-red.webp')}
        style={{height: 40, width: 40}}
        alt="logo image"
        resizeMode='contain'
      />
    </>
  );
};
export default () => {
  return (
    <Header
    
      backgroundImageStyle={{}}
      // barStyle="default"
      centerComponent={{
        text: 'Returnee Center Nepal',
        style: {color: 'red', fontWeight: 'bold'},
      }}
      centerContainerStyle={{alignItems:'center',justifyContent:'center'}}
      // containerStyle={{ width: 350 }}
     leftComponent={<LeftComponent />}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightComponent={{icon: 'home', color: 'red',size:30}}
     // leftComponent={{icon: 'home', color: 'red'}}
      rightContainerStyle={{}}
      statusBarProps={{}}
      backgroundColor="white"
    />
  );
};
