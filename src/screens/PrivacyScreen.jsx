import {useTranslation} from 'react-i18next';
import {Text, View, Button, useWindowDimensions, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native';
import colors from '../lib/colors';
import Headingtext from '../components/ScreenHeadline';
import {usePrivacyPolicyData} from '../hooks/useQueryData';
import {isAxiosError} from 'axios';
import {useEffect, useState} from 'react';
import RenderHtml from 'react-native-render-html';
export function PrivacyScreen({navigation}) {
  const {t} = useTranslation();
  const {width} = useWindowDimensions();

  const [data, setData] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const privacyList = usePrivacyPolicyData();
  console.log('data list', data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await privacyList.refetch();
        // message.success("Category List Successfully refetched.");

        if (privacyList.data && privacyList.data.data) {
          setData(privacyList.data.data[0]);
          setDataReady(true);
        } else {
          // message.error("Error while fetching data");
        }
      } catch (error) {
        let errorMessage = '';
        if (isAxiosError(error)) {
          errorMessage = error?.response?.data || 'Something went wrong';
        }
        // message.error(errorMessage);
      }
    };

    if (privacyList.data) {
      fetchData();
    }
  }, [privacyList.data]);
  const source = {
    html: data?.description,
  };

  return dataReady ? (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: colors.backgroundColor,
      }}>
      <View style={{padding: 20}}>
        <Headingtext heading={data?.title} />
        <RenderHtml contentWidth={width} source={source} />
      </View>
    </ScrollView>
  ) : (
    <View style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: colors.backgroundColor,}}>
      <ActivityIndicator />
    </View>
  );
}
