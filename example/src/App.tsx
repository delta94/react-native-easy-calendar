import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import Basic from './Calendars/Basic';
import Locales from './Calendars/Locales';
import DisabledDates from './Calendars/DisabledDates';
import MinMaxDates from './Calendars/MinMaxDates';
import ForbidYearView from './Calendars/ForbidYearView';
import CustomComponents from './Calendars/CustomComponents';
import DarkDimensions from './Calendars/DarkDimensions';
import LightDimensions from './Calendars/LightDimensions';

const App = () => {
  return (
    <View testID={'App'}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView testID={'scroll-view'}>
          <Basic />
          <Locales />
          <DisabledDates />
          <MinMaxDates />
          <ForbidYearView />
          <DarkDimensions />
          <LightDimensions />
          <CustomComponents />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
  },
});

export default App;
