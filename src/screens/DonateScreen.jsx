import { useTranslation } from 'react-i18next';
import {Text, View, Button, useColorScheme, ScrollView} from 'react-native';
import Paymentmethod from '../components/Donation/PaymentMethod';
import colors from '../lib/colors';
import Paymentinformation from '../components/Donation/PaymentInformation';
import PaymentForm from '../components/Donation/PaymentForm';

export function DonateScreen({navigation}) {
    const { t } = useTranslation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow:1,backgroundColor:colors.backgroundColor}}>
     <Paymentmethod />
     <Paymentinformation />
     <PaymentForm />
    </ScrollView>
  );
}
