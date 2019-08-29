import Axios from 'axios';

class RedditService {
  reddit = 'https://www.reddit.com';

  isError(res) {
    if (res.status !== 200) {
      throw new Error(`Could not fetch ${this.reddit}: ${res.config.url}`
      + `, recieved ${res.status}`);
    }
  }

  getData = async (url) => {
    const res = await Axios.get(`${this.reddit}${url}`);
    await this.isError(res);
    return res.data.data.children;
  }
}

export default RedditService;
