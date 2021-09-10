import React from 'react'
import CollectionImg from '../../assets/images/collection.png'

const CreatePost  =() =>{
    return <div className="post__create">
        <div className="empty">
            <img src={CollectionImg} alt="collection" />
            <p>Kéo ảnh và video vào đây.</p>
        </div>
    </div>
}

export default CreatePost