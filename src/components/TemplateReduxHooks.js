import React from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setAwsmAction, unsetAwsmAction} from '../redux/actions'


export default function TemplateRedux(props) {

    const isAwesome = useSelector((state) => state.isAwesome)
    const dispatch = useDispatch()

    useEffect(
        () => console.log('TemplateRedux component updated') // , []
    )

    const changeAwsmState = () => {
        if (isAwesome){
            dispatch(unsetAwsmAction())
        }else{
            dispatch(setAwsmAction())
        }
    }

    return (
        <>
            <h1>TemplateReduxHooks</h1>
            <div>{isAwesome.toString()}</div>
            <button onClick={changeAwsmState}>Change Awesome State</button>
        </>
    )
}