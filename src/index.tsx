import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Routes from './routes/main'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  </React.StrictMode>
)
