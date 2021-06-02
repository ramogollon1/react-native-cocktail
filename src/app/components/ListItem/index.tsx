import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import Item from '../Item';
import {ItemProps} from '../../../redux/search/reducer';

interface Props {
  items: ItemProps[];
  onPress: () => void;
}

function ListItem({items, onPress}: Props) {
  return (
    <ScrollView>
      {items &&
        items.map((item: ItemProps) => (
          <Item key={item.id} item={item} onPress={onPress} />
        ))}
    </ScrollView>
  );
}

export default memo(ListItem);
