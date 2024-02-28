import * as React from "react";
import { Header, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image } from "react-native";
import { useRoute } from "@react-navigation/native";
const LeftComponent = () => {
 
    return (
        <>
        <Image source={require('../assests/rcn-logo-red.webp')} style={{height:50,width:50}} alt="logo image"/>
        </>
    )
} 
export default () => {
  
  return (
    <Header
    containerStyle={{}}
      backgroundImageStyle={{}}
     // barStyle="default"
      centerComponent={{
        text: "Returnee Center Nepal",
        style: { color: "red",fontWeight:'bold' }
      }}
      centerContainerStyle={{}}
     // containerStyle={{ width: 350 }}
      leftComponent={ <LeftComponent />}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightComponent={{ icon: "home", color: "red" }}
      rightContainerStyle={{}}
      statusBarProps={{}}
      backgroundColor="white"
    />
  );
}