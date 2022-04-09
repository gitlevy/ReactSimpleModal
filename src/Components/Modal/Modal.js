import React, { useState } from 'react'
import './Modal.css'

export default function Modal() {

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>  
        <button className='btn-modal' 
        onClick={toggleModal}>Open</button>

        {modal && (
            <div className="overlay">
                <div className="modal">
                    <div className="modal-content">
                        <h2>Hello Modal</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quis aperiam deleniti sunt, dolor voluptatibus, a dolore error nisi iste nihil at laudantium veniam similique eligendi reprehenderit itaque ullam? Quas ex dolores repellat eligendi iure hic nemo sapiente nihil. Modi natus assumenda vero officiis quasi excepturi eos quo, nulla a?
                        </p>
                        <button className='close-modal'
                        onClick={toggleModal}>Close</button>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}
