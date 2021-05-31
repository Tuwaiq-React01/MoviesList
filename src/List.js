import React, { Component,useState } from 'react'
import { Button, Card,Collapse } from 'react-bootstrap';
const List = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.all.poster} />
            <Card.Body>
                <Card.Title>{props.all.title}</Card.Title>
                {/* <Card.Text>
                    {props.all.overview}
                </Card.Text> */}
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        {props.all.overview}
                    </div>
                </Collapse>
            </Card.Body>
            <Button onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="primary">Go To movie</Button>
        </Card>
    );
}

export default List;