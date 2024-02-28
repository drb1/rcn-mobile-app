import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { blogId } = route.params;

  // Fetch blog details based on blogId and render the content

  return (
    <View>
      <Text>Blog Details Screen</Text>
      <Text>Blog ID: {blogId}</Text>
      {/* Render the rest of the blog details here */}
    </View>
  );
};

export default DetailsScreen;
