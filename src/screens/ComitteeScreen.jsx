import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  Button,
  useColorScheme,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import colors from '../lib/colors';
import Headingtext from '../components/ScreenHeadline';
import { useEffect, useState } from 'react';
import { useCentralComitteeData } from '../hooks/useQueryData';
const images = [
  {
    title: 'Image 1',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 2',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 3',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 3',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 3',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 3',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 3',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 3',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 3',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 3',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 3',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 3',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 3',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 3',
    uri: '../assests/news.webp',
  },
  {
    title: 'Image 3',
    uri: '../assests/news.webp',
  },
];
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export function ComitteeScreen({navigation}) {
  const {t} = useTranslation();
  const [data, setData] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const dataFetch = useCentralComitteeData();
  console.log('data list', data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dataFetch.refetch();
        // message.success("Category List Successfully refetched.");

        if (dataFetch.data && dataFetch.data.data) {
          setData(dataFetch.data.data);
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
    <View
      style={{
        backgroundColor: colors.backgroundColor,
        flex: 1,
      }}>
      <Headingtext heading={'Comittee Members'} />
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          display: 'flex',
          flexWrap: 'wrap',
          margin: 10,
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{height: height * 0.27, width: width * 0.45,backgroundColor:'white',borderRadius:10}}>
              <Image
               source={{
                uri: item.image,
              }}
                alt="image"
                // style={{borderRadius: 10}}
                style={{
                  borderRadius: 10,
                  width: width * 0.45,
                  flex: 1,
                  height: height * 0.27,
                  justifyContent: 'flex-end',
                }}
                resizeMode="cover"
              />
              <View style={{padding: 10}}>
                <Text>{item.name}</Text>
                <Text>{item.designation}</Text>
                <Text>{item.phoneNumber}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
