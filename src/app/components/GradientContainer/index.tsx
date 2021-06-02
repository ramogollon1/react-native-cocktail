import React from 'react';
import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {primary_gradient, secondary_gradient} from '../../../constants/colors';
import styles from './styles';

const GradientContainer = ({children}: any) => {
  return (
    <LinearGradient
      colors={[secondary_gradient, primary_gradient]}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default GradientContainer;
