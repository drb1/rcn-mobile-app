import {useTranslation} from 'react-i18next';
import {Text, View, Button, useColorScheme} from 'react-native';
import MapView from 'react-native-maps';

export function ContactScreen({navigation}) {
  const {t} = useTranslation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
