import React from 'react'
import { Button } from '@material-ui/core'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <b>Website by:</b> <a href="https://enomilan.github.io/" rel="noopener noreferrer" target="_blank">
                Andrew Musta
            </a> 
            <a href="https://www.linkedin.com/in/andrew-musta-a46506217/" rel="noopener noreferrer" target="_blank">
                | Linkedin  |
            </a>
            <a href="https://github.com/enomilan/we-scout" rel="noopener noreferrer" target="_blank">
                Github  |
            </a>

            {/* <a href="https://enomilan.github.io/" rel="noopener noreferrer" target="_blank">
                Portfolio  |
            </a> */}
        </div>
    )
}

export default Footer
