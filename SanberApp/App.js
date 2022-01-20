import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Telegram from './Tugas/Tugas-12/Telegram';
import RestApi from './Tugas/Tugas-14/RestApi';

export default function App() {
  return (
    //<Telegram/>
    <RestApi/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
