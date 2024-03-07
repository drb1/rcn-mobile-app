import {useTranslation} from 'react-i18next';
import {Text, View, Button, useColorScheme, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import WebView from 'react-native-webview';
const {width} = Dimensions.get('window')
export function ContactScreen({navigation}) {
  const {t} = useTranslation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/*  <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
      <WebView
        originWhitelist={['*']}
        source={{
          html: `<html>
          <body>
            <iframe width="960" height="450" frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/place?q=The+Westin+Turtle+Bay+Resort+%26+Spa%2C+Mauritius&key=AIzaSyDztlrk_3CnzGHo7CFvLFqE_2bUKEq1JEU" allowfullscreen></iframe>
          </body>
      </html>`,
        }}
        style={{width:width}}
       // style={{flex: 1}}
      />
      <View>

      </View>
    </View>
  );
}
