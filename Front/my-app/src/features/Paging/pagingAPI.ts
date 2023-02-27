
import axios from 'axios'
import { MY_SERVER, SERVER } from '../../server';
import Products from '../../model/Products';



export function getAllProducts(allProducts=false) {
    const url = allProducts ? `${SERVER}getallProduct/?all=true` : `${SERVER}getallProduct/`;
    return new Promise<{ data: any }>((resolve) =>
        axios.get(url).then(res => resolve({ data: res.data }))
    );
}


export function getNextProds(creds:string) {
    return new Promise<{ data: any }>((resolve) =>
    axios.get(creds)
        .then((res) => resolve({ data: res.data }))
    );
  }

