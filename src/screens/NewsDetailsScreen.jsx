import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from 'react-native';
import colors from '../lib/colors';
import CalenderIcon from 'react-native-vector-icons/AntDesign';
import TimeIcon from 'react-native-vector-icons/Ionicons';
import {useSingleNewsData} from '../hooks/useQueryData';
const {width, height} = Dimensions.get('window');
import RenderHtml from 'react-native-render-html';

const DetailsScreen = ({route}) => {
  const {id} = route.params;
  const [data, setData] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const dataFetch = useSingleNewsData(id);
  console.log('single data list', data, id);
  const source = {
    html: data?.description,
  };
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
  // Fetch blog details based on blogId and render the content

  return dataReady ? (
    <View style={{flex: 1, flexGrow: 1}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{
            uri: data.image,
          }}
          style={{width: width, height: height * 0.3}}
          alt="news image"
          resizeMode="cover"
        />
      </View>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            padding: 10,
            color: 'black',
          }}>
          {data?.title}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CalenderIcon name="calendar" size={20} color={'red'} />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 12,
                padding: 10,
                color: 'black',
              }}>
              {data?.createdAt}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TimeIcon name="time" size={20} color={'red'} />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 12,
                padding: 10,
                color: 'black',
              }}>
              {data?.createdAt}
            </Text>
          </View>
        </View>
      </View>

      <RenderHtml contentWidth={width} source={source} />
    </View>
  ) : (
    <View
      style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor,
      }}>
      <ActivityIndicator />
    </View>
  );
};

export default DetailsScreen;
