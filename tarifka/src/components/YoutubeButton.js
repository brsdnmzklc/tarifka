import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

const YoutubeButton = ({url}) => {
  const pressHandler = () => {
    if (url.length > 0) {
      Linking.openURL(url).catch(err =>
        console.error("Couldn't load page", err),
      );
    }
    Alert.alert('Something went wrong');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={pressHandler}>
      <Text style={styles.text}>Watch on Youtube</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default YoutubeButton;
