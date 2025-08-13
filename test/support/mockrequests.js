const { default: axios } = require("axios")

const mockrequests = {

    getUsers : async () => {
        return await axios.get('http://localhost:8080/v1/user', {
            headers: {
                'Authorization' : 'Bearer abc123'
            }
        })
    },

    createUser : async () => {
        return axios.post('http://localhost:8080/__admin/mappings', {
                "request": {
                  "method": "POST",
                  "url": "/v1/auth/login",
                  "bodyPatterns": [{
                    "equalToJson" : "{\"email\":\"admin@test.com\",\"password\":\"password123\"}"
                  }]
                },
                "response": {
                  "status": 200,
                  "body" : "{\"token\" : \"abc123\",\"admin\": false, \"id\": 2}",
                  "headers": {
                    "Content-Type": "application/json"
                  }
                }
              })
    }

}

module.exports = mockrequests;
