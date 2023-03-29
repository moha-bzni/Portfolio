import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(246,161,146)", "rgb(111,203,159)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mohamed",
    lastName: "BOUZIANI",
    initials: "MB", // the example uses first and last, but feel free to use three or more if you like.
    position: "an auditing/finance specialist",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🫖',
            text: 'Fueled by mint tea and good vibes'
        },
        {
            emoji: '🌍',
            text: 'based in Belgium'
        },
        {
            emoji: '💼',
            text: "Team Leader Recouvrement at COFIDIS"
        },
        {
            emoji: '📬',
            text: "mohamed.bouziani@hotmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/moha.bzn",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/moha.hlou",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/moha-bzni",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://be.linkedin.com/school/faculte-polytechnique-de-mons",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/polytechmons",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Mohamed. I'm a finance expert for Cofidis. I've been working for this company since 2018. I graduated as a bachelor in Engineering Sciences majored in Civil Engineering and then pursued a Master degree in Computer Science (CompSci) and Management at UMons Faculty of Engineering (FPMs). Then I studied Management Engineering at UMons Warocqué School of Business and Economics (FWEG). This year, I went back to FPMs to complete this Master in CompSci. I enjoy being by myself. I love taking a long walk with a book and looking at the sea, the moon and the sky.",
    skills:
        {
            proficientWith: ['HTML5', 'CSS3', 'Bootstrap', 'Adobe illustrator'],
            exposedTo: ['Nodejs', 'JavaScript','Figma', 'GitHub']
        }
    ,
    hobbies: [
        {
            label: 'photography',
            emoji: '📸'
        },
        {
            label: 'writing',
            emoji: '🪶'
        },
        {
            label: 'الأدب العربي  [Arabic literature]',
            emoji: '📖'
        },
        {
            label: 'running',
            emoji: '🏃🏽'
        },
        {
            label: 'traveling',
            emoji: '✈️'
        },
        {
            label: 'cooking/food',
            emoji: '🍽️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "BELLAZIZA Website Conception Project",
            live: "https://www.facebook.com/Bellaziza.Mons", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://bellaziza.com", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "ASBL Creation Project",
            live: "https://github.com/moha-bzni/new-repository/blob/main/DigitAll.pdf",
            source: "https://github.com/moha-bzni/new-repository/blob/main/ASBL%20DIGIT'ALL%20CHARLEROI%20ENTREPRENDRE.pdf",
            image: mock2
        },
        {
            title: "VIKA Website Reworking Project",
            live: "http://www.villeneuve-ascq-karate.com",
            source: "https://github.com/givaremo/VIKA",
            image: mock3
        },
    ]
}