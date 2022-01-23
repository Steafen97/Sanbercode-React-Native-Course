import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Telegram from './Tugas/Tugas-12/Telegram';
import RestApi from './Tugas/Tugas-14/RestApi';
import Tugas15 from './Tugas/Tugas-15/index';
import Quiz3 from './Quiz-3/index';

export default function App() {
  return (
    //<Telegram/>
    //<RestApi/>
    //<Tugas15/>
    <Quiz3/>
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
