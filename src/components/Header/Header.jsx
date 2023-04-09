import React, {useEffect, useRef, useState} from 'react'
import cl from './Header.module.css'
import MaskedInput from 'react-text-mask'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentColor } from '../../../redux/color-reducer';

export default function Header() {

    const [isColor, setIsColor] = useState('')
    const cube = useRef()
    const dispatch = useDispatch();

    const stateColor = useSelector(state=>state['Color State']).currentColor
    useEffect(()=>{setIsColor(stateColor)},[])
    useEffect(()=>{
        cube.current.style.backgroundColor = isColor
    },[isColor])
    const colorChange = (e)=>{
        e.preventDefault();
        setIsColor(e.target.value);
        setTimeout(()=>{
            dispatch(setCurrentColor(e.target.value));
            console.log(stateColor)
        },1000)
        
    }
  return (
    <header className={cl.header}>
        <div className={["container", cl.cont].join` `}>
            <div className={cl.leftBlock}>
                <div className={cl.blur}></div>
                <h1 className={cl.text}>ASTRO ART</h1>
            </div>
            <div className={cl.rightBlock}>
            <div className={cl.blur}></div>

                <div className={cl.changeColorBlock}>
                    <p className={cl.changeText}>Change Color:</p>
                    <MaskedInput
                        mask={['#', /\w/, /\w/, /\w/, /\w/, /\w/, /\w/]}
                        value={isColor||''} placeholder='#' className={cl.input} onChange={e=>{colorChange(e)}}
                    />
                    {/* <InputMask mask="#******" value={isColor||''} placeholder='#' className={cl.input} onChange={e=>{colorChange(e)}}/> */}
                    <span ref={cube} className={cl.changeCube} >

                    </span>
                </div>  
            </div>
        </div>
    </header>
  )
}
