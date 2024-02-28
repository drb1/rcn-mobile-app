import {Text, View, Button, useColorScheme} from 'react-native';

export function NoticesScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Notices Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
}
