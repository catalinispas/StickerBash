import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Button({ label, theme, onPress }) {
  if (theme === 'secondary') {
    return (
      <View style={[styles.buttonContainer]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={onPress}
        >
          <FontAwesome
            name='picture-o'
            size={18}
            color='#25292e'
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('Pressed')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 60,
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
