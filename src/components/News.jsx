import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
  Dimensions,
} from 'react-native';
import {useNewsData} from '../hooks/useQueryData';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const App = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const dataFetch = useNewsData();
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

  const getItem = (data, index) => data[index];

  const getItemCount = _data => data.length;
  const navigateToBlogDetails = id => {
    //console.log('blog id',blogId)
    navigation.navigate('DetailsScreen', {id});
  };
  const renderItem = ({item}) => (
    <Pressable onPress={() => navigateToBlogDetails(item.url)}>
      <View style={styles.item}>
        <View style={styles.newsWrapper}>
          <Image  
            source={{
              uri: item.image,
            }}
            style={styles.imageStyle}
            alt="news image"
            resizeMode="cover"
          />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          <Text style={styles.date}>{item.createdAt}</Text>
        </View>
      </View>
    </Pressable>
  );
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#fff',
    // height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    elevation: 5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 32,
    color: 'blue',
  },
  subTitle: {
    fontSize: 17,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
  },
  imageStyle: {
    height: height * 0.2,
    width: '100%',
    objectFit: 'cover',
  },
  newsWrapper: {
    // display: 'flex',
    //flexDirection: 'row',
    // alignItems: 'center',
    gap: 4,
  },
});

export default App;
