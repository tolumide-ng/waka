import React from 'react'
import { render } from 'react-dom'
import Main from './routes/index.jsx'
import './main.scss'

const app = document.querySelector('#app')

render(<Main />, app)
