import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  Button,
  useColorScheme,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import DownloadIcon from 'react-native-vector-icons/FontAwesome5';
import colors from '../lib/colors';
import Headingtext from '../components/ScreenHeadline';

const items = [
  {
    id: 1,
    url: 'https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=1024x1024&w=is&k=20&c=JZoUa-ouoJKnDXSaCbkqZtLQxR0KVdmvE4iz7kebTOo=',
    title: 'Donwload 1',
  },
  {
    id: 2,
    url: 'https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=1024x1024&w=is&k=20&c=JZoUa-ouoJKnDXSaCbkqZtLQxR0KVdmvE4iz7kebTOo=',
    title: 'Donwload 2',
  },
  {
    id: 1,
    url: 'https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=1024x1024&w=is&k=20&c=JZoUa-ouoJKnDXSaCbkqZtLQxR0KVdmvE4iz7kebTOo=',
    title: 'Donwload 1',
  },
  {
    id: 2,
    url: 'https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=1024x1024&w=is&k=20&c=JZoUa-ouoJKnDXSaCbkqZtLQxR0KVdmvE4iz7kebTOo=',
    title: 'Donwload 2',
  },
  {
    id: 1,
    url: 'https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=1024x1024&w=is&k=20&c=JZoUa-ouoJKnDXSaCbkqZtLQxR0KVdmvE4iz7kebTOo=',
    title: 'Donwload 1',
  },
  {
    id: 2,
    url: 'https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=1024x1024&w=is&k=20&c=JZoUa-ouoJKnDXSaCbkqZtLQxR0KVdmvE4iz7kebTOo=',
    title: 'Donwload 2',
  },
  {
    id: 1,
    url: 'https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=1024x1024&w=is&k=20&c=JZoUa-ouoJKnDXSaCbkqZtLQxR0KVdmvE4iz7kebTOo=',
    title: 'Donwload 1',
  },
  {
    id: 2,
    url: 'https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=1024x1024&w=is&k=20&c=JZoUa-ouoJKnDXSaCbkqZtLQxR0KVdmvE4iz7kebTOo=',
    title: 'Donwload 2',
  },
  {
    id: 1,
    url: 'https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=1024x1024&w=is&k=20&c=JZoUa-ouoJKnDXSaCbkqZtLQxR0KVdmvE4iz7kebTOo=',
    title: 'Donwload 1',
  },
  {
    id: 2,
    url: 'https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=1024x1024&w=is&k=20&c=JZoUa-ouoJKnDXSaCbkqZtLQxR0KVdmvE4iz7kebTOo=',
    title: 'Donwload 2',
  },
 
];
export function DownloadScreen({navigation}) {
  const {t} = useTranslation();
  const onDownloadClick = url => () => {
    ReactNativeBlobUtil.config({
      addAndroidDownloads: {
        useDownloadManager: true, // <-- this is the only thing required
        // Optional, override notification setting (default to true)
        notification: true,
        // Optional, but recommended since android DownloadManager will fail when
        // the url does not contains a file extension, by default the mime type will be text/plain
        mime: 'file',
        mediaScannable: true,
        description: 'File downloaded by download manager.',
      },
    })
      .fetch('GET', url)
      .then(resp => {
        // the path of downloaded file
        console.log('file donwl', resp);
        resp.path();
      });
  };

  return (
    <ScrollView
      contentContainerStyle={
        Platform.OS === 'android' ? androidStyle.container : iosStyle.container
      }>
      <Headingtext heading={'Downloads'} />

      {items.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              backgroundColor: 'white',
              margin: 20,
              borderRadius: 10,
              padding: 20,
            }}>
            <View style={{flex: 1}}>
              <Image
                source={require('../assests/rcn-logo-red.webp')}
                style={{height: 50, width: 50}}
                alt="download image"
              />
            </View>
            <View style={{flex: 4, alignItems: 'center'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 25,
                  color: colors.textColor,
                }}>
                {item.title}
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Pressable onPress={onDownloadClick(item.url)}>
                <DownloadIcon
                  name="file-download"
                  color={'green'}
                  size={30}
                  style={{fontWeight: 'bold'}}
                />
              </Pressable>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
const iosStyle = StyleSheet.create({
  container: {
    flexGrow:1,
    backgroundColor: colors.backgroundColor,
  },
});
const androidStyle = StyleSheet.create({
  container: {
 //  flex: 1,
   flexGrow:1,
    backgroundColor: colors.backgroundColor,
   // justifyContent: 'center',
  },
});
