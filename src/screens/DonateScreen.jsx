import { useTranslation } from 'react-i18next';
import {Text, View, Button, useColorScheme, ScrollView} from 'react-native';
import Paymentmethod from '../components/Donation/PaymentMethod';
import colors from '../lib/colors';

export function DonateScreen({navigation}) {
    const { t } = useTranslation();

  return (
    <ScrollView contentContainerStyle={{flex: 1, backgroundColor:colors.backgroundColor}}>
     <Paymentmethod />
    </ScrollView>
  );
}
