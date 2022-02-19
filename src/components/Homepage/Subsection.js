import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Main= styled.div`
display:flex;
margin:10px 0 30px 0;
justify-content:space-between;
font-size:20px;
`;
const MainLeft= styled.div`
width:30%;
display:block;
margin:10px;
text-align:center;
`;
const MainCenter= styled.div`
width:30%;
display:block;
margin:10px;
text-align:center;
`;
const MainRight= styled.div`
width:30%;
display:block;
margin:10px;
text-align:center;
`;
const SubSection = () => {
    return(
        <Main>
         <MainLeft>
         {/* <FontAwesomeIcon icon={solid('user-secret')} /> */}
             <h2>Services</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet dui eu massa euismod, quis mollis sapien venenatis. Proin sodales feugiat lacinia. Proin maximus consectetur euismod. Etiam hendrerit interdum nulla.</p>
         </MainLeft>
         <MainCenter>
         <h2>Services</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet dui eu massa euismod, quis mollis sapien venenatis. Proin sodales feugiat lacinia. Proin maximus consectetur euismod. Etiam hendrerit interdum nulla.</p>
         </MainCenter>
         <MainRight>
         <h2>Services</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet dui eu massa euismod, quis mollis sapien venenatis. Proin sodales feugiat lacinia. Proin maximus consectetur euismod. Etiam hendrerit interdum nulla.</p>
         </MainRight>
        </Main>
    )
};
export default SubSection;