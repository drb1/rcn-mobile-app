import {Text, View, TextInput, Button, Alert, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import colors from '../lib/colors';
import MembershipForm from '../components/Membership';

export default function Membership() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({});
  const onSubmit = data => console.log(data);

  return (
    <View style={{flex: 1, backgroundColor: 'white', gap: 8}}>
     <MembershipForm />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderWidth: 2,
    padding: 10,
    borderColor: colors.backgroundColor,
  },
});
