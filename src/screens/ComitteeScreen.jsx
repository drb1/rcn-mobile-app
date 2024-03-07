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

  return (
    <View
      style={{
        backgroundColor: colors.backgroundColor,
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          display: 'flex',
          flexWrap: 'wrap',
          margin: 10,
          gap: 10,
        }}>
        {images.map((item, index) => {
          return (
            <View key={index} style={{ height: height * 0.27, width: width * 0.29,}}>
              <Image
                source={require('../assests/news.webp')}
                // height={50}
                //  width={width * 0.163}
                alt="image"
                // style={{borderRadius: 10}}
                style={{
                  borderRadius: 10,
                  width: width * 0.29,
                  flex: 1,
                  height: height * 0.27,
                  justifyContent: 'flex-end',
                }}
                resizeMode="cover"
              />
              <View style={{alignItems:'center',paddingVertical:10}}>
                <Text>Member name</Text>
                <Text>Member post</Text>
                <Text>Member phoneNumber</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
