import { appState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { sandboxApi } from "./AxiosService.js"

class GiftsService {
    async getGifts() {
            const res = await sandboxApi.get('api/gifts')
            appState.gifts = res.data.map(data => new Gift(data))
        }
    async openGiftById(id) {
        let foundGift = appState.gifts.find(gift => gift.id === id)
        foundGift.opened = true
        console.log(foundGift)
        await sandboxApi.put(`api/gifts/${id}`, foundGift)
        this.getGifts()
    }
    async createGift(giftData) {
        await sandboxApi.post('api/gifts', giftData)
        this.getGifts()
    }
    
    }
export const giftsService = new GiftsService()