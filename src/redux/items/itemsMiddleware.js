import mockData from '../../api/mockData.json';
import {
  fetchItemsStart,
  fetchItemsSuccess,
  fetchItemsFailure,
} from './itemsSlice';

export const fetchItemsMiddleware = () => (next) => (action) => {
  if (action.type === fetchItemsStart.type) {
    setTimeout(() => {
      try {
        // In a real-world scenario, you can make api call here!!!
        const data = mockData.items;
        next(fetchItemsSuccess(data));
      } catch (error) {
        next(fetchItemsFailure(error.message));
      }
    }, 1000);
  } else {
    next(action);
  }
};
