import cards from "../data/cards.js";
import ResponseDto from "../models/responseDto.js";

/**
 * @param { {number: string, expiration: string} } body 
 * @returns { ResponseDto }
 */
export const processPayment = (body) => {

    try {
        
        const card = cards.find(element => element.number === body.number)
        if (!card) {
            return new ResponseDto(1, "Card is not valid")
        }
        return new ResponseDto(2, card.result)

    } catch (error) {
        throw new Error("An error has ocurred")
    }

}