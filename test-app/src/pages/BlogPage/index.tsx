import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { blogsActionCreators } from '../../redux/actions/blogsActionCreators';
import { blogsPostsBlogsSelector } from '../../redux/selectors/blogsSelectors';
import { Link } from 'react-router-dom';
import { DOTS } from '../../constants';
import facebookImg from '../../img/facebook.png';
import twitterImg from '../../img/twitter.png';
import './BlogPage.scss';

const BlogPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [blog] = useAppSelector(blogsPostsBlogsSelector);

  useEffect(() => {
    id && dispatch(blogsActionCreators.getOneBlog(id));
  }, [dispatch, id]);

  return (
    <>
      {blog && (
        <div className='blog-post-conteiner'>
          <div className='home-btn-wrapper'>
            <Link to={`/blogs`}>
              <Button className='home-btn' text='Home' />
            </Link>
            <span className='blog-post-id'> Post {id} </span>
          </div>
          <h2 className='blog-post-title'>{blog.title}</h2>
          <div className='blog-post-img-wrapper'>
            <img className='blog-post-img' src={`${blog.imageUrl}`} />
          </div>
          <div className='blog-post-text-wrapper'>
            <article>{blog.summary}</article>
          </div>
          <div className='social-links-wrapper'>
            <div className='social-links-item'>
              <a href='https://www.facebook.com/'>
                <img className='facebook' src={facebookImg} alt='facebook' />
              </a>
            </div>
            <div className='social-links-item'>
              <a href='https://www.facebook.com/'>
                <img className='facebook' src={twitterImg} alt='facebook' />
              </a>
            </div>
            <div className='social-links-item'>
              <a href='https://www.facebook.com/'>
                <p className='dots'>{DOTS}</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;
