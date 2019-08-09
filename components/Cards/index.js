// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

/*
list of articles obj 

bootstrap
javascript
jquery
node
technology
*/
const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        res.data.articles.bootstrap.forEach(ele => {
            cardsContainer.appendChild(createCard(ele))
        })

        res.data.articles.jquery.forEach(ele => {
            cardsContainer.appendChild(createCard(ele))
        })

        res.data.articles.node.forEach(ele => {
            cardsContainer.appendChild(createCard(ele))
        })

        res.data.articles.technology.forEach(ele => {
            cardsContainer.appendChild(createCard(ele))
        })
    })



function createCard(obj){
    const card = document.createElement('div');
    card.classList.add('card');

    //nested in card
    const headline = document.createElement('div')
    headline.classList.add('headline');
    headline.textContent = obj.headline

    //nested in card
    const author = document.createElement('div')
    author.classList.add('author');

    //nested in author
    const authorImgContainer = document.createElement('div')
    authorImgContainer.classList.add('img-container');

    //nested in authorImgContainer
    const authorImg = document.createElement('img')
    authorImg.src = obj.authorPhoto

    //nested in author
    const authorName = document.createElement('span')
    authorName.textContent = obj.authorName

    card.appendChild(headline)
    card.appendChild(author)

    author.appendChild(authorImgContainer)
    author.appendChild(authorName)

    authorImgContainer.appendChild(authorImg)

return card
}