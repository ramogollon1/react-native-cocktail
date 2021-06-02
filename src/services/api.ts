import {ItemProps} from '../redux/search/reducer';

const searchItems = async (query: string): Promise<ItemProps[]> => {
  const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
  try {
    const response = await fetch(`${API_URL}?s=${query}`);
    const json = await response.json();
    return json.drinks.map((item: any) => {
      return {
        id: item.idDrink,
        imageUrl: item.strDrinkThumb,
        name: item.strDrink,
      };
    });
  } catch (error) {
    throw error;
  }
};

const itemsService = {searchItems};
export default itemsService;
