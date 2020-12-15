import React from 'react';
import {
  StyleSheet, Text, StatusBar, View,
  TouchableOpacity
} from 'react-native';

export default function App() {
  return (<>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text>LOGO</Text>
      </View>
      <TouchableOpacity activeOpacity={0.6} style={styles.button}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7159c1',
    flex: 1,
  },
  logo: {
    backgroundColor: '#F1F5F9',
    height:200,
    marginTop: '30%',
    marginHorizontal: '5%',
    alignItems:'center',
    justifyContent:'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: '5%',
    marginBottom: '30%',
  },
  buttonText: {
    fontSize: 25,
    fontWeight:'bold',
    marginVertical:'2%',
  }
});
