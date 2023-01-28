import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

// Components Imports
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>

      <View style={styles.footerContainer}>
        <Button
          theme='secondary'
          onPress={pickImageAsync}
          label='Choose a photo'
        />
        <Button label='Use this photo' />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 32,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
