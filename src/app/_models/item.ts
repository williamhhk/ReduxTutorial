// export interface IItem {
//   hostname: string;
//   ipaddress : string;
//   queryType : string;
// };



export class Item {
  constructor(
    public hostname: string,
    public ipaddress: string,
    public queryType: string,

  ) { }
}