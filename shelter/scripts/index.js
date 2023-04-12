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
    },
]

function chunk(arr, chunkSize) {
    const clone = [...arr]
    if (chunkSize <= 0) throw "Invalid chunk size";
    var R = [];
    for (var i=0,len=clone.length; i<len; i+=chunkSize)
        R.push(clone.slice(i,i+chunkSize));
    return R;
}

const shuffle = (arr) => {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
}

const shuffledData = shuffle(data);

function addElement(parrent, image, name) {
    const card = document.createElement("div");
    const cardImage = document.createElement("div")
    const button = document.createElement("button");
    const paragraph = document.createElement("p");

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

function addSlide(slide) {
    const slider = document.querySelector('.our-friends__slider__cards');

    const slideWrapper = document.createElement("li");

    slideWrapper.className = 'slide animate';

    slide.forEach((card) => {
        addElement(slideWrapper, card.img, card.name);
    })

    slider.appendChild(slideWrapper);
}


const burgerToggle = document.getElementById('menu__toggle');
const burgerMenu = document.querySelector('.hamburger-menu');
const menuBox = document.querySelector('.menu__box');
const shadow = document.querySelector('.shadow-bg');

menuBox.addEventListener('click', ()=> {
    burgerToggle.checked = false;
    document.body.classList.toggle('overflow-hidden-class');
    // shadow.classList.toggle('shadow');
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

const krestik = document.querySelector('.modal-window__krestik');

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

/* slider */

var index = 0,
    amount = 0,
    currTransl = [],
    translationComplete = true,
    moveOffset = 0;

var transitionCompleted = function(){
    translationComplete = true;
}

const calculateSliderPerPage = (width) => {

    const slidesPerPageByScreenSize = {
        0: 1,
        770: 2,
        1220: 3,
    }

    return Object.keys(slidesPerPageByScreenSize).reduce((acc, breakpoint) => {
        if(width >= breakpoint) {
            acc = slidesPerPageByScreenSize[breakpoint]
        }
        return acc
    }, 1)
}

const initSlides = () => {
    cardsPerSlide = calculateSliderPerPage(window.innerWidth)

    const slider = document.querySelector('.our-friends__slider__cards')

    slider.innerHTML = '';
    
    const cardsChunks = chunk(shuffledData, cardsPerSlide)
    const slides = cardsChunks.map((slide, i) => {
        if (slide.length < cardsPerSlide && i === cardsChunks.length - 1) {
            const shouldAddXItems = cardsPerSlide - slide.length;

            if(shouldAddXItems >= 1) {
                return [...slide, shuffledData[0]]
            }
        }

        return slide
    })

    slides.forEach((slide) => {
        addSlide(slide)
    })

    document.getElementById('carousel').insertBefore(document.getElementById('carousel').lastChild, document.getElementById('carousel').children[0])

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

const initSlider = () => {
    index = 0,
    amount = 0,
    currTransl = [],
    translationComplete = true,
    moveOffset = 0;

    var carousel = document.getElementById('carousel');

    amount = document.getElementsByClassName("slide").length;

    moveOffset = parseInt(window.getComputedStyle(document.getElementById('carousel-container')).width, 10);

    carousel.style.width = (amount * moveOffset) + 'px';

    for(var i = 0; i < amount; i++)
    {
        currTransl[i] = -moveOffset;
        document.getElementsByClassName("slide")[i].addEventListener("transitionend", transitionCompleted, true);                    
        document.getElementsByClassName("slide")[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);                    
        document.getElementsByClassName("slide")[i].addEventListener("oTransitionEnd", transitionCompleted, true);                    
        document.getElementsByClassName("slide")[i].addEventListener("MSTransitionEnd", transitionCompleted, true);    
        
        document.getElementsByClassName('slide')[i].style.width = moveOffset + 'px';
    }

}

window.addEventListener('resize', function(event) {
    const shouldReinitSlider = calculateSliderPerPage(window.innerWidth) !== cardsPerSlide

    if(shouldReinitSlider) {
        initSlides()
    }

    initSlider()
    fixSliderTranslate()

}, true);

document.addEventListener("DOMContentLoaded", function(event) 
{
    initSlides()
    initSlider()

    document.getElementById('prev').addEventListener('click', prev, true);
    document.getElementById('next').addEventListener('click', next, true);
});

const fixSliderTranslate = () => {
    var outerIndex = (index) % amount;
    for(var i = 0; i < amount; i++)
    {
        var slide = document.getElementsByClassName("slide")[i];    
        slide.style.opacity = '1';    
        slide.style.transform = 'translateX('+(currTransl[i]-moveOffset)+'px)';
    }
    var outerSlide = document.getElementsByClassName("slide")[outerIndex];
    outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]+(moveOffset*amount))+'px)';
    outerSlide.style.opacity = '0';
}

function prev()
{
    if (translationComplete === true)
    {
        translationComplete = false;
        index--;
        if (index == -1)
        {
            index = amount-1;
        }
        var outerIndex = (index) % amount;
        for (var i = 0; i < amount; i++)
        {
            var slide = document.getElementsByClassName("slide")[i];
            slide.style.opacity = '1';    
            slide.style.transform = 'translateX('+(currTransl[i]+moveOffset)+'px)';
            currTransl[i] = currTransl[i]+moveOffset;
        }
        var outerSlide = document.getElementsByClassName("slide")[outerIndex];
        outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]-(moveOffset*amount))+'px)';
        outerSlide.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]-moveOffset*(amount);
    }
}

function next()
{
    if (translationComplete === true)
    {
        translationComplete = false;
        var outerIndex = (index) % amount;
        index++;
        for(var i = 0; i < amount; i++)
        {
            var slide = document.getElementsByClassName("slide")[i];    
            slide.style.opacity = '1';    
            slide.style.transform = 'translateX('+(currTransl[i]-moveOffset)+'px)';
            currTransl[i] = currTransl[i]-moveOffset;
        }

        var outerSlide = document.getElementsByClassName("slide")[outerIndex];
        outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]+(moveOffset*amount))+'px)';
        outerSlide.style.opacity = '0';

        currTransl[outerIndex] = currTransl[outerIndex]+moveOffset*(amount);
    }
}
