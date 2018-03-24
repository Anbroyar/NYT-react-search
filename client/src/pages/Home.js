import React, { Component } from 'react';
import API from '../utils/API';
import { List, ListItem } from '../components/List';
import { Input, FormBtn} from '../components/Form';
import { Container, Row, Col } from '../components/Grid';

class Home extends Component {
  state = {
      articles: [],
      topic: '',
      startDate: '',
      endDate: ''
      
    };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
        API.search(this.state.topic)
            .then(res => this.setState({ articles: res.docs }))
            .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Row>
            <Col md="12">
                <h1>New York Times Scrapper</h1>
            <form>
                <label>Topic</label>
                <Input 
                    value={this.state.topic}
                    onChange={this.handleInputChange}
                    name="topic"
                    placeholder="Article Search"
                />
                <label>Start Year</label>
                <Input 
                    value={this.state.startDate}
                    onChange={this.handleInputChange}
                    name="startDate"
                />
                <label>End Year</label>
                <Input 
                    value={this.state.endDate}
                    onChange={this.handleInputChange}
                    name="endDate"
                />
                <FormBtn 
                    disabled={!(this.state.topic)}
                    onClick={this.handleFormSubmit}
                    className="btn btn-search">
                    Search
                </FormBtn>
            </form>
            </Col>
        </Row>
        
        <Row id="results">
            <Col md="12">
            {this.state.articles.length ? (
                <List>
                    {this.state.articles.map(article => (
                        <ListItem key={article._id}>
                            <h3>{article.headline.main}</h3>
                            <h5>{article.pub_date}</h5>
                            <h5><a href={article.web_url}>Full Article is Here</a></h5>
                        </ListItem>
                    ))}
                </List> 
            ) : (
                    <h1>No Results!</h1>
                )}
            </Col>
        </Row>
      </Container>
    );
  }
};

export default Home;