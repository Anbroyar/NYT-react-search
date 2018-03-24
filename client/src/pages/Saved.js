import React, { Component } from 'react';
import { List, ListItem } from '../components/List';
import API from '../utils/API';
import { Container, Row, Col } from '../components/Grid';

class Saved extends Component {
  state = {
    articles: []
  };

  loadArticles = () => {
    API.getSaved()
      .then(res => {
        this.setState({articles: res.data});
      }
      )
      .catch(err => console.log(err));
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => {
        this.loadArticles();
      })
      .catch(err => console.log(err));
  }

  componentDidMount = () => {
    this.loadArticles();
  }

  render() {
    return (
    <Container>
        <Row>
            <Col md="12">
                <h1>SAVED ARTICLES</h1>
            {this.state.articles.length ? (
                <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <h1><a href={article.web_url} target="_blank">{article.headline}</a></h1>
                    <a key={article._id} onClick={() => this.deleteArticle(article._id)}> Delete</a>
                  </ListItem>
                ))}
                </List>
            ) : (
                <h3>There are no saved articles.</h3>
            )}
            </Col>
        </Row>
    </Container>
    );
  }
}

export default Saved;