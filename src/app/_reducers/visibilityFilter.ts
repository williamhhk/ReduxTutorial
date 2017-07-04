export const ALL = 'ALL'
export const COMPLETE = 'COMPLETE'
export const PENDING = 'PENDING'

export const visibilityFilterReducer = (state = (todo) => true, {type}) => {
	console.log(state);
  switch(type){
    case ALL:
      return (todo) => true;
    case COMPLETE:
      return (todo) => todo.completed;
    default:
      return state;
  }
}