import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import NewPostForm from './NewPostForm/NewPostForm';

class MyPosts extends React.Component {

    addNewPost = (values) => {
        this.props.addPost(values.newPostBody);
    }

    render() {
        let postElements = this.props.profilePage.postsData
            .map(post => <Post message={post.message} likesCount={post.likesCount}/>);

        return (
            <div>
                <div className={styles.posts}>
                    <div className={styles.postsTitle}>Posts</div>
                    <NewPostForm onSubmit={this.addNewPost}/>
                </div>
                {postElements}
            </div>
        );
    }
}

export default MyPosts;

// const MyPosts = (props) => {
//
//     let postElements = props.profilePage.postsData
//         .map(post => <Post message={post.message} likesCount={post.likesCount}/>);
//
//     let newPostElement = React.createRef();
//
//     let addPost = () => {
//         props.addPost();
//     };
//
//     let onPostChange = () => {
//         let text = newPostElement.current.value;
//         props.updateNewPostText(text);
//     };
//
//     return (
//         <div>
//             <div className={styles.posts}>
//                 <div className={styles.postsTitle}>Posts</div>
//                 <input
//                     ref={newPostElement}
//                     onChange={onPostChange}
//                     className={styles.postsInput}
//                     type="text"
//                     value={props.profilePage.newPostText}/>
//                 <div className={styles.postsBtn}>
//                     <button onClick={addPost}>Add Post</button>
//                 </div>
//             </div>
//             {postElements}
//         </div>
//     );
// };
