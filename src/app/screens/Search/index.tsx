import React, {memo, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {queryItems} from '../../../redux/search/reducer';
import {RootState} from '../../../redux/store';
import SearchContainer from './layout';

function Search() {
  const dispatch = useDispatch();
  const [searchValue, setSearchedValue] = useState('');
  const {fetching, items} = useSelector((state: RootState) => state.app);

  const updateSearch = useCallback(
    (query: string) => {
      setSearchedValue(query);
      if (query.length > 2) {
        dispatch(queryItems(query));
      }
    },
    [dispatch, setSearchedValue],
  );
  return (
    <SearchContainer
      updateSearch={updateSearch}
      searchValue={searchValue}
      loading={fetching}
      items={items}
    />
  );
}
export default memo(Search);
