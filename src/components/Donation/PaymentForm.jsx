import {Controller, useForm} from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const PaymentForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm();
  const onSubmit = data => {
    // Handle the form data submission
    console.log('Form data submitted:', data);
  };

  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 25, padding: 20}}>
        Payment Form
      </Text>
      <View style={{padding: 10}}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="ascii-capable"
            />
          )}
          name="fullName"
          rules={{required: 'This field is required.'}}
          defaultValue=""
        />
        {errors.fullName && (
          <Text style={styles.errorText}>This field is required.</Text>
        )}

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="number-pad"
            />
          )}
          name="phoneNumber"
          rules={{required: 'This field is required.'}}
          defaultValue=""
        />
        {errors.phoneNumber && (
          <Text style={styles.errorText}>This field is required.</Text>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
          )}
          name="email"
          rules={{required: 'This field is required.'}}
          defaultValue=""
        />
        {errors.email && (
          <Text style={styles.errorText}>This field is required.</Text>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Amount"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="number-pad"
            />
          )}
          name="amount"
          rules={{required: 'The amount should be atleast Rs.10.'}}
          defaultValue=""
        />
        {errors.amount && (
          <Text style={styles.errorText}>The amount should be atleast Rs.10.</Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default PaymentForm;
