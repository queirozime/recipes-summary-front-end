import 'firebase/auth';
import { Button, NavWrapper } from "../../components/Navbar/nav-styles";
import VerticalNavbar from "../../components/Navbar/vertical-navbar-component";
import { Container, Header, PageTitle } from "../Recipes/recipes-page-styles";
import { useEffect, useState } from 'react';
import AuthService from "../../components/AuthService";
import Loading from '../../components/Loading';
import { getAuth } from 'firebase/auth';
import {db} from '../../firebase';
import { collection, getDocs, doc } from "firebase/firestore";

type userProps = {
  authService: AuthService;
}

function UserPage(props:userProps) {
  const [isLoggingOut,setIsLoggingOut] = useState(false);
  const [userName,setUserName] = useState(null);
  const [email,setEmail] = useState(null);

  useEffect(() => {
      const fetchUserData = async () => {
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (currentUser) {
        const querySnapshot = await getDocs(collection(db,"users"));
      
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if(data.email === currentUser.email){
              setUserName(data.name);
              setEmail(data.email);

            }
        });
      }
    };
    fetchUserData();
  }, []);
  
  const logout = () => {
      setIsLoggingOut(true);
      props.authService.logout().then(()=>{
      setIsLoggingOut(false);
      window.location.reload();
      });
  }

  return (
    <>
      {isLoggingOut && <Loading />}
      <NavWrapper>
            <VerticalNavbar />
            <Container>
                <Header>
                    <PageTitle>Usuários</PageTitle>
                    <Button>Adicionar</Button>
                </Header>
                <div>
                  <p>{userName}</p>
                  <p>{email}</p>
                </div>

                <div>
                  <button onClick={logout}>logout</button>
                </div>
            </Container>
        </NavWrapper>
    </>
  );
}

export default UserPage;
