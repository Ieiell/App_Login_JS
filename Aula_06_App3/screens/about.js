import * as React from 'react';
import { View, Text, Button } from 'react-native';

function AboutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>About Screen</Text>
            <Button title='Ir para Home' onPress={() => navigation.navigate('home')} />
        </View>
    );
}
export default AboutScreen;