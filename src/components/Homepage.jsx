import {useTranslation} from 'react-i18next';
import {Text, View, Button, useColorScheme, Alert} from 'react-native';
const lngs = {
  en: {nativeName: 'English'},
  np: {nativeName: 'Nepali'},
};
export function HomeScreen({navigation}) {
  const {t, i18n} = useTranslation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{t('title')}</Text>
      <View>
        {Object.keys(lngs).map(lng => (
          
          <Button
            title={lngs[lng].nativeName}
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
            }}
            type="submit"
            onClick={() => console.log(i18n.changeLanguage('np'))}
          />
        ))}
      </View>
      <Button title="Go to News" onPress={() => navigation.push('News')} />
    </View>
  );
}
