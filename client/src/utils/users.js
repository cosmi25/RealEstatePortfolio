import axios from "axios";

export default {
    login: function (newUser) {
        return axios.post("/login", newUser)
    }
};