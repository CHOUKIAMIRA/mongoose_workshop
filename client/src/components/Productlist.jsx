import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteproduct, getProducts } from '../redux/actions/actionProduct'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { toast } from 'react-toastify';
function Productlist() {
    const dispatch=useDispatch()
    const msg=useSelector(state=>state.productreducer.msg)
    useEffect(()=>{
        dispatch(getProducts())
      if(msg!==""){
       toast.success(msg,{
        className:"toast-dar"
       }) 
      }
    },[msg])
    const products=useSelector(state=>state.productreducer.products)
   
    console.log(products,msg)
    
  return (
    
    <div>
       
        {products.map(e=>
        <Card style={{ width: '18rem' }}>
          <Card.Text>
         publié le : {e.createdAt.slice(0,10)}
        </Card.Text>  
      <Card.Img variant="top" src={e.image} />
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
          {e.description}
        </Card.Text>
        <Card.Text>
          {e.price}
        </Card.Text>

        <Button variant="danger" onClick={()=>dispatch(deleteproduct(e._id))}>Delete</Button>
      </Card.Body>
    </Card>
    )}
    </div>
  )
}

export default Productlist
