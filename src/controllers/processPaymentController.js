import ResponseDto from "../models/responseDto.js"
import { processPayment } from "../services/processPaymentService.js"

/**
 * @param { {body: {number: string, expiration: string}} } req 
 * @param { ResponseDto } res 
 */
export const processPaymentInput = (req, res) => {
    try {
        const response = processPayment(req.body)
        res.status(201).json(response)
      
    } catch (error) {
        res.status(500).json(new ResponseDto(0, error.message))
    }
}