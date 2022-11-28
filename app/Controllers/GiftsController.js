import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { giftsService } from "../Services/GiftsService.js"
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

export class GiftsController {
    #gifts
    constructor() {
        appState.on('gifts', () => {this.#gifts = appState.gifts})
        appState.on('gifts', () => _drawGifts(this.#gifts))
    }
    async getGifts() {
        try {
            _getGifts()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }
    async openGiftById(id) {
        try {
            _openGiftById(id)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }
    async createGift() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            let giftData = getFormData(form)
            _createGift(giftData)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }
}

function _drawGifts(gifts = [new Gift()]) {
    let template = ''
    gifts.forEach(g => {
        template += g.GiftsTemplate
    });
    setHTML('gifts', template)
}
async function _getGifts() {
    giftsService.getGifts()
}
async function _openGiftById(id) {
    giftsService.openGiftById(id)
}
async function _createGift(giftData = Gift) {
    giftsService.createGift(giftData)
}