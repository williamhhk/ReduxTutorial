import { Item } from './_models/item'
import { counterReducer } from './_reducers/counter.reducer'
import { itemsReducer } from './_reducers/items.reducer'
import { selectedItemReducer } from './_reducers/selectedItem.reducer'

export interface AppStore {
	itemsState : Item[];
	selectedItemState : Item;
	counterState : number;
}

export const appStore = {
    counterState: counterReducer,
	itemsState : itemsReducer,
	selectedItemState : selectedItemReducer
}