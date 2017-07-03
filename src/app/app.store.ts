import { Item } from './_models/item'
import { counter } from './_reducers/counter.reducer'

export interface AppStore {
	clientItems : Item[];
	selectedItem : Item;
	counter : number;
}

// export const appStore = {
//     counter: counter
// }