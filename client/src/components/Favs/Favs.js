import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from '../PostItem/PostItem';

export default function Likes() {
  const { like } = useSelector((state) => state);
  return (
    <>
      {like.map((el) => <PostItem post={el} key={el.id} />)}
    </>
  );
}
