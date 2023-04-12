console.log('Scrore: 110/110')

const data = [
    {
    "name": "Jennifer",
    "img": "./images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Sophia",
    "img": "./images/pets-sof4.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Woody",
    "img": "./images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
    },
    {
    "name": "Scarlett",
    "img": "./images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Katrine",
    "img": "./images/pets-katrine111.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Timmy",
    "img": "./images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
    },
    {
    "name": "Freddie",
    "img": "./images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Charly",
    "img": "./images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
    }
]

const shuffle = (arr) => arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

const shuffledData = shuffle(data);
const shuffledData2 = shuffle(shuffledData);
const shuffledData3 = shuffle(shuffledData2);
const shuffledData4 = shuffle(shuffledData3);
const shuffledData5 = shuffle(shuffledData4);
const shuffledData6 = shuffle(shuffledData5);

const burgerToggle = document.getElementById('menu__toggle');
const burgerMenu = document.querySelector('.hamburger-menu');
const menuBox = document.querySelector('.menu__box');
const shadow = document.querySelector('.shadow-bg');
const modalWindow = document.querySelector('.modal-window');
const modalWindowBg = document.querySelector('.modal-bg');
const krestik = document.querySelector('.modal-window__krestik');

const nextBtn = document.querySelector('.right');
const prevBtn = document.querySelector('.left');
const leftEnd = document.querySelector('.left-end')
const rightEnd = document.querySelector('.right-end')
const left = document.querySelector('.pagination > div:nth-child(2)')
const menuBtn = document.querySelector('.menu__btn');
const menuBtnSpan = document.querySelector('.menu__btn > span');

let pageNumber = 1;

menuBox.addEventListener('click', ()=> {
    burgerToggle.checked = false;
    document.body.classList.remove('overflow-hidden-class');
    // shadow.classList.toggle('shadow');
    shadow.style.display = 'none';
})

shadow.addEventListener('click', ()=> {
    burgerToggle.checked = false;
    document.body.classList.remove('overflow-hidden-class');
    // shadow.classList.toggle('shadow');
    shadow.style.display = 'none';
})

burgerToggle.addEventListener('click', ()=> {
    document.body.classList.add('overflow-hidden-class');
    shadow.style.display = 'block';
    
})

menuBtn.addEventListener('click', ()=> {
    burgerToggle.checked = false;
    // document.body.classList.toggle('overflow-hidden-class');
    // shadow.classList.toggle('shadow');
    shadow.style.display = 'none';
})



modalWindowBg.addEventListener('click', function (e) {
    document.body.classList.toggle('overflow-hidden-class');

    modalWindow.style.display = 'none';
    modalWindowBg.style.display = 'none';
})

krestik.addEventListener('click', function () {
    document.body.classList.toggle('overflow-hidden-class');

    modalWindow.style.display = 'none';
    modalWindowBg.style.display = 'none';
})

function addElement(image, name) {
    const card = document.createElement("div");
    const cardImage = document.createElement("div")
    const button = document.createElement("button");
    const paragraph = document.createElement("p");
    const parrent = document.querySelector('.our-friends__slider__cards');
    card.className = 'our-friends__slider__card';
    
    card.setAttribute('data-name', name);
    cardImage.className = 'our-friends__slider__card--image';
    paragraph.className = 'our-friends__slider__card--name';
    button.className = 'our-friends__slider__card--button';
  
    cardImage.style.backgroundImage = `url('${image}')`;
    cardImage.style.height = '270px';
    cardImage.style.width = '270px';
  
    const petName = document.createTextNode(name);
    const buttonText = document.createTextNode('Learn more');
    
    paragraph.appendChild(petName);
    button.appendChild(buttonText);

    parrent.append(card);
    card.append(cardImage)
    card.append(paragraph)
    card.append(button)
}

let petCard = shuffledData.map((pet) => {
    addElement(pet.img, pet.name)
    
})

function pageCounterPlus() {
    if (pageNumber === 6) {
        return
    }

    pageNumber++;

    if (pageNumber === 6) {
        nextBtn.classList.remove('activePaginationItem')
        rightEnd.classList.remove('activePaginationItem')
    }

    if (pageNumber > 1 && pageNumber < 6) {
        leftEnd.classList.add('activePaginationItem')
        left.classList.add('activePaginationItem')
    }
}

function pageCounterMinus() {
    pageNumber--;

    if (pageNumber == 1) {
        leftEnd.classList.remove('activePaginationItem')
        left.classList.remove('activePaginationItem')
    }

    if (pageNumber > 1) {
        leftEnd.classList.add('activePaginationItem')
        left.classList.add('activePaginationItem')
    }

    if (pageNumber === 5) {
        nextBtn.classList.add('activePaginationItem')
        rightEnd.classList.add('activePaginationItem')
    }
}

nextBtn.addEventListener('click', function (e) {
    pageCounterPlus()

    const slider = document.querySelector('.our-friends__slider__cards')
    slider.innerHTML = '';

    const currentPage = document.querySelector('.current')
    currentPage.innerHTML = pageNumber;

        switch (pageNumber) {
            case 1:
                petCard = shuffledData.map((pet) => {
                    addElement(pet.img, pet.name)
                })
            break;
            case 2:
                petCard = shuffledData2.map((pet) => {
                    addElement(pet.img, pet.name)
                })
            break;
            case 3:
                petCard = shuffledData3.map((pet) => {
                    addElement(pet.img, pet.name)
                })
            break;
            case 4:
                petCard = shuffledData4.map((pet) => {
                    addElement(pet.img, pet.name)
                })
            break;
            case 5:
                petCard = shuffledData5.map((pet) => {
                    addElement(pet.img, pet.name)
                })
            break;
            case 6:
                petCard = shuffledData6.map((pet) => {
                    addElement(pet.img, pet.name)
                })
            break;
        }
        addModalToCards()
})

prevBtn.addEventListener('click', function (e) {
    if (pageNumber === 1) {
        return
    }

    pageCounterMinus()

    const prevCards = document.querySelector('.our-friends__slider__cards')
    prevCards.innerHTML = '';

    const currentPage = document.querySelector('.current')
    currentPage.innerHTML = pageNumber;

        switch (pageNumber) {
            case 1:
                petCard = shuffledData.map((pet) => {
                    addElement(pet.img, pet.name)
                })
            break;
            case 2:
                petCard = shuffledData2.map((pet) => {
                    addElement(pet.img, pet.name)
                })
            break;
            case 3:
                petCard = shuffledData3.map((pet) => {
                    addElement(pet.img, pet.name)
                })
            break;
            case 4:
                petCard = shuffledData4.map((pet) => {
                    addElement(pet.img, pet.name)
                })
            break;
            case 5:
                petCard = shuffledData5.map((pet) => {
                    addElement(pet.img, pet.name)
                })
            break;
            case 6:
                petCard = shuffledData6.map((pet) => {
                    addElement(pet.img, pet.name)
                })
            break;
        }

    addModalToCards()
})

rightEnd.addEventListener('click', function (e) {
    pageNumber = 6;

    const slider = document.querySelector('.our-friends__slider__cards')
    slider.innerHTML = '';

    const currentPage = document.querySelector('.current')
    currentPage.innerHTML = pageNumber;

    petCard = shuffledData6.map((pet) => {
        addElement(pet.img, pet.name)
    })

    leftEnd.classList.add('activePaginationItem')
    left.classList.add('activePaginationItem')
    nextBtn.classList.remove('activePaginationItem')
    rightEnd.classList.remove('activePaginationItem')

    addModalToCards()
})

leftEnd.addEventListener('click', function (e) {
    pageNumber = 1;

    const slider = document.querySelector('.our-friends__slider__cards')
    slider.innerHTML = '';

    const currentPage = document.querySelector('.current')
    currentPage.innerHTML = pageNumber;

    petCard = shuffledData.map((pet) => {
        addElement(pet.img, pet.name)
    })

    leftEnd.classList.remove('activePaginationItem')
    left.classList.remove('activePaginationItem')
    nextBtn.classList.add('activePaginationItem')
    rightEnd.classList.add('activePaginationItem')

    addModalToCards()
})

function addModalToCards() {
    const cards = document.querySelectorAll('.our-friends__slider__card');

    cards.forEach((el) => {
        el.addEventListener('click', function (e) {
            document.body.classList.toggle('overflow-hidden-class');
    
            modalWindow.style.display = 'flex';
            modalWindowBg.style.display = 'block';
    
            const petValues = data.find((pet) => this.dataset.name === pet.name)
            document.querySelector('.modal-window__content--description--title').textContent = petValues.name;
            document.querySelector('.modal-window__content--description--subtitle').textContent = `${petValues.type} - ${petValues.breed}`;
            document.querySelector('.modal-window__content--description--text').textContent = petValues.description;
            document.querySelector('.modal-window__content--description--list--age').textContent = petValues.age;
            document.querySelector('.modal-window__content--description--list--inoculations').textContent = petValues.inoculations;
            document.querySelector('.modal-window__content--description--list--diseases').textContent = petValues.diseases;
            document.querySelector('.modal-window__content--description--list--parasites').textContent = petValues.parasites;
            document.querySelector('.modal-window__content--image').style.backgroundImage = `url('${petValues.img}')`;
    
        })
    })
}

addModalToCards()