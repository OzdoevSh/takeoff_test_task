import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom'
import AddContactModal from '../AddContactModal';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useNavigate } from "react-router-dom";

import {
  useLocation
} from "react-router-dom";

import './Contacts.css'
import { FormControl } from '@material-ui/core';

function Contacts(props) {

  const {
    users,
    getUserData,
    user,
    login,
    contacts,
    getContacts,
    deleteContact,
    searchContact,
    contact,
    addContact,
    editContact
  } = props


  const { id } = useParams()

  const { state } = useLocation()


  const [openModal, setOpenModal] = useState(false)
  const [isDeleted, setDeleted] = useState(false)
  const [editing, setEditing] = useState(false)
  const [searchedContact, setSearchedContact] = useState('')
  const [isSearched, setSearched] = useState(false)

  useEffect(async () => {
    if (id === state.id) {
      await login(id)
      await getContacts()
      console.log(searchedContact)
    }
  }, [openModal, isDeleted, editing])

  const initialState = {
    search: '',
  }

  const [values, setValues] = useState(initialState)

  const [contactId, setContactId] = useState(contact?.id);
  const [editableFullName, setEditableFullName] = useState(contact?.full_name);
  const [editablePhone, setEditablePhone] = useState(contact?.phone);

  let navigate = useNavigate();

  const handleEdit = async () => {
    setEditing(!editing)
  }

  const handleSaveEdited = async () => {
    setEditing(false)
    await editContact(contactId, editableFullName, editablePhone)
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values)
  }

  const handleOut = () => {
    navigate('/')
  }


  const handleSearchContact = async () => {
    if (values.search.trim() !== '') {
      await searchContact(id, values.search)
      setSearched(true)
    }
  }

  if (user.email) {
    return (
      <div>
        <div className="header">
          <h1 className="title">???????????? ??????????????</h1>
          <Button 
            style={{height: "50px", marginTop: "20px"}}
            onClick={handleOut}
          >
            ??????????
          </Button>
        </div>
        <div className="userInfo">
          <h2>{user.first_name} {user.last_name}</h2>
          <div><b>???????? ??????????:</b> {user.email}</div>
        </div>
        {contacts.length === 0 ? <span>?????? ???????????? ?????????????????? ????????</span> :
          <div>
            <h2 className="title">???????????? ??????????????????</h2>
            <div className="search">
              <TextField
                variant="standard"
                name="search"
                value={values.search}
                onChange={handleSearchChange}
                style={{ width: "800px" }}
                label="??????????"
              />
              <Button onClick={handleSearchContact} style={{
                textTransform: "none", height: "40px", marginTop: "10px", marginLeft: "5px", backgroundColor: "#1668b4",
                color: 'white'
              }}>??????????</Button>
            </div>
            {
              isSearched ?
                <div>

                  <div className="table">
                    <TableContainer component={Paper} style={{ marginTop: "40px", width: "1200px" }}>
                      <Table aria-label="simple table">
                        <TableHead style={{ background: "black" }}>
                          <TableRow>
                            <TableCell style={{ fontWeight: "bold", color: "white" }}>??????</TableCell>
                            <TableCell style={{ fontWeight: "bold", color: "white" }}>?????????? ????????????????</TableCell>
                            <TableCell style={{ fontWeight: "bold", color: "white", textAlign: "center" }}>????????????????</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {contact.map((i) => {
                            if (i.user_id == id) {

                              return (

                                <TableRow
                                  key={i.id}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                  <TableCell component="th" scope="row">
                                    {i.full_name}
                                  </TableCell>
                                  <TableCell>{i.phone}</TableCell>
                                  <TableCell style={{ display: "flex", justifyContent: "center" }}>
                                    <Button
                                      variant="contained"
                                      style={{
                                        textTransform: "none",
                                        backgroundColor: "orange",
                                        color: 'white',
                                        fontSize: '17px',
                                        fontWeight: 'bold',
                                        marginRight: "20px"
                                      }}
                                    >
                                      ??????????????????????????
                                    </Button>
                                    <Button
                                      variant="contained"
                                      style={{
                                        textTransform: "none",
                                        backgroundColor: "red",
                                        color: 'white',
                                        fontSize: '17px',
                                        fontWeight: 'bold'
                                      }}
                                      onClick={async () => {
                                        await deleteContact(i.id)
                                        setDeleted(!isDeleted)
                                      }}
                                    >
                                      ??????????????
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              )
                            }
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <div className="showAllButton">
                    <Button
                      onClick={async (e) => {
                        setSearched(false)
                      }}
                      style={{ fontWeight: "bold" }}
                    >
                      ???????????????? ???????? ????????????
                    </Button>
                  </div>
                </div> :
                <div className="table">
                  <TableContainer component={Paper} style={{ marginTop: "40px", width: "1200px" }}>
                    <Table aria-label="simple table">
                      <TableHead style={{ background: "black" }}>
                        <TableRow>
                          <TableCell style={{ fontWeight: "bold", color: "white" }}>??????</TableCell>
                          <TableCell style={{ fontWeight: "bold", color: "white" }}>?????????? ????????????????</TableCell>
                          <TableCell style={{ fontWeight: "bold", color: "white", textAlign: "center" }}>????????????????</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {contacts.map((i) => {
                          if (i.user_id == id) {
                            return (
                              editing ?
                                <TableRow
                                  key={i.id}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                  <TableCell component="th" scope="row">
                                    <TextField defaultValue={i.full_name} value={editableFullName} id={i.id}
                                      onChange={(e) => {
                                        setEditableFullName(e.target.value)
                                        setContactId(e.target.id)
                                      }} />
                                  </TableCell>
                                  <TableCell>
                                    <TextField
                                      defaultValue={i.phone}
                                      value={editablePhone}
                                      id={i.id}
                                      onChange={(e) => {
                                        setEditablePhone(e.target.value)
                                        setContactId(e.target.id)
                                      }}
                                    />
                                  </TableCell>
                                  <TableCell style={{ display: "flex", justifyContent: "center" }}>
                                    <Button
                                      variant="contained"
                                      style={{
                                        textTransform: "none",
                                        backgroundColor: "orange",
                                        color: 'white',
                                        fontSize: '17px',
                                        fontWeight: 'bold',
                                        marginRight: "20px"

                                      }}
                                      onClick={handleSaveEdited}>
                                      ??????????????????
                                    </Button>
                                  </TableCell>
                                </TableRow>
                                :
                                <TableRow
                                  key={i.id}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                  <TableCell component="th" scope="row">
                                    {i.full_name}
                                  </TableCell>
                                  <TableCell>{i.phone}</TableCell>
                                  <TableCell style={{ display: "flex", justifyContent: "center" }}>
                                    <Button
                                      variant="contained"
                                      style={{
                                        textTransform: "none",
                                        backgroundColor: "orange",
                                        color: 'white',
                                        fontSize: '17px',
                                        fontWeight: 'bold',
                                        marginRight: "20px"

                                      }}
                                      onClick={handleEdit}>
                                      ??????????????????????????
                                    </Button>
                                    <Button
                                      variant="contained"
                                      style={{
                                        textTransform: "none",
                                        backgroundColor: "red",
                                        color: 'white',
                                        fontSize: '17px',
                                        fontWeight: 'bold'
                                      }}
                                      onClick={async () => {
                                        await deleteContact(i.id)
                                        setDeleted(!isDeleted)
                                      }}
                                    >
                                      ??????????????
                                    </Button>
                                  </TableCell>
                                </TableRow>
                            )
                          }
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>}
          </div>
        }
        <div className="addButtonBlock">
          <Button
            variant="contained"
            style={{
              textTransform: "none",
              backgroundColor: "#1668b4",
              color: 'white',
              fontSize: '17px',
              fontWeight: 'bold',
            }}
            onClick={handleOpenModal}
          >
            ???????????????? ??????????????
          </Button>
        </div>
        <div>
          <AddContactModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleCloseModal={handleCloseModal}
            id={id}
          />
        </div>
      </div>
    );
  } else return null
}

export default Contacts;
