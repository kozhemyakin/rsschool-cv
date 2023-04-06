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

const burgerToggle = document.getElementById('menu__toggle');
const burgerMenu = document.querySelector('.hamburger-menu');
const menuBox = document.querySelector('.menu__box');
const shadow = document.querySelector('.shadow-bg');

menuBox.addEventListener('click', ()=> {
    burgerToggle.checked = false;
    document.body.classList.toggle('overflow-hidden-class');
    shadow.classList.toggle('shadow');
    shadow.style.display = 'none';
})

shadow.addEventListener('click', ()=> {
    burgerToggle.checked = false;
    document.body.classList.toggle('overflow-hidden-class');
    shadow.classList.toggle('shadow');
    shadow.style.display = 'none';
})

burgerToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('overflow-hidden-class');
    shadow.style.display = 'block';
})

const modalWindow = document.querySelector('.modal-window');
const modalWindowBg = document.querySelector('.modal-bg');

const cards = document.querySelectorAll('.our-friends__slider__card');
const krestik = document.querySelector('.modal-window__krestik');

cards.forEach((el) => {
    el.addEventListener('click', function (e) {
        document.body.classList.toggle('overflow-hidden-class');

        // let petName = this.dataset.name;
        // console.log(petName)
        console.log(this.dataset.name)
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
        
        // "url('./images/pets-scarlet.png')";
        
        console.log(petValues)
    })
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


