import {useNavigation} from '@react-navigation/native';
import React from 'react';
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
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const App = () => {
  const navigation = useNavigation();

  const getItem = (_data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Notices ${index + 1}`,
    subTitle:
      'Lorem Impums Lorem Impums Lorem Impums Lorem Impums Lorem Impums .....',
    date: '2080-08-07',
  });

  const getItemCount = _data => 50;
  const navigateToBlogDetails = blogId => {
    navigation.navigate('DetailsScreen', {blogId});
  };

  const Item = ({title, subTitle, date}) => (
    <Pressable onPress={() => navigateToBlogDetails(title)}>
      <View style={styles.item}>
        <View style={styles.newsWrapper}>
          <Image
            source={require('../assests/news.webp')}
            style={styles.imageStyle}
            alt="news image"
            resizeMode="cover"
          />

         
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </Pressable>
  );
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        initialNumToRender={4}
        renderItem={({item}) => (
          <Item title={item.title} subTitle={item.subTitle} date={item.date} />
        )}
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
