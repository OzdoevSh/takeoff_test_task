import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/CloseSharp';
import InputMask from 'react-input-mask';


import Modal from 'react-modal';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

import './AddContactModal.css'

const AddContactModal = (props) => {
  const {
    openModal,
    setOpenModal,
    handleCloseModal,
    addContact,
    id,
  } = props

  const customStyles = {
    content: {
      top: '30%',
      left: '50%',
      width: '530px',
      height: '400px',
      transform: 'translate(-50%, -50%)',
      borderRadius: '25px',
      backgroundColor: 'white',
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly"
    },
  };

  const initialState = {
    full_name: '',
    phone: '',
  }

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  

  const [values, setValues] = useState(initialState)

  async function handleSubmit() {
    await addContact(id, fullName, phone)
    handleCloseModal()
  }

  return (
    <Modal isOpen={openModal} style={customStyles}>
      <div>
        <h2>Добавление контакта</h2>
        <IconButton
          style={{
            marginTop: "-200px",
            marginLeft: "470px"
          }}
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div className="dataInputs">
        <FormControl>
          <InputLabel>Имя</InputLabel>
          <Input 
            name="full_name" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
          />
        </FormControl>
        <FormControl>
          <InputLabel>Номер телефона</InputLabel>
          <InputMask
            name="phone"
            mask="+7 (999) 999 99 99"
            maskChar={' '}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          >
            {() => <Input />}
          </InputMask>
        </FormControl>

      </div>
      <div>
        <FormControl>
          <Button
            variant="contained"
            style={{
              textTransform: "none",
              backgroundColor: "#1668b4",
              color: 'white',
              fontSize: '17px',
              fontWeight: 'bold'
            }}
            onClick={handleSubmit}
          >
            Сохранить
          </Button>
        </FormControl>
      </div>
    </Modal>
  )
}

export default AddContactModal;