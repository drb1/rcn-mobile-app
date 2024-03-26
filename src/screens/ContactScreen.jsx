import {useTranslation} from 'react-i18next';
import {
  Dimensions,
  ScrollView,
} from 'react-native';
import {Maps} from '../components/Map';
import colors from '../lib/colors';
import Location from '../components/Location';
import SocialMedia from '../components/SocialMedia';
import { useEffect, useState } from 'react';
import { useContactUsData, useSocialMediaData } from '../hooks/useQueryData';
const {width} = Dimensions.get('window');
export function ContactScreen({navigation}) {
  const {t} = useTranslation();
  const [data, setData] = useState([]);
 
  const [dataReady, setDataReady] = useState(false);
  const dataFetch = useContactUsData();
 
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

  return (
    <ScrollView
      contentContainerStyle={{
        //flex: 1,
       flexGrow:1,
        backgroundColor: colors.backgroundColor,
      }}>
      <Maps location={data.location_url}/>
      <Location email={data.email} location={data.location} phoneNumber={data.phoneNumber}/>
      <SocialMedia/>
    </ScrollView>
  );
}
