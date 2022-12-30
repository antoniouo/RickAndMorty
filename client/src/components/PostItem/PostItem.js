import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import { deletePost } from '../../Redux/actions/postActions';
import { addLike, delLike } from '../../Redux/actions/likeActions';

export default function PostItem({ post }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const deleteHandler = () => {
    dispatch(deletePost(post.id));
  };

  const addHandler = () => {
    dispatch(addLike(post));
  };

  const deleteLike = () => {
    dispatch(delLike(post));
  };

  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
      <img
        alt="person"
        src={post.image}
      />
      <CardBody>
        <CardTitle tag="h5">
          {post.id}
          {' '}
          {post.name}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          About
        </CardSubtitle>
        {!location.pathname.includes('favs')
          ? (
            <>
              <Button onClick={addHandler}>
                ToFavs
              </Button>
              <Button onClick={deleteHandler}>
                Delete
              </Button>
            </>
          )
          : (
            <Button onClick={deleteLike}>
              RemFrFavs
            </Button>
          )}
      </CardBody>
    </Card>
  );
}
