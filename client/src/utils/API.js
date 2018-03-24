import axios from 'axios';

export default {
  search: (topic, startDate, endDate) => {
    return axios.get('/search', { params: { topic: topic, startDate: startDate, endDate: endDate } });
  },
  getSaved: () => {
    return axios.get('/api/articles');
  },
  saveArticle: (articleData) => {
    return axios.post('/api/articles', articleData);
  },
  deleteArticle: (id) => {
    return axios.delete(`/api/articles/${id}`);
  },
  findById: (id) => {
    return axios.get(`/api/articles/${id}`);
  }
};