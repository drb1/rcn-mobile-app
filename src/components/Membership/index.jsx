import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
  Image,
  useWindowDimensions,
  Platform,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Progress, List} from '@ant-design/react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';
import NepaliCalendar from '../../utils/NepaliCalender';
import axios from 'axios';
import RadioGroup from 'react-native-radio-buttons-group';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Button} from 'react-native';
import {useCreateMemberMutation} from '../../hooks/useMutateData';
import {Alert} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import ReactNativeBlobUtil from 'react-native-blob-util';
import Pdf from 'react-native-pdf';
import NepaliDate from 'nepali-date-converter';
import moment from 'moment';
import cardImage from '../Membership/esewa.png'
import convertADtoBS from '../../utils/NepaliCalender';

const MyPDFContent = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>This is a PDF generated in React Native</Text>
    <Text style={styles.body}>This content is included in the PDF.</Text>
    <Image source={require('../../assests/esewa.png')} style={styles.image} />
  </View>
);
const MembershipForm = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm();
  const {width} = useWindowDimensions('width');
  const createMutation = useCreateMemberMutation();
  const steps = [
    'Personal Info',
    'General Info',
    'Documents',
    'Membership Card',
  ];
  const [percent, setPercent] = useState(33);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();
  const [selectedProvince, setSelectedProvince] = useState();
  const [province, setProvince] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [district, setDistrict] = useState();
  const [districtList, setDistrictList] = useState();
  const [selectedMuni, setSelectedMuni] = useState();
  const [municipality, setMunicipality] = useState();
  const [document, setDocument] = useState('passport');
  const [selectedImage, setSelectedImage] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [bsDate, setBSDate] = useState(null);
  const [fileSource, setFileSource] = useState(null);
  const downloadPdf = url => {
    console.log(url, 'url');
    ReactNativeBlobUtil.config({
      addAndroidDownloads: {
        useDownloadManager: true, // <-- this is the only thing required
        // Optional, override notification setting (default to true)
        notification: true,
        // Optional, but recommended since android DownloadManager will fail when
        // the url does not contains a file extension, by default the mime type will be text/plain
        mime: 'file',
        mediaScannable: true,
        description: 'File downloaded by download manager.',
      },
    })
      .fetch('GET', url)
      .then(resp => {
        // the path of downloaded file
        console.log('file donwl', resp);
        resp.path();
      });
  };
  const [base64String, setBase64String] = useState('');

  useEffect(() => {
    convertImageToBase64(cardImage);
}, []);

const convertImageToBase64 = (image) => {
  console.log('image',cardImage)
    const reader = new FileReader();
    reader.onload = function () {
        const base64String = reader.result.split(',')[1];
        setBase64String(base64String);
    };
    reader.onerror = function (error) {
        console.error('Error: ', error);
    };
    reader.readAsDataURL(image);
};
console.log('base64String',base64String)
  const htmlString = `
  <!DOCTYPE html>

  <html>
  
    <head>
  
      <title>Page Title</title>
  
   
  
      <style>
  
        h2,
  
        h3,
  
        h4 {
  
          margin-top: unset;
  
          margin-bottom: unset;
  
        }
  
   
  
        .bodyWrap {
  
          font-weight: 700;
  
          border: 1px solid black;
  
          background-color: #b93034;
  
          display: block;
  
          width: 100%;
  
          padding-bottom: 10px;
  
          font-size: 12px;
  
        }
  
   
  
        .upper {
  
          display: flex;
  
          gap: 5px;
  
          flex-direction: row;
  
          align-items: center;
  
          justify-content: space-between;
  
          padding: 5pt 10pt;
  
        }
  
   
  
        .mid {
  
          display: flex;
  
          flex-direction: column;
  
          align-items: center;
  
   
  
          color: white;
  
          font-weight: 600;
  
        }
  
   
  
        .mid h2 {
  
          color: yellow;
  
          border-bottom: 1px solid yellow;
  
          font-size: 36px;
  
          font-weight: 900;
  
        }
  
   
  
        .mid h4 {
  
          font-size: 28px;
  
          font-weight: 600;
  
        }
  
   
  
        .body {
  
          background-color: white;
  
          padding: 5pt 10pt;
  
          z-index: 1;
  
          font-size: 12px;
  
   
  
          display: flex;
  
          flex-direction: row;
  
          padding: 20px 15px;
  
          justify-content: space-between;
  
          position: relative;
  
        }
  
   
  
        .memberText {
  
          display: inline-block;
  
          color: #09378f;
  
          border: 1px solid #09378f;
  
          padding: 4px;
  
          margin-right: 90pt;
  
          margin: auto;
  
        }
  
   
  
        .labelWrap {
  
          display: flex;
  
          flex-direction: row;
  
          gap: 5px;
  
        }
  
   
  
        .image {
  
          width: 50px;
  
          height: 50px;
  
        }
  
   
  
        .overlayImg {
  
          position: absolute;
  
          z-index: -1;
  
          inset: 0;
  
          text-align: center;
  
        }
  
   
  
        .overlayImg img {
  
          width: 40%;
  
          height: 100%;
  
          margin: auto;
  
          opacity: 0.2;
  
          padding: 5pt 0;
  
        }
  
   
  
        .bodyLeft {
  
          width: 73%;
  
          display: flex;
  
          gap: 10px;
  
          flex-direction: column;
  
          position: relative;
  
        }
  
   
  
        .bodyRight {
  
          width: 24%;
  
          display: flex;
  
          gap: 2px;
  
          flex-direction: column;
  
          justify-content: space-between;
  
          margin-left: 10px;
  
        }
  
   
  
        .photo {
  
          width: 100%;
  
          height: 132.28346456692915px;
  
          object-fit: contain;
  
        }
  
   
  
        .sign {
  
          width: 30px;
  
          height: 30px;
  
        }
  
      </style>
  
    </head>
  
    <body>
  
      <div class="bodyWrap">
  
        <div class="upper">
  
          <img src="${base64String}" class="image" width={50} height={50} />
  
   
  
          <div class="mid">
  
            <h2>रिटर्नी सेन्टर नेपाल</h2>
  
            <h4>Returnee Central Nepal</h4>
  
          </div>
  
   
  
          <img src="${base64String}" class="image" />
  
        </div>
  
   
  
        <div class="body">
  
          <div class="overlayImg">
  
            <img src="${base64String}" />
  
          </div>
  
   
  
          <div class="bodyLeft">
  
            <div style="display: flex; width: 100%">
  
              <div class="memberText">Membership Card</div>
  
            </div>
  
   
  
            <div class="labelWrap">
  
              <div style="width: 9%">M.ID</div>
  
              <div
  
                style="
  
                  border-bottom: 1px dotted #000;
  
                  width: 10%;
  
                  font-weight: normal;
  
                "
  
              >
  
                23
  
              </div>
  
            </div>
  
   
  
            <div class="labelWrap">
  
              <div style="width: 15%">Full Name:</div>
  
              <div
  
                style="
  
                  border-bottom: 1px dotted #000;
  
                  width: 85%;
  
                  font-weight: normal;
  
                  text-transform: capitalize;
  
                "
  
              >
  
                Full Name
  
              </div>
  
            </div>
  
   
  
            <div class="labelWrap">
  
              <div style="width: 12%">Address:</div>
  
              <div
  
                style="
  
                  border-bottom: 1px dotted #000;
  
                  width: 88%;
  
                  font-weight: normal;
  
                  text-transform: capitalize;
  
                "
  
              >
  
                Address:
  
              </div>
  
            </div>
  
   
  
            <div
  
              style="
  
                display: flex;
  
                gap: 5px;
  
                justify-content: space-between;
  
                flex-direction: row;
  
              "
  
            >
  
              <div
  
                style="width: 48%; gap: 5px; display: flex; flex-direction: row"
  
              >
  
                <div style="width: 30%">Issue date:</div>
  
                <div
  
                  style="
  
                    border-bottom: 1px dotted #000;
  
                    width: 70%;
  
                    font-weight: normal;
  
                  "
  
                >
  
                  Issue date:
  
                </div>
  
              </div>
  
   
  
              <div
  
                style="width: 48%; gap: 5px; display: flex; flex-direction: row"
  
              >
  
                <div style="width: 38%">Expiry date:</div>
  
                <div
  
                  style="
  
                    border-bottom: 1px dotted #000;
  
                    width: 62%;
  
                    font-weight: normal;
  
                  "
  
                >
  
                  Expiry date
  
                </div>
  
              </div>
  
            </div>
  
   
  
            <div class="labelWrap">
  
              <div style="width: 20%">Citizenship no:</div>
  
              <div
  
                style="
  
                  border-bottom: 1px dotted #000;
  
                  width: 80%;
  
                  font-weight: normal;
  
                "
  
              >
  
                Citizenship no
  
              </div>
  
            </div>
  
          </div>
  
   
  
          <div class="bodyRight">
  
            <div class="labelWrap">
  
              <img src="${base64String}" class="photo" />
  
            </div>
  
   
  
            <div style="display: flex; flex-direction: column; margin-top: 5px">
  
              <div
  
                style="
  
                  border-bottom: 1px dotted #000;
  
                  width: 100%;
  
                  text-align: center;
  
                "
  
              >
  
                <img
  
                  style="width: 20%; height: auto; margin-bottom: -10px"
  
                  src="data:image/png;base64,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"
  
                />
  
              </div>
  
   
  
              <div style="margin-top: 10px; text-align: center">
  
                <h6 style="color: #09378f; font-size: 14px; font-weight: 600">
  
                  Sign
  
                </h6>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </div>
  
    </body>
  
  </html>
  
  `;
  const generatePDF = async () => {
    try {
      const options = {
        html: htmlString,
        fileName: 'membership',
        directory: Platform.OS === 'android' ? 'Download' : 'Documents',
        // directory: 'Documents',
        // Other options (refer to library documentation)
      };

      let file = await RNHTMLtoPDF.convert(options);
      console.log('PDF generated:', file); // File path or base64 string (depending on options)
      if (file.filePath) {
        setFileSource(file.filePath);
        //  setStep(3);
        // downloadPdf(file.filePath);
      }

      // Implement logic to handle the generated PDF (e.g., save to device, display in app)
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handleImageSelection = async () => {
    let options = {
      mediaType: 'photo', // Choose 'photo' or 'video'
      quality: 1, // Image quality (0-1)
    };

    try {
      const result = await launchImageLibrary(options); // Or launchCamera(options)

      if (!result.didCancel) {
        setSelectedImage(result.assets[0]); // Assuming single selection
      }
    } catch (error) {
      console.error('Image picker error:', error);
    }
  };
  const handleProfileImage = async () => {
    let options = {
      mediaType: 'photo', // Choose 'photo' or 'video'
      quality: 1, // Image quality (0-1)
    };

    try {
      const result = await launchImageLibrary(options); // Or launchCamera(options)
      console.log(result.assets[0].uri, 'result.assets[0]');
      if (!result.didCancel) {
        console.log('inside not cancel');
        setProfileImage(result.assets[0]); // Assuming single selection
      }
    } catch (error) {
      console.error('Image picker error:', error);
    }
  };
  const handleFrontImageSelection = async () => {
    let options = {
      mediaType: 'photo', // Choose 'photo' or 'video'
      quality: 1, // Image quality (0-1)
    };

    try {
      const result = await launchImageLibrary(options); // Or launchCamera(options)

      if (!result.didCancel) {
        setFrontImage(result.assets[0]); // Assuming single selection
      }
    } catch (error) {
      console.error('Image picker error:', error);
    }
  };
  const handleBackImageSelection = async () => {
    let options = {
      mediaType: 'photo', // Choose 'photo' or 'video'
      quality: 1, // Image quality (0-1)
    };

    try {
      const result = await launchImageLibrary(options); // Or launchCamera(options)

      if (!result.didCancel) {
        setBackImage(result.assets[0]); // Assuming single selection
      }
    } catch (error) {
      console.error('Image picker error:', error);
    }
  };
  useEffect(() => {
    const fetchProvince = async () => {
      try {
        const response = await axios.get(
          'https://kaalvairab.github.io/nepal-address/data/provinces.json',
        );

        setProvince(response.data.provinces);

        console.log('log fetching country codes:', response);
      } catch (error) {
        console.error('Error fetching country codes:', error);
      }
    };

    fetchProvince();
  }, []);

  useEffect(() => {
    const fetchDistrict = async () => {
      try {
        const response = await axios.get(
          `https://kaalvairab.github.io/nepal-address/data/districtsByProvince/${selectedProvince}.json`,
        );

        setDistrict(response.data.districts);

        console.log('log fetching district codes:', response);
      } catch (error) {
        console.error('Error fetching district codes:', error);
      }
    };

    fetchDistrict();
  }, [selectedProvince]);
  useEffect(() => {
    const fetchAllDistrict = async () => {
      try {
        const response = await axios.get(
          `https://kaalvairab.github.io/nepal-address/data/districts.json`,
        );

        setDistrictList(response.data.districts);

        console.log('log fetching district codes:', response);
      } catch (error) {
        console.error('Error fetching district codes:', error);
      }
    };

    fetchAllDistrict();
  }, [selectedProvince]);

  useEffect(() => {
    const fetchMuni = async () => {
      try {
        const response = await axios.get(
          `https://kaalvairab.github.io/nepal-address/data/municipalsByDistrict/${selectedDistrict}.json`,
        );

        setMunicipality(response.data.municipals);

        console.log('log fetching muni codes:', response);
      } catch (error) {
        console.error('Error fetching muni codes:', error);
      }
    };

    fetchMuni();
  }, [selectedDistrict]);
  /*   const uriToBlob = async (uri) => {
    const response = await RNFetchBlob.config({
        // (Optional) Configurable options, like 'fileCache' etc.
    }).fetch('GET', uri);
    const contentType = response.headers.Map['Content-Type'];
    return response.blob();
}; */
  const onSubmit = async data => {
    // Handle the form data submission
    console.log('Form data submitted:', data);
    console.log('profile image satee', profileImage);
    const formData = new FormData();
    formData.append('fullName', data.fullName);
    formData.append('gender', data.gender);
    formData.append('ethnicity', data.ethnicity);
    formData.append('email', data.email);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('educationDegree', data.educationDegree);
    formData.append('province', data.province);
    formData.append('district', data.district);
    formData.append('municipality', data.municipality);
    formData.append('wardNo', data.wardNo);
    formData.append('DOBinAD', date?.toDateString());
    formData.append('DOBinBS', bsDate);
    formData.append('passportNo', data.passportNo);
    formData.append('citizenshipNo', data.citizenshipNo);
    formData.append(
      'citizenshipIssuedDistrict',
      data.citizenshipIssuedDistrict,
    );
    formData.append('isAccept', data.isAccept);

    formData.append('image', {
      uri: profileImage?.uri ? profileImage.uri : null,
      type: profileImage?.type ? profileImage.type : null,
      name: profileImage?.fileName ? profileImage.fileName : null,
    });

    // formData.append('DOBinBS', 'DOBBS');
    formData.append('documentType', document);
    document === 'passport'
      ? formData.append('passportImage', {
          uri: selectedImage?.uri ? selectedImage.uri : null,
          type: selectedImage?.type ? selectedImage.type : null,
          name: selectedImage?.fileName ? selectedImage.fileName : null,
        })
      : (formData.append('citizenshipFrontImage', {
          uri: frontImage?.uri ? frontImage.uri : null,
          type: frontImage?.type ? frontImage.type : null,
          name: frontImage?.fileName ? frontImage.fileName : null,
        }),
        formData.append('citizenshipBackImage', {
          uri: backImage?.uri ? backImage.uri : null,
          type: backImage?.type ? backImage.type : null,
          name: backImage?.fileName ? backImage.fileName : null,
        })),
      createMutation.mutate(formData, {
        onSuccess: res => {
          generatePDF();
        },
        onError: err => console.log('err', err),
      });
  };

  console.log('document', document);
  const radioButtons = useMemo(
    () => [
      {
        id: 'passport', // acts as primary key, should be unique and non-empty string
        label: 'Passport',
        value: 'passport',
      },
      {
        id: 'citizenship',
        label: 'Citizenship',
        value: 'citizenship',
      },
    ],
    [],
  );
  const termsOptions = useMemo(
    () => [
      {
        id: 'true', // acts as primary key, should be unique and non-empty string
        label: 'I accept all the mentioned statements',
        value: 'true',
      },
    ],
    [],
  );
 
  
    const dateConverter = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-indexed (January = 0)
    const day = date.getDate();
    const formattedDate = `${year},${month.toString().padStart(2, '0')},${day
      .toString()
      .padStart(2, '0')}`;
  
    setBSDate(
      convertADtoBS(
        year,
        month.toString().padStart(2, '0'),
        day.toString().padStart(2, '0'),
      ),
    );
  };

  console.log('dates', bsDate, date?.toDateString());
  const renderStep = step => {
    switch (step) {
      case 'Personal Info':
        return (
         /*  generatePDF() */
          <ScrollView>
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
                  name="fullName"
                />
              )}
              name="fullName"
              rules={{required: 'This field is required.'}}
              defaultValue=""
            />
            {errors.firstName && (
              <Text style={styles.errorText}>This field is required.</Text>
            )}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value, index}}) => (
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 4,
                    marginBottom: 10,
                  }}>
                  <RNPickerSelect
                    style={{
                      ...pickerSelectStyles,
                      placeholder: {color: 'black'},
                    }}
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
                </View>
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
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 4,
                    marginBottom: 10,
                  }}>
                  <RNPickerSelect
                    style={{
                      ...pickerSelectStyles,
                      placeholder: {color: 'black'},
                    }}
                    placeholder={{
                      label: 'Please Select Ethnicity',
                      value: null,
                    }}
                    onValueChange={onChange}
                    items={[
                      {label: 'Dalit', value: 'dalit'},
                      {label: 'Aadibasi Janjati', value: 'aadibasi'},
                      {label: 'Khas Arya', value: 'khasarya'},
                      {label: 'Aadibasi', value: 'aadibasi'},
                      {label: 'Madhesi', value: 'madhesi'},
                      {label: 'Tharu', value: 'tharu'},
                      {label: 'Muslim', value: 'muslim'},
                    ]}
                    itemKey={value}
                  />
                </View>
              )}
              name="ethnicity"
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
                  name="phoneNumber"
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
                  name="email"
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
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 4,
                    marginBottom: 10,
                  }}>
                  <RNPickerSelect
                    style={{
                      ...pickerSelectStyles,
                      placeholder: {color: 'black'},
                    }}
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
                </View>
              )}
              name="educationDegree"
              rules={{required: 'This field is required.'}}
              defaultValue=""
            />
            {errors.educationDegree && (
              <Text style={styles.errorText}>This field is required.</Text>
            )}

            <View style={styles.container}>
              <View>
                <Button
                  title="Select Profile Image"
                  onPress={handleProfileImage}
                />
                {profileImage && (
                  <Image
                    source={{uri: profileImage.uri}}
                    style={{width: width * 0.8, height: 200}}
                  />
                )}
              </View>
            </View>

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
          </ScrollView>
        );
      case 'General Info':
        return (
          <ScrollView>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value, index}}) => (
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 4,
                    marginBottom: 10,
                  }}>
                  <RNPickerSelect
                    style={{
                      ...pickerSelectStyles,
                      placeholder: {color: 'black'},
                    }}
                    placeholder={{
                      label: 'Please Select Province',
                      value: null,
                    }}
                    //  onValueChange={(e) => setSelectedProvince(e)}
                    onValueChange={newValue => {
                      onChange(newValue); // Call the onChange method with the new value
                      setSelectedProvince(newValue); // Optionally, update the state with the new value
                    }}
                    items={
                      province
                        ? province.map(item => ({
                            label: item.toUpperCase(),
                            value: item,
                            key: item, // Assigning a unique key to each item
                          }))
                        : []
                    }
                    itemKey={value}
                  />
                </View>
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
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 4,
                    marginBottom: 10,
                  }}>
                  <RNPickerSelect
                    style={{
                      ...pickerSelectStyles,
                      placeholder: {color: 'black'},
                    }}
                    placeholder={{
                      label: 'Please Select District',
                      value: null,
                    }}
                    onValueChange={newValue => {
                      onChange(newValue); // Call the onChange method with the new value
                      setSelectedDistrict(newValue); // Optionally, update the state with the new value
                    }}
                    items={
                      district
                        ? district.map(item => ({
                            label: item.toUpperCase(),
                            value: item,
                            key: item, // Assigning a unique key to each item
                          }))
                        : []
                    }
                    itemKey={value}
                  />
                </View>
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
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 4,
                    marginBottom: 10,
                  }}>
                  <RNPickerSelect
                    style={{
                      ...pickerSelectStyles,
                      placeholder: {color: 'black'},
                    }}
                    placeholder={{
                      label: 'Please Select Municipality',
                      value: null,
                    }}
                    onValueChange={newValue => {
                      onChange(newValue); // Call the onChange method with the new value
                      setSelectedMuni(newValue); // Optionally, update the state with the new value
                    }}
                    items={
                      municipality
                        ? municipality.map(item => ({
                            label: item.toUpperCase(),
                            value: item,
                            key: item, // Assigning a unique key to each item
                          }))
                        : []
                    }
                    itemKey={value}
                  />
                </View>
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
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="Ward Number"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                  name="wardNo"
                />
              )}
              name="wardNo"
              rules={{required: 'This field is required.'}}
              defaultValue=""
            />
            {errors.wardNo && (
              <Text style={styles.errorText}>This field is required.</Text>
            )}

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

                      setDate(date);
                      dateConverter(date);
                      setOpen(false);
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
              name="DOBinAD"
              rules={{required: 'This field is required.'}}
              defaultValue=""
            />
            {errors.DOBinAD && (
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
                setPercent(44);
              }}>
              <Text>Previous</Text>
            </TouchableOpacity>
          </ScrollView>
        );
      case 'Documents':
        return (
          <ScrollView>
            <View>
              <Text>Document Type:-</Text>
              <RadioGroup
                radioButtons={radioButtons}
                onPress={setDocument}
                selectedId={document}
                layout="row"
              />
            </View>
            {document === 'passport' ? (
              <View>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={styles.input}
                      placeholder="Passport Number"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      name="passportNo"
                      // keyboardType="numeric"
                    />
                  )}
                  name="passportNo"
                  rules={{required: 'This field is required.'}}
                  defaultValue=""
                />
                {errors.passportNo && (
                  <Text style={styles.errorText}>This field is required.</Text>
                )}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={styles.input}
                      placeholder="Citizenship Number"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      //
                      value={value}
                      name="citizenshipNo"
                      // keyboardType="numeric"
                    />
                  )}
                  name="citizenshipNo"
                  rules={{required: 'This field is required.'}}
                  defaultValue=""
                />
                {errors.citizenship && (
                  <Text style={styles.errorText}>This field is required.</Text>
                )}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value, index}}) => (
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 4,
                        marginBottom: 10,
                      }}>
                      <RNPickerSelect
                        style={{
                          ...pickerSelectStyles,
                          placeholder: {color: 'black'},
                        }}
                        // style={styles.input}
                        placeholder={{
                          label: 'Please Select District',
                          value: null,
                        }}
                        //  onValueChange={(e) => setSelectedProvince(e)}
                        onValueChange={newValue => {
                          onChange(newValue); // Call the onChange method with the new value
                          setSelectedProvince(newValue); // Optionally, update the state with the new value
                        }}
                        items={
                          districtList
                            ? districtList.map(item => ({
                                label: item.toUpperCase(),
                                value: item,
                                key: item, // Assigning a unique key to each item
                              }))
                            : []
                        }
                        itemKey={value}
                      />
                    </View>
                  )}
                  name="citizenshipIssuedDistrict"
                  rules={{required: 'This field is required.'}}
                  defaultValue=""
                />
                {errors.citizenshipIssuedDistrict && (
                  <Text style={styles.errorText}>This field is required.</Text>
                )}
                <View style={styles.container}>
                  <View>
                    <Button
                      title="Select Passport Image"
                      onPress={handleImageSelection}
                    />
                    {selectedImage && (
                      <Image
                        source={{uri: selectedImage.uri}}
                        style={{width: width * 0.8, height: 200}}
                      />
                    )}
                  </View>
                </View>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <RadioGroup
                      radioButtons={termsOptions}
                      onPress={newValue => {
                        onChange(newValue); // Call the onChange method with the new value
                        setAccepted(newValue); // Optionally, update the state with the new value
                      }}
                      selectedId={accepted}
                      layout="row"
                    />
                  )}
                  name="isAccept"
                  rules={{required: 'This field is required.'}}
                  defaultValue=""
                />
                {errors.privacyAccepted && (
                  <Text style={styles.errorText}>This field is required.</Text>
                )}
              </View>
            ) : (
              <View>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={styles.input}
                      placeholder="Citizenship Number"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      //
                      name="citizenshipNo"
                      value={value}
                      //  keyboardType="numeric"
                    />
                  )}
                  name="citizenshipNo"
                  rules={{required: 'This field is required.'}}
                  defaultValue=""
                />
                {errors.citizenship && (
                  <Text style={styles.errorText}>This field is required.</Text>
                )}

                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value, index}}) => (
                    <RNPickerSelect
                      style={{...pickerSelectStyles}}
                      // style={styles.input}
                      placeholder={{
                        label: 'Please Select District',
                        value: null,
                      }}
                      //  onValueChange={(e) => setSelectedProvince(e)}
                      onValueChange={newValue => {
                        onChange(newValue); // Call the onChange method with the new value
                        setSelectedProvince(newValue); // Optionally, update the state with the new value
                      }}
                      items={
                        districtList
                          ? districtList.map(item => ({
                              label: item.toUpperCase(),
                              value: item,
                              key: item, // Assigning a unique key to each item
                            }))
                          : []
                      }
                      itemKey={value}
                    />
                  )}
                  name="citizenshipIssuedDistrict"
                  rules={{required: 'This field is required.'}}
                  defaultValue=""
                />
                {errors.citizenshipIssuedDistrict && (
                  <Text style={styles.errorText}>This field is required.</Text>
                )}
                <View style={styles.container}>
                  <View>
                    <Button
                      title="Select Citizenship Front Image"
                      onPress={handleFrontImageSelection}
                    />
                    {frontImage && (
                      <Image
                        source={{uri: frontImage.uri}}
                        style={{width: width * 0.8, height: 200}}
                      />
                    )}
                  </View>
                </View>
                <View style={styles.container}>
                  <View>
                    <Button
                      title="Select Citizenship Back Image"
                      onPress={handleBackImageSelection}
                    />
                    {backImage && (
                      <Image
                        source={{uri: backImage.uri}}
                        style={{width: width * 0.8, height: 200}}
                      />
                    )}
                  </View>
                </View>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <RadioGroup
                      radioButtons={termsOptions}
                      onPress={newValue => {
                        onChange(newValue); // Call the onChange method with the new value
                        setAccepted(newValue); // Optionally, update the state with the new value
                      }}
                      selectedId={accepted}
                      layout="row"
                    />
                  )}
                  name="isAccept"
                  rules={{required: 'This field is required.'}}
                  defaultValue=""
                />
                {errors.privacyAccepted && (
                  <Text style={styles.errorText}>This field is required.</Text>
                )}
              </View>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}>
              <Text>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setStep(1);
                setPercent(100);
              }}>
              <Text>Previous</Text>
            </TouchableOpacity>
          </ScrollView>
        );
      case 'Membership Card':
        return (
          <Pdf
            source={{
              uri: 'file:///data/user/0/com.rcnmobileapp/cache/my-pdf6926162885473003626.pdf',
            }}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}
          />
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
      <View style={{marginVertical: 20}}>{renderStep(steps[step])}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  /*  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, */
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  container: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    color: 'black',
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

/* const pickerSelectStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  inputIOS: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    color:'black'
  },
  inputAndroid: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    color:'black'
  },
}); */

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default MembershipForm;
