import { View, Image } from 'react-native';

export default function EmojiSticker({ imageSize, stickerSource }) {
  return (
    <View>
      <Image
        source={stickerSource}
        resizeMode='contain'
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
