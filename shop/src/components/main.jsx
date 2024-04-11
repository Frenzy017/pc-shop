import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "/src/components/Header.jsx"
import Section from "/src/components/Section.jsx"
import Footer from "/src/components/Footer.jsx"


import "/css/fonts.css"


import "/img/White PC.webp"
import "/img/Black PC.webp"
import "/img/Black White PC.webp"
import "/img/Purple PC.webp"
import "/img/background-1.jpg"


import "/sass/abstracts/_variables.scss"


import "/sass/base/_animations.scss"
import "/sass/base/_base.scss"
import "/sass/base/_typography.scss"
import "/sass/base/_utilities.scss"

import "/sass/components/_button.scss"

import "/sass/layout/_header.scss"
import "/sass/layout/_section.scss"
import "/sass/layout/_footer.scss"


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header/>
        <Section/>
        <Footer/>
    </React.StrictMode>,
)
