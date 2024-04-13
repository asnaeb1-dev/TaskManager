class Response {
    responseType;
    response;
    constructor(responseType, response) {
        this.responseType = responseType;
        this.response = response;
    }
    
    getResponseType() {
        return this.responseType;
    }
    getResponse() {
        return this.response;
    }
}

export default Response;