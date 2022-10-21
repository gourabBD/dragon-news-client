import React,{useContext} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BsGoogle} from "react-icons/bs";
import { BsGithub,BsFacebook,BsTwitter,BsLinkedin,BsWhatsapp,BsTwitch } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const RightSideNav = () => {
  const {providerLogin}=useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn=()=>{
    providerLogin(googleProvider)
    .then(result=>{
      const user=result.user;
      console.log(user)
    })
    .catch(error=>console.error(error))


  }
    return (
        <div>
            <ButtonGroup vertical>
      <Button onClick={handleGoogleSignIn} className='mb-3 ' variant="outline-primary"><BsGoogle></BsGoogle> LogIn with Google</Button>
      <Button className='mb-3' variant="outline-dark"> <BsGithub></BsGithub> LogIn with Github</Button>
      </ButtonGroup>
      <div className='mt-4'>
        <h5>Find us On</h5>
        <ListGroup>
      <ListGroup.Item className='mb-2'><BsFacebook></BsFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><BsTwitter></BsTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><BsLinkedin></BsLinkedin> Linkedin </ListGroup.Item>
      <ListGroup.Item className='mb-2'><BsWhatsapp></BsWhatsapp> Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-2'><BsTwitch></BsTwitch> Twitch</ListGroup.Item>
    </ListGroup>
      </div>

      <div>
        <BrandCarousel></BrandCarousel>
      </div>
        </div>
    );
};

export default RightSideNav;