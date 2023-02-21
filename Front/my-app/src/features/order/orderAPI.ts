import axios from 'axios'
import { SERVER } from '../../server';

export function addOrder(creds:any) {
  console.log(creds);
  return new Promise<{ data: any }>((resolve) =>
    axios
      .post(SERVER + "order", creds,{headers:{'Authorization': `Bearer ${localStorage.getItem('access')}`
    } })
      .then((res) => resolve({ data: res.data }))
  );
}

export function getMyOrder() {
  return new Promise<{ data: any }>((resolve) =>
      axios.get(SERVER+"getOrders/",{headers:{'Authorization': `Bearer ${localStorage.getItem('access')}`
    } }).then(res => resolve({ data: res.data }))
  );
}
