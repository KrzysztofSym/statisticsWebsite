const cards = document.querySelector('.cards');
const items = document.querySelector('.items');

let cardList = [
    {
        id: 1,
        title: "Price calculator",
        text: "How much does 1 Eur in 1963 equaal in today's prices?",
        btn: "Calculate price changes",
    },
    {
        id: 2,
        title: "Name statistics",
        text: "How much does 1 Eur in 1963 equaal in today's prices?",
        btn: "Search by name",
    },
    {
        id: 3,
        title: "Stats table",
        text: "Find detailed tables with time and create your own",
        btn: "Go to tables",
    },
];

let itemList = [
    {
        id: 1,
        title: "Calendar",
        text: "See the advance release of callendard in 2021",
        btn: "Go to Calendar",
    },
    {
        id: 2,
        title: "Subscribe to new",
        text: "Get the latest statistics releases and publications by e-mail",
        btn: "Receive e-mail alerts",
    },
    {
        id: 3,
        title: "API",
        text: "Easily retrieve and integrate Statistics with your own system",
        btn: "Open API",
    },
];

function initApp() {
    cardList.forEach((value) => {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `
        <h4>${value.title}</h4>
        <p>${value.text}</p>
        <button class="btn">${value.btn}<i class="fa-solid fa-chevron-right"></i></button>
        `;
        cards.appendChild(cardDiv);
    });
    itemList.forEach((value) => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
        <h4>${value.title}</h4>
        <p>${value.text}</p>
        <a href="javascript:void(0)">${value.btn}</a>
        `
        items.appendChild(itemDiv);
    });
}
initApp();