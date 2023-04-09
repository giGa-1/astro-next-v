import React, {useState} from 'react'
import cl from './Header.module.css'
import InputMask from 'react-input-mask';

export default function Header() {
    const [isColor, setIsColor] = useState('')
  return (
    <header className={cl.header}>
        <div className="container">
            <div className={cl.leftBlock}>
                <h1 className={cl.text}>ASTRO ART</h1>
            </div>
            <div className={cl.rightBlock}>
                <div className={cl.changeColorBlock}>
                    <p className={cl.changeText}>Change Color:</p>
                    <InputMask mask="#******" value={isColor} onChange={e=>setIsColor(e.target.value)}/>
                </div>  
            </div>
        </div>
    </header>
  )
}
