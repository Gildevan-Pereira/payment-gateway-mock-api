class ResponseDto {
    
    /**
     * @param {number} code 
     * @param {string} message 
     */
    constructor(code, message) {
        this.code = code
        this.message = message
    }
}

export default ResponseDto;