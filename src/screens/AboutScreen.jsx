import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  Button,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import {ScrollView} from 'react-native';
import colors from '../lib/colors';
import Headingtext from '../components/ScreenHeadline';
import {useEffect, useState} from 'react';
import Spinner from '../components/Spinner';
import {useAboutData, useHWDData} from '../hooks/useQueryData';
import RenderHTML from 'react-native-render-html';

export function AboutScreen({navigation}) {
  const {t} = useTranslation();
  const {width} = useWindowDimensions();
  const [data, setData] = useState([]);
  const [hwdData, setHWDData] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const dataFetch = useAboutData();
  const howWeDataFetch = useHWDData();
  console.log('data list', hwdData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dataFetch.refetch();
        // message.success("Category List Successfully refetched.");

        if (dataFetch.data && dataFetch.data.data) {
          setData(dataFetch.data.data[0]);
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

    if (dataFetch.data) {
      fetchData();
    }
  }, [dataFetch.data]);
  const source = {
    html: data?.description,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await howWeDataFetch.refetch();
        // message.success("Category List Successfully refetched.");

        if (howWeDataFetch.data && howWeDataFetch.data.data) {
          setHWDData(howWeDataFetch.data.data);
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

    if (howWeDataFetch.data) {
      fetchData();
    }
  }, [howWeDataFetch.data]);
  const source2 = {
    html: hwdData[0]?.description,
  };
  return dataReady ? (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: colors.backgroundColor,
       
      }}>
      <View style={{padding: 20}}>
        <Headingtext heading={'About Us'} />
        <RenderHTML contentWidth={width} source={source} />
      </View>
      <View style={{padding: 20}}>
        <Headingtext heading={'How we are different ? '} />
        <RenderHTML contentWidth={width} source={source2} />
      </View>
    </ScrollView>
  ) : (
    <Spinner />
  );
}
