const menuOpenBtn = document.getElementById('icon-container')
const menuCloseBtn = document.getElementById('exit-mobile-menu')
const mobileMenu = document.getElementById('mobile-menu')
const homeBtn = document.getElementById('home-btn')
const videoBtn = document.getElementById('video-btn')
const synopsisBtn = document.getElementById('synopsis-btn')
const creditsBtn = document.getElementById('credits-btn')
const mobileHomeBtn = document.getElementById('mobile-home-btn')
const mobileVideoBtn = document.getElementById('mobile-video-btn')
const mobileSynopsisBtn = document.getElementById('mobile-synopsis-btn')
const mobileCreditsBtn = document.getElementById('mobile-credits-btn')
const synopsisModal = document.getElementById('summary-modal')
const videoModal = document.getElementById('video-modal')
const creditsModal = document.getElementById('credits-modal')
const creditWrapper = document.getElementById('credit-wrapper')
const closeProductionModalBtn = document.getElementById('close-production-modal-btn')
const productionModalEl = document.getElementById('production-modal')
const productionCreditsBtn = document.getElementById('production-credits')
// const crewMember = document.createElement('div')

menuOpenBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('isOpen')   
})

menuCloseBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('isOpen') 
})

// Home controls
homeBtn.addEventListener('click', homePage)
mobileHomeBtn.addEventListener('click', homePage)


// Synopsis controls
synopsisBtn.addEventListener('click', movieSynopsis)
mobileSynopsisBtn.addEventListener('click', movieSynopsis)

// Video controls
videoBtn.addEventListener('click', movieVideo)
mobileVideoBtn.addEventListener('click', movieVideo)

// Credits controls
creditsBtn.addEventListener('click', movieCredits)
mobileCreditsBtn.addEventListener('click', movieCredits)

// Production credit controls
productionCreditsBtn.addEventListener('click', productionModal)
closeProductionModalBtn.addEventListener('click', productionModal)

function homePage() {
    synopsisModal.classList.remove('synopsis-open')
    videoModal.classList.remove('video-open')
    creditsModal.classList.remove('credits-open')
    mobileMenu.classList.toggle('isOpen')
}

function movieSynopsis() {
    synopsisModal.classList.add('synopsis-open')
    videoModal.classList.remove('video-open')
    creditsModal.classList.remove('credits-open')
    mobileMenu.classList.toggle('isOpen')
}

function movieVideo() {
    videoModal.classList.add('video-open')
    synopsisModal.classList.remove('synopsis-open')
    creditsModal.classList.remove('credits-open')
    mobileMenu.classList.toggle('isOpen')
}

function movieCredits() {
    creditsModal.classList.add('credits-open')
    synopsisModal.classList.remove('synopsis-open')
    videoModal.classList.remove('video-open')
    mobileMenu.classList.toggle('isOpen')
}

function productionModal() {
    productionModalEl.classList.toggle('open-production-modal')
}

fetch(`https://randomuser.me/api/?results=5`, {method:"GET"})
    .then( res => res.json())
    .then( data => {
        // console.log(data.results)
        let profiles = data.results;
        profiles.forEach((person) => { 
        let crewMember = document.createElement('div')
        crewMember.innerHTML = `
        <img src="${person.picture.large}"/>
        <h3>${person.name.first} ${person.name.last}</h3>
        <p>${person.location.city},${person.location.state}</p>
        `;
        creditWrapper.appendChild(crewMember);
        crewMember.style.backgroundColor = "transparent";
        crewMember.style.margin = "50px";
        crewMember.style.padding = "10px 40px 10px 10px ";
        crewMember.style.textShadow = "1px 1px 1px #000";
        crewMember.style.boxShadow = "0px 2px 2px #9e9999 ";
        })
        
        
    })