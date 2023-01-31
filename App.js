// Libraries
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';

// Components Imports
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  // States
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  // Permissions
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status === null) {
    requestPermission();
  }

  // Events
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };
  const onReset = () => {
    setShowAppOptions(false);
  };
  const onAddSticker = () => {
    setIsModalVisible(true);
    // TODO Later
  };
  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, { height: 440, quality: 1 });

      await MediaLibrary.saveToLibraryAsync(localUri);

      if (localUri) {
        alert('Saved!');
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };
  const imageRef = useRef();
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
          {pickedEmoji !== null ? (
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
          ) : null}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.containerRow}>
          <IconButton icon='rotate-left' label='reset' onPress={onReset} />
          <CircleButton icon='plus' onPress={onAddSticker} />
          <IconButton icon='download' label='save' onPress={onSaveImageAsync} />
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme='secondary'
            onPress={pickImageAsync}
            label='Choose a photo'
          />
          <Button
            label='Use this photo'
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style='auto' />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  containerRow: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    flexDirection: 'row',
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
