import { useTranslation } from 'react-i18next';
import {Text, View, Button, useColorScheme} from 'react-native';

export function AboutScreen({navigation}) {
    const { t } = useTranslation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{t("description")}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
}
