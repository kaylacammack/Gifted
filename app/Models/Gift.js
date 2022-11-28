export class Gift {
    constructor(data) {
        this.createdAt = data.createdAt
        this.id = data.id
        this.opened = data.opened
        this.tag = data.tag
        this.updatedAt = data.updatedAt
        this.url = data.url
    }
    get GiftsTemplate() {
        return /*html*/ `
        <div class="col-4 p-4">
			<div class="card" onclick="app.giftsController.openGiftById('${this.id}')">
                <img class="card-img-top" src="${this.opened === true ? this.url : '../../assets/style/WrappedGift.jpeg'}">
                <p class="card-text">${this.opened === true ? this.tag : 'Open Me'}</p>
            </div>
		</div>
        `
    }
}