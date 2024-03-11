import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  Button,
  useColorScheme,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Maps} from '../components/Map';
import colors from '../lib/colors';
import Location from '../components/Location';
import SocialMedia from '../components/SocialMedia';
const {width} = Dimensions.get('window');
export function ContactScreen({navigation}) {
  const {t} = useTranslation();

  return (
    <ScrollView
      contentContainerStyle={{
       // flex: 1,
       // flexGrow:1,
        backgroundColor: colors.backgroundColor,
      }}>
      <Maps />
      <Location />
      <SocialMedia />
    </ScrollView>
  );
}
