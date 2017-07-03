export const items = (state: any = [], action) => {
	console.log("got called");
    switch (action.type) {
         case 'ADD_CLIENT':
      return [
        ...state,
        Object.assign({}, {ipaddress: action.payload.ipaddress, hostname: action.payload.hostname, queryType : action.payload.queryType})
      ];           
        default:
            return state;
    }
};