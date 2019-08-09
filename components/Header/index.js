// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {

    const newHeader = document.createElement('div');
    newHeader.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'SMARCH 28, 2019'

    const title = document.createElement('h1');
    title.textContent = 'Lambda Times'

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°'

    newHeader.appendChild(date)
    newHeader.appendChild(title)
    newHeader.appendChild(temp)


    return newHeader
}

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header())