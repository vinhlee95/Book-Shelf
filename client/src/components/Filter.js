import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

import {gql} from 'apollo-boost';
import { Query } from "react-apollo";
import Card from './UI/Card';


const FILTER = gql`
  query Author($name: String) {
    author(name: $name) {
      books {
        name
        genre
      }
    }
  }
`;


class Filter extends Component {
  state = {
    authorName: '', filtering: false
  }

  handleChange = (e) => {
    this.setState({ authorName: e.target.value, filtering: true });
  }

  render() {
    const { authorName, loading } = this.state;

    return (
      <div>
        <TextField
          label="By Author's name"
          placeholder="Type author's name"
          value={this.state.filterAuthorName}
          onChange={e => this.handleChange(e)}
          style={{ width: '50%', marginBottom: 20 }}
        />
        <Query query={FILTER} variables={{ name: authorName}} >
          {(data, loading, error) => {
            if(loading) {
              return <p>Loading...</p>;
            }

            if(error) {
              return <p>Unexpected error occured</p>
            }
            console.log(data.data.author)
            return(
              <div>
                {
                  <div className="book-filter-container" >
                    {
                      data.data.author && data.data.author.books.map(book => {
                      return (
                          <Card
                            key={book.id}
                            bookName={book.name}
                            genre={book.genre}
                            className="book-card"
                          />
                        )
                      })
                    }
                  </div>

                }
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}


export default Filter;
