import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import News from '../components/News';
import Notices from '../components/Notices';

const HomeScreen = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        // variant="primary"
      >
        <Tab.Item
          title="News"
          titleStyle={{fontSize: 12}}
          icon={{name: 'news', type: 'entypo', color: 'red'}}
        />
        <Tab.Item
          title="Notices"
          titleStyle={{fontSize: 12}}
          icon={{name: 'notifications', type: 'ionicon', color: 'red'}}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: '#fbe2e2', width: '100%'}}>
          <News />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: '#fbe2e2', width: '100%'}}>
          <Notices />
        </TabView.Item>
      </TabView>
    </>
  );
};

export default HomeScreen;
