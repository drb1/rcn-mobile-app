import {Dimensions, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import Headingtext from './ScreenHeadline';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window')
export function Maps({navigation}) {
  return (
    <View style={{height:height*0.4}}>
      <Headingtext heading={'Contact Us'} />
      <WebView
        originWhitelist={['*']}
        source={{
          html: `<html>
          <body>
            <iframe width="960" height="600" frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/place?q=The+Westin+Turtle+Bay+Resort+%26+Spa%2C+Mauritius&key=AIzaSyDztlrk_3CnzGHo7CFvLFqE_2bUKEq1JEU" allowfullscreen></iframe>
          </body>
      </html>`,
        }}
        containerStyle={{width: width}}
        scrollEnabled={false}
        // style={{flex: 1}}
      />
    </View>
  );
}
