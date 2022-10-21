import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { BsBookmark,BsShareFill } from 'react-icons/bs';
import { FaStar,FaEye } from "react-icons/fa";


const NewsSummeryCard = ({news}) => {
    const {_id,title,rating,total_view,image_url,details,author}=news;
const {name,published_date,img}=news.author;
    return (
        <div>
         <Card className="">
      <Card.Header  className='d-flex justify-content-between'>
        <div className='d-flex '>
        <Image roundedCircle src={author?.img} style={{height:'60px'}} className='me-2'/>
        <div className=''>
            <p className='mb-0'>{author?.name}</p>
            <p>{author?.published_date}</p>
        </div>
        </div>
        <div className='d-flex align-items-center'>
         <BsBookmark className='me-2'></BsBookmark>
         <BsShareFill></BsShareFill>

        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length>250? <span>{details.slice(0,250)+ '...'}<Link to={`/news/${_id}`}>Read more..</Link></span>:<span>{details}</span>}
        </Card.Text>
       
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>
        <FaStar className='text-warning me-2'></FaStar> <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className='me-2'></FaEye>  <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default NewsSummeryCard;