import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Pharmacy App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // ہلکا خاکستری پس منظر
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // فونٹ سائز 24
    color: '#333', // گہرا خاکستری رنگ
  },
});