import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { addPosts } from '../../Redux/actions/postActions';
import PostItem from '../PostItem/PostItem';

export default function PostPage() {
  const posts = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!posts.length) {
      dispatch(addPosts());
    }
  }, []);

  return (
    <Row>
      {posts.map((post) => <PostItem key={post.id} post={post} />)}
    </Row>
  );
}
