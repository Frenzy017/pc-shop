import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "/css/fonts.css"
import "/sass/abstracts/_variables.scss"
import "/sass/base/_base.scss"
import "/sass/base/_typography.scss"


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
