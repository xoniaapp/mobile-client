// Non-UI related stuff
import account from '../../axios/account';
// UI related stuff
import { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Storage } from '@ionic/storage';
import Button from '../../components/Button/component';
import Seperator from '../../components/Seperator/component';
import TextBox from '../../components/TextBox/component';
import Text from '../../components/Text/component';
import './styling.css';

const storage = new Storage(); // for storing email and password
storage.create(); // create storage if does not exist

const SignIn: React.FC = () => {
  const UserCredentials = { // used to store user credentials for login
    'email': '',
    'password': ''
  };
  
  const OnEmailInputChangeHandler = (e: any) => { UserCredentials.email = e.target.value; } // used to store changes in UserCredentials on change
  
  const OnPaswdInputChangeHandler = (e: any) => { UserCredentials.password = e.target.value; } // used to store changes in UserCredentials on change
  
  const SignInButtonHandler = () => { // used to handle the login and log the user in
    const res = account.login(UserCredentials);
    console.log(res);
    if (UserCredentials.email === 'your' && UserCredentials.password === 'mom') {
      storage.set('UserCredentials', UserCredentials); // store user credentials
      setEMsg(''); // clear error message in case user returns to login screen
      window.location.href = '/channels/me';
    } else setEMsg('Incorrect email or password');
  }

  const [errorMsg, setEMsg] = useState(''); // used to store the error message, in case there is one, to show it to the user
                                            // for now its empty to show no message, but if there occurs an error, it will be set to an error message
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="centered">
          <img src={`${process.env.PUBLIC_URL}/assets/img/mainlogo.png`} height="210px" width="210px" alt="" />
          <TextBox type="text" placeholder="john.doe@roblox.com" onChange={OnEmailInputChangeHandler} />
          <TextBox type="password" placeholder="P4s5w0rd" onChange={OnPaswdInputChangeHandler} />
          <Seperator size="6" />
          <Button color="red" text="Sign in!" onClick={SignInButtonHandler} />
          <Text color="red" size="20" text={errorMsg} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
