import { useState } from "react"

function LikeTracker() {
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState("")

    function handleLike(postId) {
        setPosts(posts => 
                posts.map(post => 
                    post.id === postId ? { ...post, likes: post.likes + 1} : post
            )
        )    
    }

    function handleAddPost(e) {
        e.preventDefault();
        if (!newPost.trim()) return;
        setPosts([
            ...posts,
            {id: Date.now(), content: newPost, likes: 0 }
        ])
        setNewPost("")
    }

    return (
        <div>
            <form onSubmit={handleAddPost}> 
                <input
                    value={newPost}
                    onChange={e => setNewPost(e.target.value)}
                    placeholder="Write a post..."
                />
                <button type = "submit">Add Post</button>
            </form>
            <p>Posts:</p>
            {posts.map(post => (
                <Post key={post.id} post={post} onLike={() => handleLike(post.id)}/>
            ))}
        </div>
    )
}

function Post({post, onLike}) {
    return (
        <div>
            <p>{post.content} - Likes: {post.likes}</p>
            <button onClick={onLike}>Like this post</button>
        </div>
    )
}

export default LikeTracker