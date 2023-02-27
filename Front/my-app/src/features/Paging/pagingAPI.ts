
import axios from 'axios'
import { MY_SERVER, SERVER } from '../../server';
import Products from '../../model/Products';



export function getAllProducts() {
    return new Promise<{ data: any }>((resolve) =>
        axios.get(SERVER+"getallProduct/").then(res => resolve({ data: res.data }))
    );
}

// export function getAllProducts(allProducts = false) {
//     const url = allProducts ? `${SERVER}myProducts?all=true` : `${SERVER}myProducts`;
//     return new Promise<{ data: any }>((resolve) =>
//       axios.get(url).then((res) => resolve({ data: res.data }))
//     );
//   }
export function getNextProds(creds:string) {
    return new Promise<{ data: any }>((resolve) =>
    axios.get(creds)
        .then((res) => resolve({ data: res.data }))
    );
  }

