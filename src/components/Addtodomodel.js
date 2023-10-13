import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPhone, } from '@fortawesome/free-solid-svg-icons';


export function AddTaskModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{ backgroundColor: "black", border: "none" }} onClick={handleShow}>
        <FontAwesomeIcon icon={faPen} />
      </Button>

      <Modal show={show} onHide={handleClose} id="TaskInputModal" >

        <Modal.Header closeButton id="titleHeader">
          <Modal.Title >Add Todo</Modal.Title>
        </Modal.Header>
    
        <form id="formModal">
          <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"
            placeholder='Add Todo Task' />

          <div class="mb-3"> 
            <select id="disabledSelect" class="form-select">
              <option>Home</option>
              <option>Office</option>
              <option>Education</option>
              <option>Religious</option>

            </select>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
      
        </form>
      </Modal>
    </>
  );
}

