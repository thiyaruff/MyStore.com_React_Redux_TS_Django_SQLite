
import axios from 'axios'
import Reviews from '../../model/Reviews';
import {SERVER } from '../../server';



export function addReview(review: Reviews) {
    console.log(review)
    return new Promise<{ data: any }>((resolve) =>
        axios.post(SERVER+"addreviews/" + review.product, review ,{
            headers: {"content-type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('access')}`
            }
        }).then(res => resolve({ data: res.data }))
    );
}
