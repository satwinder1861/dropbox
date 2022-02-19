import styled from 'styled-components';
import image1 from './components/Homepage/image1.jpg';
// import { increment,decrement } from './components/action';
// import {useSelector,useDispatch} from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import MainSection from './components/Homepage/MainSection';
import ProfileSection from './components/ProfilePage/ProfileSection';
import SubSection from './components/Homepage/Subsection';
import LoginForm from './components/LoginPage/LoginForm';
import ProfileForm from './components/ProfilePage/ProfileForm';
const AppMain = styled.div`
display:block;
margin:0;
padding:0;
`;
const Br = styled.div`
display:block;
height:15px;
width:100%;
background-color:#0067B8;
`;
const Header = styled.header`
display:flex;
height:450px;
width:100%;
`;
const HeaderLeft = styled.div`
display:block;
height:100%;
width:50%;
background-color:#413839;
color:white;
`;
const HeaderRight = styled.div`
display:block;
width:50%;
height:450px; 
`;
const Img = styled.img`
width:100%;
height:450px;`;
function Homepage() {
  return (
    <AppMain>
      <Navbar/>
      {/* <Br/> */}
      <Header>
        <HeaderLeft>
          <p>Welcome to Gallery</p>
          <p>Place to create,maintain and store images or files</p>
        </HeaderLeft>
        <HeaderRight><Img src={image1}></Img></HeaderRight>
      </Header>
    
    </AppMain>
  )
}
function Profilepage() {
  // const counter =useSelector(state => state.counterReducer);
  // const dispatch = useDispatch();
  // const stuff= () => dispatch(increment())
  return (
    <AppMain>
      <Navbar/>
          <ProfileForm/>
          <div>
        <ProfileSection/>
        </div>
    </AppMain>
  )
}
    function Loginpage() {
      // const counter =useSelector(state => state.counterReducer);
      // const dispatch = useDispatch();
      // const stuff= () => dispatch(increment())
      return (
        <AppMain>
          <Navbar/>
            <div>
            <LoginForm/>
            </div>
        </AppMain>
  
  

  )
}

export {Homepage,Loginpage,Profilepage};
