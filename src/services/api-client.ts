import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api', 
    params:{
        key:'b93729931e1e41f7841a325577f7bf09'
    }
})