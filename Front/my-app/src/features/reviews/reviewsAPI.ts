
import axios from 'axios'
import Reviews from '../../model/Reviews';
import {SERVER } from '../../server';



export function addReview(review: Reviews) {
    console.log(review)
    return new Promise<{ data: any }>((resolve,reject) =>
        axios.post(SERVER+"addreviews/" + review.product, review ,{
            headers: {"content-type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('access')}`
            }
        }).then(res => resolve({ data: res.data })).catch((error)=>reject(error.data))
    );
}

export function getReviewsPerProduct(pk:number) {
    return new Promise<{ data: any }>((resolve) =>
        axios.get(SERVER + 'getReviews/' + `${pk}/`).then(res => resolve({ data: res.data }))
    )
}