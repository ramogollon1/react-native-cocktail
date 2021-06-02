import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Gradient from '../../components/GradientContainer';
import styles from './styles';
import List from '../../components/ListItem';
import {isIos} from '../../../constants/platform';
import {ItemProps} from '../../../redux/search/reducer';

interface Props {
  updateSearch: (query: string) => void;
  loading: boolean;
  items: ItemProps[];
  searchValue: string;
}

function SearchContainer({updateSearch, loading, items, searchValue}: Props) {
  const handleOnPressItem = () => console.log('press item');
  return (
    <Gradient>
      <SearchBar
        platform={isIos ? 'ios' : 'android'}
        placeholder="Search"
        onChangeText={updateSearch}
        value={searchValue}
      />
      {loading && (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      )}
      {!loading && <List items={items} onPress={handleOnPressItem} />}
    </Gradient>
  );
}
export default SearchContainer;
