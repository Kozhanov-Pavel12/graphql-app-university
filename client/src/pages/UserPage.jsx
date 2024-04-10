import React, { useState, useEffect } from 'react'
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export const UserPage = ( userItem ) => {
    const { error, loading, data } = useQuery(LOAD_USERS);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      if (data) {
        setUsers(data.getAllUsers);
      }
    }, [data]);

    if(loading) {
        return <h4>Загрузка...</h4>
    }

    if(error) {
        return <h4 style={{marginLeft: '4rem'}}>Произошла ошибка при загрузке данных</h4>
    }

    return (
        <Container>
            {
                users ? users.map((val) => (
                    <Card className="mb-4">
                        <Card.Header>{`${val.firstName.toUpperCase() || ''}`}</Card.Header>
                        <Card.Body>
                          <Card.Title>{`Профессия - ${val.password || ''}`}</Card.Title>
                          <Card.Text>
                            {`Почта: ${val.email || ''}`}
                          </Card.Text>
                        </Card.Body>
                    </Card>
                )) : <div>Загрузка...</div>
            }
        </Container>
  );
}
