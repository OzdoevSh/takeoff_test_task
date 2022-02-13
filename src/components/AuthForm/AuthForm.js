import  FormControl  from '@material-ui/core/FormControl';
import  InputLabel  from '@material-ui/core/InputLabel';
import  Input  from '@material-ui/core/Input';
import  Button  from '@material-ui/core/Button';
import './AuthForm.css'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function AuthForm(props) {
  const {
    users,
    getUserData,
    user,
    login
  } = props
  
  let navigate = useNavigate();

  const initialState = {
    email: '',
    password: '',
  }

  useEffect(async () => {
    await getUserData()
  }, []);


  const [values, setValues] = useState(initialState)
  function onChange(e){
    const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    console.log(values)
  }

  async function handleSubmit(){
    users.forEach(async i => {
      if(i.email === values.email && i.password === values.password){
        await login(i.id)
        navigate( `/users/${i.id}`,
        {
          state: {id: i.id}
        });
      }
    })
    
    
  }
  return (
      <div className="form">
        <p>Авторизация</p>
        <div>
          <FormControl>
            <InputLabel>Логин</InputLabel>
            <Input name="email" value={values.email} onChange={onChange}/>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel>Пароль</InputLabel>
            <Input name="password" value={values.password} onChange={onChange}/>
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
              Войти
            </Button>
          </FormControl>
        </div>
      </div>
  );
}

export default AuthForm;
