import axios from 'axios'
const instance=axios.create({
    baseURL:'http://www.meihigo.hk',
    timeout:10000,
});
export default instance