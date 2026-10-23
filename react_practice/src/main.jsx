import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from './edit_submit'
import Forms from './reuse'
import Apps from './six'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Forms></Forms> */}
    {/* <Form/> */}
    <Apps/>
  </StrictMode>,
)
