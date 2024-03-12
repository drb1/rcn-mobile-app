import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Progress, List} from '@ant-design/react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';
import NepaliCalendar from '../../utils/NepaliCalender';

const MembershipForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm();
  const steps = ['Personal Info', 'General Info', 'Documents'];
  const [percent, setPercent] = useState(33);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();
  const onSubmit = data => {
    // Handle the form data submission
    console.log('Form data submitted:', data);
  };

  const gender = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
    {
      value: 'others',
      label: 'Others',
    },
  ];

  const renderStep = step => {
    switch (step) {
      case 'Personal Info':
        return (
          <View>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="First name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="ascii-capable"
                />
              )}
              name="firstName"
              rules={{required: 'This field is required.'}}
              defaultValue=""
            />
            {errors.firstName && (
              <Text style={styles.errorText}>This field is required.</Text>
            )}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value, index}}) => (
                <RNPickerSelect
                  style={{...pickerSelectStyles}}
                  placeholder={{
                    label: 'Please Select gender',
                    value: null,
                  }}
                  onValueChange={onChange}
                  items={[
                    {label: 'Male', value: 'male'},
                    {label: 'Female', value: 'female'},
                    {label: 'Others', value: 'others'},
                  ]}
                  itemKey={value}
                />
              )}
              name="gender"
              rules={{required: 'This field is required.'}}
              defaultValue=""
            />
            {errors.gender && (
              <Text style={styles.errorText}>This field is required.</Text>
            )}
           
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value, index}}) => (
                <RNPickerSelect
                  style={{...pickerSelectStyles}}
                  placeholder={{
                    label: 'Please Select Ethinicity',
                    value: null,
                  }}
                  onValueChange={onChange}
                  items={[
                    {label: 'Dalit', value: 'dalit'},
                    {label: 'Aadibasi', value: 'aadibasi'},
                  ]}
                  itemKey={value}
                />
              )}
              name="ethinicity"
              rules={{required: 'This field is required.'}}
              defaultValue=""
            />
            {errors.ethinicity && (
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
              render={({field: {onChange, onBlur, value, index}}) => (
                <RNPickerSelect
                  style={{...pickerSelectStyles}}
                  placeholder={{
                    label: 'Please Select Education Degree',
                    value: null,
                  }}
                  onValueChange={onChange}
                  items={[
                    {label: 'SEE', value: 'see'},
                    {label: '+2', value: '+2'},
                    {label: 'Bachelors', value: 'bachelors'},
                    {label: 'Masters', value: 'masters'},
                    {label: 'PHD', value: 'phd'},
                  ]}
                  itemKey={value}
                />
              )}
              name="ethinicity"
              rules={{required: 'This field is required.'}}
              defaultValue=""
            />
            {errors.gender && (
              <Text style={styles.errorText}>This field is required.</Text>
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                handleSubmit(() => {
                  setStep(1);
                  setPercent(66);
                })()
              }>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        );
      case 'General Info':
        return (
          <View>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value, index}}) => (
                <RNPickerSelect
                  style={{...pickerSelectStyles}}
                  placeholder={{
                    label: 'Please Select Province',
                    value: null,
                  }}
                  onValueChange={onChange}
                  items={[
                    {label: 'Province 1', value: '1'},
                    {label: 'Province 2', value: '2'},
                    {label: 'Province 3', value: '3'},
                  ]}
                  itemKey={value}
                />
              )}
              name="province"
              rules={{required: 'This field is required.'}}
              defaultValue=""
            />
            {errors.province && (
              <Text style={styles.errorText}>This field is required.</Text>
            )}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value, index}}) => (
                <RNPickerSelect
                  style={{...pickerSelectStyles}}
                  placeholder={{
                    label: 'Please Select District',
                    value: null,
                  }}
                  onValueChange={onChange}
                  items={[
                    {label: '1', value: '1'},
                    {label: '2', value: '2'},
                  ]}
                  itemKey={value}
                />
              )}
              name="district"
              rules={{required: 'This field is required.'}}
              defaultValue=""
            />
            {errors.district && (
              <Text style={styles.errorText}>This field is required.</Text>
            )}

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value, index}}) => (
                <RNPickerSelect
                  style={{...pickerSelectStyles}}
                  placeholder={{
                    label: 'Please Select Municipality',
                    value: null,
                  }}
                  onValueChange={onChange}
                  items={[
                    {label: '1', value: '1'},
                    {label: '2', value: '2'},
                    {label: '3', value: '3'},
                    {label: '4', value: '4'},
                    {label: '5', value: '5'},
                  ]}
                  itemKey={value}
                />
              )}
              name="municipality"
              rules={{required: 'This field is required.'}}
              defaultValue=""
            />
            {errors.municipality && (
              <Text style={styles.errorText}>This field is required.</Text>
            )}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value, index}}) => (
                <RNPickerSelect
                  style={{...pickerSelectStyles}}
                  placeholder={{
                    label: 'Please Select Ward Number',
                    value: null,
                  }}
                  onValueChange={onChange}
                  items={[
                    {label: '1', value: '1'},
                    {label: '2', value: '2'},
                    {label: '3', value: '3'},
                    {label: '4', value: '4'},
                    {label: '5', value: '5'},
                  ]}
                  itemKey={value}
                />
              )}
              name="ward"
              rules={{required: 'This field is required.'}}
              defaultValue=""
            />
            {errors.ward && (
              <Text style={styles.errorText}>This field is required.</Text>
            )}
          {/*   <NepaliCalendar
              onMonthChange={month => {
                console.log(month);
              }}
              onDateChange={date => {
                console.log(date);
              }}
              onDayLongPress={day => {
                console.log(day);
              }}
            /> */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value, index}}) => (
                <>
                  <TouchableOpacity
                    style={styles.input}
                    onPress={() => setOpen(true)}>
                    {console.log('date', date)}
                    {date === undefined ? (
                      <Text>Date Of Birth(A.d)</Text>
                    ) : (
                      <Text>{date?.toDateString()}</Text>
                    )}
                  </TouchableOpacity>
                  <DatePicker
                    modal
                    open={open}
                    date={new Date()}
                    onConfirm={date => {
                      console.log('date', date);
                      setOpen(false);
                      setDate(date);
                    }}
                    onCancel={() => {
                      setOpen(false);
                    }}
                    locale="en"
                    mode="date"
                    title={'Date of Birth'}
                  />
                </>
              )}
              name="dobad"
              rules={{required: 'This field is required.'}}
              defaultValue=""
            />
            {errors.ward && (
              <Text style={styles.errorText}>This field is required.</Text>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                handleSubmit(() => {
                  setStep(2);
                  setPercent(66);
                })()
              }>
              <Text>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setStep(0);
                setPercent(33);
              }}>
              <Text>Previous</Text>
            </TouchableOpacity>
          </View>
        );
      case 'Documents':
        return (
          <View>
            <Text>Review your data:</Text>
            <Text>First Name: {getValues('firstName')}</Text>
            <Text>Gender: {getValues('gender')}</Text>
            <Text>Email: {getValues('email')}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}>
              <Text>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setStep(1);
                setPercent(66);
              }}>
              <Text>Previous</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  const [step, setStep] = React.useState(1);

  return (
    <View style={styles.container}>
      <Text>{steps[step]}</Text>
      <Progress percent={percent} position="normal" />
      <View style={{marginVertical: 20}}>
        {renderStep(steps[step])}
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default MembershipForm;
