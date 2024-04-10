import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { memo } from 'react'
import Card from 'react-bootstrap/Card';

export const UserCard = memo(( userItem ) => {
    const [show, setShow] = useState(false);    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="mb-4">
                <Card.Header>{`${userItem.firstName.toUpperCase() || ''}`}</Card.Header>
                <Card.Body>
                  <Card.Title>{`Профессия - ${userItem.password || ''}`}</Card.Title>
                  <Card.Text>
                    {`Почта: ${userItem.email || ''}`}
                  </Card.Text>
                  <Button variant="primary" onClick={handleShow}>Профиль пользователя</Button>
                </Card.Body>
            </Card>
        </>
  );
})
