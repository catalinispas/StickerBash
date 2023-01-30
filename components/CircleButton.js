import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function CircleButton({ onPress, icon, label }) {
  return (
    <View style={[styles.buttonContainer]}>
      <Pressable
        style={[styles.button, { backgroundColor: '#fff' }]}
        onPress={onPress}
      >
        <FontAwesome name={icon} size={24} color='black' />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 128,
    height: 128,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 64,
  },
  button: {
    borderRadius: 64,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
