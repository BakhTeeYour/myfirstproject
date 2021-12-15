import React from 'react'
import './Post.css'
import Tags from './Tags';

function Post({ post }) {
    const { author } = post;
    const { photo } = post;

    return (
        <article>
            <header>
                <img src={author.avatar} className='Post-avatar' width="50" height="50" alt={author.name} />
                <h5>{author.name}</h5>
                <div>{post.created}</div>
                {post.hit && <span>HIT</span>}
                <div>
                    <div className="Post-content">{post.content}</div>
                    {photo && <img src={photo.url} alt={photo.alt} className="Post-photo" />}
                </div>
                <footer>
                    <span className="Post-likes">
                        <img
                            src={post.likedByMe ? "https://ssp-campaigns-tailor-uk.votenow.tv/53bff558ea629eaa917bdac92e4228be_0_465.jpeg" : "https://ssp-campaigns-tailor-uk.votenow.tv/28baadb11541089820c980bd65d49349_0_465.jpeg"}
                            alt="Logo"
                            width="50"
                            height="50" />
                        <span className="Post-likes-count">{post.likes}</span>
                    <Tags/>
                    <button>
                    {post?.tags[0]}
                    </button>
                    </span>
                </footer>
            </header>
        </article>
    )
}

export default Post
