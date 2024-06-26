import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  Button,
  useColorScheme,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
  ImageBackground,
} from 'react-native';
import colors from '../lib/colors';
import {useEffect, useState} from 'react';
import ImageView from 'react-native-image-viewing';
import Headingtext from '../components/ScreenHeadline';
import {isAxiosError} from 'axios';
import {useMediaImageData} from '../hooks/useQueryData';
import Spinner from '../components/Spinner';

const images = [
  {
    title: 'Image 1',
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    title: 'Image 2',
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    title: 'Image 3',
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
  {
    title: 'Image 3',
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
  {
    title: 'Image 3',
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
  {
    title: 'Image 3',
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
];

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
export function ImageScreen({navigation}) {
  const {t} = useTranslation();
  const [visible, setIsVisible] = useState(false);
  const [data, setData] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const dataFetch = useMediaImageData();
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
  const onImagePress = id => () => {
    setIsVisible(true);
  };
  return dataReady ? (
    <View
      style={{
        backgroundColor: colors.backgroundColor,
        flex: 1,
        padding: 10,
      }}>
      <Headingtext heading={'Images'} />
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 10,
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
          //  width: width * 1
        }}>
        {data.map((item, index) => {
          return (
            <Pressable key={index} onPress={onImagePress(item.title)}>
              <ImageView
                images={item.image}
                imageIndex={0}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
              />
              <ImageBackground
                source={{uri: item.image}}
                resizeMode="cover"
                style={{
                  borderRadius: 10,
                  height: height * 0.3,
                  // flex: 1,
                  width: width * 0.43,
                  justifyContent: 'flex-end',
                }}
                imageStyle={{borderRadius: 10, height: height * 0.3}}>
                <Text
                  style={{
                    textAlign: 'center',
                    backgroundColor: '#000000c0',
                    opacity: 0.8,
                    color: 'white',
                    padding: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}>
                  {item.topic}
                </Text>
              </ImageBackground>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  ) : (
    <Spinner />
  );
}
