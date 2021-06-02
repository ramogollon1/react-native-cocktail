import React from 'react';
import {Text, View, Image} from 'react-native';
import {Button} from 'react-native-elements';
import glassPNG from '../../assets/glass.png';
import styles from './styles';
import Gradient from '../../components/GradientContainer';

const HomeContainer = ({onPress}: any) => {
  return (
    <Gradient>
      <View style={styles.content}>
        <Image source={glassPNG} resizeMode="cover" />
        <Text style={styles.title}>
          <Text style={styles.bold}>CockTail</Text>
          Finder
        </Text>
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          title="Search your favorite cocktail"
          onPress={onPress}
        />
      </View>
    </Gradient>
  );
};
export default HomeContainer;
