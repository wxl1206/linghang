import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.56.165.41:8885',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  
  return instance(config)
}

// instance(config)
//   .then(res => {
//     // console.log(res);
//     success(res);
//   })
//   .catch(err => {
//     // console.log(err);
//     failure(err)
//   })

