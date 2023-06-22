import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaRegStar, FaStar, FaEye} from 'react-icons/fa';
import Rating from 'react-rating';
const NewsCard = ({news}) => {
  const {_id,title, details, image_url, author,total_view,rating } = news;
  return (
    <div>
       <Card className='mb-4'>
      <Card.Header className='d-flex align-items-center'>
      <Image style={{height:'40px'}} src={author?.img} roundedCircle />
      <div className='ps-2 flex-grow-1'>
        <p className='mb-0'>{author?.name}</p>
        <p className='mt-0 pt-0'><small>{moment(author?.published_date).format('yyyy-MM-d')}</small></p>
      </div>
      <div>
      <span className='me-2'> <FaRegBookmark></FaRegBookmark></span>
       <FaShareAlt></FaShareAlt>
      </div>
      </Card.Header>
      <Card.Body>
        <Card.Title> <h5>{title}</h5> </Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          <p>{details.length < 250 ? <>{details} </> : <> {details.slice (0, 250)} </> }... <Link to= {`/news/${_id}`}>Learn More</Link> </p>
        </Card.Text>
       
      </Card.Body>
      <Card.Footer className="d-flex">
       
       <div className='flex-grow-1'>
       <Rating 
       placeholderRating={rating?.number}
       emptySymbol={<FaRegStar></FaRegStar>}
       placeholderSymbol={<FaStar className='text-warning'></FaStar>}
       fullSymbol={<FaStar></FaStar>}
       readonly
       ></Rating>
      
  <span> {rating?.number}</span>
       </div>
       <div>
        <FaEye></FaEye> <span> {total_view} </span>
       </div>
        
      </Card.Footer>
    </Card>
    </div>
  );
};

export default NewsCard;