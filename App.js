import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './assets/colors';
import Main from './src';

export default function App() {
  return (
    <>
      <StatusBar style="light" barStyle="light-content" backgroundColor={colors.secondary} />
      <Main />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
