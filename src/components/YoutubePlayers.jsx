import React from 'react';
import {View, StyleSheet} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const YoutubePlayers = ({height, play, videoId, onChangeState}) => {
  // Function to extract video ID from YouTube URL
  const extractVideoId = url => {
    let videoId = '';
    const match = url.match(/[?&]v=([^&]+)/);
    if (match) {
      videoId = match[1];
    } else {
      // If the URL doesn't match the standard format, you may need additional handling here.
      console.warn('Invalid YouTube URL');
    }
    return videoId;
  };

  // Extract video ID from the URL
  const videoIds = extractVideoId(videoId);

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={height}
        play={play}
        videoId={videoIds}
        onChangeState={onChangeState}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  youtube: {
    alignSelf: 'stretch',
    height: 300,
  },
});

export default YoutubePlayers;
