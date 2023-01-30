import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function IconButton({ onPress, icon, label }) {
  return (
    <View style={[styles.buttonContainer]}>
      <Pressable
        style={[styles.button, { backgroundColor: '#fff' }]}
        onPress={onPress}
      >
        <FontAwesome name={icon} size={24} color='black' />
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 64,
    height: 64,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  button: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
