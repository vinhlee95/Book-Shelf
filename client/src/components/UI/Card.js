import React from 'react';
import {Card, Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  bottomContainer: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'
  }
}

const SimpleCard = (props) => {
  return (
      <Card className={props.className}>
          <h2> {props.bookName}</h2>
          <div style={styles.bottomContainer}>
            <div>
            <p>{props.genre}</p>
            <p style={{ marginBottom: 0, fontWeight: 'bold' }}>{props.authorName}</p>
            </div>
            <Button 
              variant="fab" 
              color='secondary' 
              aria-label="Delete"
              style={{ height: 40, width: 40 }}
              onClick={props.onClick} >
              <DeleteIcon />
            </Button>
          </div>
      </Card>
  );
}

export default SimpleCard;