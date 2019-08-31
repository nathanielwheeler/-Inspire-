export default class Quote {

    constructor(data) {
        this.author = data.quote.author
        this.body = data.quote.body
    }

    get Template() {
        return `
        <div class="quote-card"
            <h5>${this.body}</h5>
            <h6>— ${this.author}</h6>
        </div>
        `
    }
}