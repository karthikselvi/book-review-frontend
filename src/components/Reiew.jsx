import React, { useEffect, useState } from 'react'
import PostReview from './PostReview'
import Card from 'react-bootstrap/Card';
import DefaultStar from './DefaultStar';
import Button from '@mui/material/Button';

function Review({ id }) {
  const [review, setReview] = useState([])
  const [open, setOpen] = useState(false)
  console.log(review)
  useEffect(() => {
    fetch(`https://book-review-backend-1.onrender.com/review/${id}`).then(res => res.json()).then(data => setReview(data))
  }, [])

  return (
    <div style={{ padding: "10px"}}>
      <div style={{ width: "200px",display: "flex", justifyContent: "center" }} >
        <Button  onClick={() => setOpen(!open)} variant="contained">Post Review</Button>
      </div>
      {review[0] == "N" ? (<p >No Reviews</p>) : (<div style={{margin:"20px"}}>
        {review.map((item) => (<div>
          <Card style={{margin:"0px",position:"static"}} >
            <Card.Body>
              <Card.Title>{item.name.toUpperCase()}</Card.Title>
              <Card.Text>{item.message}
              </Card.Text>
              <DefaultStar  rate={item.star} />
            </Card.Body>
          </Card>
        </div>))}
      </div>)}
      {open ? (<div style={{ left: "0", top: "0", width: "100vw", height: "100vh", position: "fixed", display: "flex", backgroundColor: "rgba(10, 10, 10, 0.6)", alignItems: "center", justifyContent: "center" }} >
        <div> 
          <PostReview setOpen={setOpen} open={open} BookId={id} />
        </div>
      </div>) : null}

    </div>
  )
}

export default Review