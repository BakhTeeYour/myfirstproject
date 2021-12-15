import React from 'react'
import Post from '../Post/Post'
function Wall(props) {
    console.log (props)
    const posts = [
        {
            id: 2,
            author: {
                id: 1,
                avatar: 'data:image/png;base64,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',
                name: 'Open JS',
            },
            content: 'Наше крутое лого',
            photo: null,
            hit: true,
            likes: 222,
            likedByMe: true,
            tags: ['deadline', 'homework'],
            created: 1603774800,
        },
        {
            id: 1,
            author: {
                id: 1,
                avatar: 'data:image/png;base64,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',
                name: 'Open JS',
            },
            content: null,
            photo: {
                url:'https://habrastorage.org/webt/uf/x1/ms/ufx1msnzl3xgtcmlt-rkqhpytma.png',
                alt: 'openjs logo'
                },
            hit: true,
            likes: 10,
            likedByMe: false,
            created: 1603501200,
        },
    ]
    return (
        <div>
            {posts.map(elem => <Post key={elem.id} post={elem}/>)}
        </div>
    )
}

export default Wall
