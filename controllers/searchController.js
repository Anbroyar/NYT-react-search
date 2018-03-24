const axios = require('axios');

module.exports = {
  search: (req, res) => {
    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': process.env.NYT_API_KEY,
        'q': req.query.topic,
        'begin_date': req.query.startDate,
        'end_date': req.query.endDate
      }
    })
      .then(data => {
        res.json(data.data.response.docs);
      })
      .catch(err => res.status(422).json(err));
  },
};