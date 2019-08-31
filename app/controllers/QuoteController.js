import QuoteService from "../services/QuoteService.js";

let _qs = new QuoteService()

function _drawQuote() {
    console.log('drawin quote hopefully');

    document.getElementById('quote').innerHTML = _qs.Quote.Template
}

//TODO Create methods for constructor, and rendering the quote to the page 
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
    constructor() {
        _qs.addSubscriber('quote', _drawQuote)
        _qs.getQuote()
    }

}
