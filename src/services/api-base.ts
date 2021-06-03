import axios from 'axios';

export const apiGet = async (url: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
  
          } else {
            reject(err.response.data);
          }
        } else {
          if (err.request) {
            reject(err.request);
          } else {
            console.log('Error', err.message);
          }
        }
      });
  });
};
