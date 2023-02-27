import axios from 'axios'
import { SERVER } from '../../server';

export function addOrder(creds:any) {
  console.log(creds);
  return new Promise<{ data: any }>((resolve,reject) =>
    axios
      .post(SERVER + "order", creds,{headers:{'Authorization': `Bearer ${localStorage.getItem('access')}`
    } })
      .then((res) => resolve({ data: res.data })).catch((error)=>reject(error.data))
  );
}

export function getMyOrder() {
  return new Promise<{ data: any }>((resolve,reject) =>
      axios.get(SERVER+"getOrders/",{headers:{'Authorization': `Bearer ${localStorage.getItem('access')}`
    } }).then(res => resolve({ data: res.data })).catch((error)=>reject(error.data))
  );
}
