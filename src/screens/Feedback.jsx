import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  Button,
  useColorScheme,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {useState} from 'react';
import colors from '../lib/colors';
import {useCreateFeedbackMutation} from '../hooks/useMutateData';

export function FeedbackScreen({navigation}) {
  const {t} = useTranslation();
  const createMutation = useCreateFeedbackMutation();
  const [feedback, setFeedback] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [number, onChangeNumber] = useState('');
  const handleInputChange = (inputName, text) => {
    setFeedback({
      ...feedback,
      [inputName]: text,
    });
    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [inputName]: '',
    });
  };
  const handleButtonPress = () => {
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Do something with the input values
      let data;
      data = {
        fullName: feedback.fullName,
        email: feedback.email,
        phoneNumber: feedback.phoneNumber,
        message: feedback.message,
      };
      createMutation.mutate(data, {
        onSuccess: res => {
          if (res?.data.success) {
            Alert.alert('Form Data', `Successfully Submitted`);
          }
        },
      });
    } else {
      // Display error messages next to the input fields
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    // Perform your validation logic here
    if (feedback.fullName.trim() === '') {
      validationErrors.fullName = 'Name is required';
    }

    if (feedback.email.trim() === '') {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(feedback.email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (feedback.phoneNumber.trim() === '') {
      validationErrors.phoneNumber = 'Phone Number  is required';
    }
    if (feedback.message.trim() === '') {
      validationErrors.message = 'Message is required';
    }
    return validationErrors;
  };

  const isValidEmail = email => {
    // Basic email validation example, you can use a more sophisticated approach if needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.backgroundColor}}>
      {/*  <Text style={{fontWeight:'bold',fontSize:30,padding:10}}>Feedbacks</Text> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{padding: 20, gap: 5, backgroundColor: 'white', flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <Text>Full Name *</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => handleInputChange('fullName', text)}
              // value={formData.name}
              placeholder="Full Name"
              keyboardType="ascii-capable"
            />
            {errors.fullName !== '' && (
              <Text style={{color: 'red'}}>{errors.fullName}</Text>
            )}
            <Text>Mobile Number *</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => handleInputChange('phoneNumber', text)}
              //  value={number}
              placeholder="Mobile Number"
              keyboardType="numeric"
            />
            {errors.phoneNumber !== '' && (
              <Text style={{color: 'red'}}>{errors.phoneNumber}</Text>
            )}
            <Text>Email *</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => handleInputChange('email', text)}
              placeholder="Email Address"
              keyboardType="email-address"
            />
            {errors.email !== '' && (
              <Text style={{color: 'red'}}>{errors.email}</Text>
            )}
            <Text>Message *</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => handleInputChange('message', text)}
              placeholder="Message"
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={8}
            />
            {errors.message !== '' && (
              <Text style={{color: 'red'}}>{errors.message}</Text>
            )}

            <Button title="Submit" onPress={handleButtonPress} />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});
