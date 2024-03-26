import {Dimensions, Image, Linking, Text, View} from 'react-native';
import Headingtext from './ScreenHeadline';
import Icon from 'react-native-vector-icons/AntDesign';
import TiktokIcon from 'react-native-vector-icons/MaterialIcons';
import {useEffect, useState} from 'react';
import {useSocialMediaData} from '../hooks/useQueryData';
import Spinner from './Spinner';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const SocialMedia = () => {
  const socialMedia = useSocialMediaData();
  const [socialData, setSocialData] = useState([]);
  const [dataReady, setDataReady] = useState(false);

  console.log('spcial data list', socialData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await socialMedia.refetch();
        // message.success("Category List Successfully refetched.");

        if (socialMedia.data && socialMedia.data.data) {
          setSocialData(socialMedia.data.data);
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

    if (socialMedia.data) {
      fetchData();
    }
  }, [socialMedia.data]);
  return (
    <View style={{flex: 1, flexGrow: 1}}>
      <Headingtext heading={'Let us connect'} />
      <View
        style={{
          backgroundColor: 'gray',
          borderRadius: 10,
          margin: 20,
          flexGrow: 1,
          flexDirection: 'row',
        }}>
        {dataReady ? (
          socialData.map((item, index) => {
            return (
              <View
                key={index}
                onPress={() => {
                  Linking.openURL('tel:119');
                }}
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  padding: 20,
                  alignItems: 'center',
                  flexGrow: 1,
                  justifyContent: 'center',
                }}>
                <View>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    alt="image"
                    // style={{borderRadius: 10}}
                    height={50}
                    width={50}
                    resizeMode="cover"
                  />
                </View>
              </View>
            );
          })
        ) : (
          <Spinner />
        )}
      </View>
    </View>
  );
};

export default SocialMedia;
