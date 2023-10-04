import React, { useEffect } from "react";
import { Col, Container, Row,Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Item from "../components/Item";


const Cart = () => {
    const [totalAmount, setTotalAmount] = React.useState(0);
    const cart = useSelector((state) => state.cart.cart);
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
      }, [cart]);
    
    return (
        <div>
            <Container>
            {cart.length>0 ?(
                <Row>
                    <Col md={6} lg={6} sm={12} xs={12} >
                         {/*
                         {cart.map((item) => {
                            return (
                                <div className="d-md-flex align-items-center mt-4 mb-3">
                                    <div >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="img-fluid"
                                            style={{ height: "180px" }}
                                        />
                                    </div>
                                    <div style={{marginLeft:"10px"}}>
                                    <div>{item.title}</div><br/>
                                    <div>Rs {item.price}</div>
                                    </div>
                                </div>
                            );
                        })}
                */} 
                {cart.map((item)=>{
                        return <Item key={item.id} item={item}/>
                })}

                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12} className="mt-4 text-center">
                        <h5 className="bgclr ">Product Summary</h5>
                        <h6 className="mt-4"><span className="font-weight-600">Total Items </span>: {cart.length}</h6>
                        <h6 className="mt-4"><span className="font-weight-600">Total Amount </span> : Rs {totalAmount}</h6>
                        <Button variant="outline-success" className="mt-4">Check Out Now</Button>
                    </Col>
                </Row>
            ):(
                <div>Cart Is Empty</div>
            )
            }
            </Container>
        </div>
    );
};

export default Cart;
