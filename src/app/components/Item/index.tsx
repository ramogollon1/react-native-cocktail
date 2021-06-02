import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Avatar, Card, ListItem} from 'react-native-elements';
import {ItemProps} from '../../../redux/search/reducer';

export interface Props {
  item: ItemProps;
  onPress: () => void;
}
function Item({item, onPress}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card key={item.id}>
        <ListItem>
          <Avatar size="medium" rounded source={{uri: item.imageUrl}} />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </Card>
    </TouchableOpacity>
  );
}
export default memo(Item);
