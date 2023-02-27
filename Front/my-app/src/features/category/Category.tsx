import React, { useEffect, useState } from 'react'
import { addCategoryAsync, getCatsAsync, selectCategory } from './categorySlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { selectProducts } from '../Paging/pagingSlice';


const Category = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategory);
  const products = useAppSelector(selectProducts);
  const [name, setname] = useState("")
  const [category, setcategory] = useState(0)

  useEffect(() => {

    dispatch(getCatsAsync())
    // dispatch(getAllProductsAsync())
  }, [dispatch])
  return (
    <div>
      <p>Choosh category to see the products: </p>
 <select onChange={(e) => setcategory(+e.target.value)}>{categories.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}</select>
 <Row xs={3} md={4} className="g-4">
        {products.results && products.results.map((product:any, index:any) =>
          <div key={index}>{product.category===category &&
            <Col>
              <Card border="primary" style={{ width: '18rem' }}>
              <Card.Title>{product.desc}</Card.Title>
              Price:{product.price} 
              <Card.Img variant="top" src={'http://127.0.0.1:8000' + product.image} height="200" />
             
             
              </Card>
            </Col>}
          </div>)}
      </Row>
 
          <Form>
            <Form.Group className="g-2" controlId="formBasicName">
              <h1>Add A New Category </h1>
              <Form.Label>Name:</Form.Label>
              <Form.Control type="name" placeholder="Name" onChange={(e) => setname(e.target.value)} />
            </Form.Group>
          </Form>
          <Button onClick={() => dispatch(addCategoryAsync({ name }))}>Add New Category</Button>
   

        </div>

      )
      }

      export default Category