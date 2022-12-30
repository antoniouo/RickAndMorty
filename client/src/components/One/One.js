import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row } from 'reactstrap';
import { addOnePost } from '../../Redux/actions/postActions';
import PostItem from '../PostItem/PostItem';

export default function One() {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(addOnePost(id));
  }, []);

  return (
    <Row>
      <PostItem key={posts.id} post={posts} />
    </Row>
  );
}
