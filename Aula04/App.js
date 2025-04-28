import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 300 }}
        source={{
          uri: 'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2015%2F10%2F12%2F16%2FLogo-165716_73236_163916519_1069725254.jpg'
        }}
      />
      <Text>Hamburgueria</Text>
      <TextInput style={styles.input}>
      </TextInput>
      <Button title='Logar'
        color='red'
        onPress={() => alert('Entrando')}>
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
