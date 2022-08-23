import React from 'react'
import { Card } from 'react-bootstrap';
import { Avatar } from 'antd';

import './Post.css'

export const Post = () => {
  return (
    <Card className='post-card'style={{ width: '100%' }}>
      <Card.Body>
        <div style={{ display: 'flex' }}>
          <Avatar>U</Avatar>
            <p>Senelith Perera</p>
            <p>18/09/2001</p>
        </div>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <div>
        Like

        comment
      </div>
    </Card>
  )
}
