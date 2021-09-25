
import { Button } from 'react-bootstrap'
import { addhandler } from '../Redux/Action'

import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useState } from 'react'


export default function Add() {
    Modal.setAppElement('#root');
   
    const dispatch = useDispatch()
    const [show, setshow] = useState(false)
    const [addtitle, setaddtitle] = useState('')
    const [addpicture,setpicture] =useState('')
    const [adddesecription,setdescription]=useState('')
    

    const nwemovie = () => {
    
        dispatch(addhandler({
            id: Math.floor(Math.random() * 10) + 1,
            title: addtitle,
            picture:addpicture ,
            Description: adddesecription,

        }))
        setaddtitle('')
        setpicture ('')
        setdescription ('')

    }
    const toggle = () => {
        setshow(!show)
    }
    return (
        <div className='Add-card'>

            <Button onClick={toggle}><i class="fas fa-plus"></i></Button>
            <Modal className='Modal' isOpen={show}>
                <div className='modal-content'>
                    
                    <label>title:</label>
                    <input  onChange={(e)=>setaddtitle(e.target.value)} type='text' placeholder='entre the name' /> <br />
                    <label>Description:</label>

                    <input on onChange={(e)=>setdescription(e.target.value)} type='text' placeholder='entre the description name' /> <br />
                    <label>picture </label>
                    <input onChange={(e)=>setpicture(e.target.value)} type='text' placeholder='entre the picture' /> <br />

                    <div className='button'>
                        <button onClick={nwemovie}>confirm</button>
                        <button onClick={toggle}>cancel</button>
                    </div>
                </div>

            </Modal>
        </div>
    )
}
