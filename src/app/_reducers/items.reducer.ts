export function itemsReducer (state = [], action) : any {
  console.log(action);
    switch (action.type) {
         case 'ADD_CLIENT':
          return [
            ...state,
            Object.assign({}, {ipaddress: action.payload.IPAddress, hostname: action.payload.HostName[0], queryType : action.payload.Type})
          ];           
         case 'DELETE_CLIENT':
            return state.filter(item => {
              return item !== action.payload;
            });
         default:
            return state;
    }
};