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
import {useAboutData, useMVData} from '../hooks/useQueryData';
import RenderHTML from 'react-native-render-html';
import { isAxiosError } from 'axios';

export function MissionScreen({navigation}) {
  const {t} = useTranslation();
  const {width} = useWindowDimensions();
  const [data, setData] = useState([]);

  const [dataReady, setDataReady] = useState(false);
  const dataFetch = useMVData();
  console.log('data list', data);

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
  return dataReady ? (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: colors.backgroundColor,
        flexGrow:1
        //flex: 1,
      }}>
      <View style={{padding: 20}}>
        <Headingtext heading={'Mission And Vision'} />
        <RenderHTML contentWidth={width} source={source} />
      </View>
    </ScrollView>
  ) : (
    <Spinner />
  );
}
