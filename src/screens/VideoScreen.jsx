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
import YoutubePlayer from 'react-native-youtube-iframe';
import {useCallback, useEffect, useState} from 'react';
import Headingtext from '../components/ScreenHeadline';
import {useHomeVideo, useMVData} from '../hooks/useQueryData';
import YoutubePlayers from '../components/YoutubePlayers';
import Spinner from '../components/Spinner';
const {height} = Dimensions.get('window');

const {width} = Dimensions.get('window');
export function VideoScreen({navigation}) {
  const {t} = useTranslation();
  const [playing, setPlaying] = useState(false);
  const [data, setData] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const dataFetch = useHomeVideo();
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
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  const onImagePress = id => () => {
    navigation.navigate('ImageDetailsScreen', {blogId: id});
  };

  return dataReady ? (
    <View
      style={{
        backgroundColor: colors.backgroundColor,
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{
          margin: 10,
          gap: 10,
          //  width: width * 1
        }}>
        <Headingtext heading={'Videos'} />
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}>
              <YoutubePlayers
                height={height * 0.3}
                play={playing}
                videoId={item.link}
                onChangeState={onStateChange}
              />

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginVertical: 5,
                  color: colors.textColor,
                }}>
                {item.title}
              </Text>
              <Text style={{fontWeight: 'bold'}}>{item.date}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  ) : (
    <Spinner />
  );
}
