
import axios from 'axios'
import { MY_SERVER, SERVER } from '../../server';
import Profile from '../../model/Profile';


export function addProfile(profile: any) {
    console.log(profile)
    return new Promise<{ data: any }>((resolve) =>
        axios.put(SERVER+"updProfile/", profile ,{
            headers: {"content-type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('access')}`
            }
        }).then(res => resolve({ data: res.data }))
    );
}
