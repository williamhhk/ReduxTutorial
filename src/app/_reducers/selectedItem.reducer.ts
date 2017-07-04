// export const selectedItem = (state: any = null, {type, payload}) => {
//   switch (type) {
//     case 'SELECT_ITEM':
//       return payload;
//     default:
//       return state;
//   }
// };
import { Item } from '../_models/item'

export function selectedItemReducer (state = null, action)  : Item {
  switch (action.type) {
    case 'SELECT_ITEM':
      return action.payload;
    default:
      return state;
  }
};
