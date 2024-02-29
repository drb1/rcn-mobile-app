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
import {useCallback, useState} from 'react';
const images = [
  {
    title: 'Image 1',
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
    date:'2080-02-02'
  },
  {
    title: 'Image 2',
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
    date:'2080-02-02'
  },
  {
    title: 'Image 3',
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
    date:'2080-02-02'
  },
  {
    title: 'Image 4',
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
    date:'2080-02-02'
  },
  {
    title: 'Image 5',
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
    date:'2080-02-02'
  },
  {
    title: 'Image 6',
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
    date:'2080-02-02'
  },
];

const {width} = Dimensions.get('window');
export function VideoScreen({navigation}) {
  const {t} = useTranslation();
  const [playing, setPlaying] = useState(false);
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
  return (
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
        {images.map((item, index) => {
          return (
            <View key={index} style={{backgroundColor:'white',padding:10,borderRadius:10}}>
              <YoutubePlayer
                height={200}
                play={playing}
                videoId={'iee2TATGMyI'}
                onChangeState={onStateChange}
                
              />

              <Text style={{fontWeight:'bold',fontSize:20,marginVertical:5,color:colors.textColor}}>{item.title}</Text>
              <Text style={{fontWeight:'bold'}}>{item.date}</Text>
              {/*   <Button
                title={playing ? 'pause' : 'play'}
                onPress={togglePlaying}
              /> */}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
