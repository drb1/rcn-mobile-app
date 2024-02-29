import React from 'react';
import { View, Text } from 'react-native';

const ImageDetailsScreen = ({ route }) => {
  const { blogId } = route.params;

  // Fetch blog details based on blogId and render the content

  return (
    <View>
      <Text>Image Details Screen</Text>
      <Text>Image ID: {blogId}</Text>
      {/* Render the rest of the blog details here */}
    </View>
  );
};

export default ImageDetailsScreen;
