// export const counter = (state: any = 0, {type, payload}) => {
//     switch (type) {
//         case 'INCREMENT':
//             return state  + 1;
            
//         case 'DECREMENT':
//             return state - 1;           
//         default:
//             return state;
//     }
// };


//  Compile error 
// https://github.com/angular/angular-cli/issues/3707
export function counterReducer (state = 0, action : {type, payload}) : number {
    switch (action.type) {
        case 'INCREMENT':
            return state  + 1;
            
        case 'DECREMENT':
            return state - 1;           
        default:
            return state;
    }
};