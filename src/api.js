import axios from 'axios';

export default class Api {

    constructor(api) {
        this.api = api;
    }

    getData = async () => {
        try {
            const response = await axios.get(this.api);
            return response;
        } catch (err) {
            console.log(err)
        }
    }




}