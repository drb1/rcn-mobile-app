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
export function ImageScreen({navigation}) {
  const {t} = useTranslation();
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
          flexDirection: 'row',
          display: 'flex',
          flexWrap: 'wrap',
          margin: 10,
          gap: 10,
          //  width: width * 1
        }}>
        {images.map((item, index) => {
          return (
            <Pressable key={index} onPress={onImagePress(item.title)}>
              <ImageBackground
                source={{uri: item.uri}}
                resizeMode="cover"
                style={{
                  borderRadius: 10,
                  height: 300,
                  flex: 1,
                  width: width * 0.463,
                  justifyContent: 'flex-end',
                }}
                height={300}
                width={width * 0.463}>
                <Text
                  style={{
                    textAlign: 'center',
                    backgroundColor: '#000000c0',
                    opacity: 0.8,
                    color: 'white',
                    padding: 10,
                  }}>
                  {item.title}
                </Text>
              </ImageBackground>
              {/*  <Image
                source={{uri: item.uri}}
                height={300}
                width={width * 0.463}
                alt="image"
                style={{borderRadius:10}}
              /> */}
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
