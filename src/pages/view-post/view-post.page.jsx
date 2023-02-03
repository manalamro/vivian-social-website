import { useState ,useEffect} from 'react'
import './view-post.css'
import { useParams } from 'react-router-dom'
import Author from '../../components/author/author.component'
import Actions from '../../components/post-actions/actions.component'

const ViewPost = (props) => {
  const [post, setPost] = useState(null);
  const params = useParams();

  useEffect(() => {
    const currentPost = props.posts.find(p => p.postId == params.id) || null;
    setPost(currentPost);
  }, [params.id, props.posts]);

  
  return (
    <div>
      {
        post !== null
          ? <div className="view-post">
            <img src={post.image} alt="nature" />
            <Author
              author={post.author}
              postTime={post.postTime}
              postId={post.postId}
            />
            <div className="body">
              <p>
                {post.body}
              </p>
            </div>
            <Actions
              likesCount={post.likesCount}
              commentsCount={post.commentsCount}
            />
          </div>
          : <h2>Post Not found</h2>
      }

    </div>

  )
}

export default ViewPost

