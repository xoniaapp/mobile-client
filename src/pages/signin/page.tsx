import { IonContent, IonPage } from '@ionic/react';
import GreenButton from '../../components/RedButton/component';
import Seperator from '../../components/Seperator/component';
import TextBox from '../../components/TextBox/component';
import 'axios';
import './styling.css';

const SignIn: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="centered">
          <img src={`${process.env.PUBLIC_URL}/assets/img/mainlogo.png`} height="210px" width="210px" alt="" />
          <TextBox type="text" placeholder="john.doe@roblox.com" />
          <TextBox type="password" placeholder="P4s5w0rd" />
          <Seperator size="6" />
          <GreenButton text="Sign in!" onClick="" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
