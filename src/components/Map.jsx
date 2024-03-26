import {Dimensions, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import Headingtext from './ScreenHeadline';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window')
export function Maps({location}) {
  return (
    <View style={{height:height*0.4}}>
      <Headingtext heading={'Contact Us'} />
      <WebView
        originWhitelist={['*']}
        source={{
          html: `<html>
          <body>
          ${location}
          </body>
      </html>`,
        }}
        containerStyle={{width: 650}}
        scrollEnabled={false}
      
      />
    </View>
  );
}
