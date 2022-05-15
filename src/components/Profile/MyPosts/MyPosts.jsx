import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

// class MyPosts extends React.Component {
//
//
//     addPost = () => {
//         this.props.addPost();
//     };
//
//     onPostChange = (newPostElement) => {
//         let text = newPostElement.current.value;
//         this.props.updateNewPostText(text);
//     };
//
//     render() {
//         let postElements = this.props.profilePage.postsData
//             .map(post => <Post message={post.message} likesCount={post.likesCount}/>);
//         let newPostElement = React.createRef();
//
//         return (
//             <div>
//                 <div className={styles.posts}>
//                     <div className={styles.postsTitle}>Posts</div>
//                     <input
//                         ref={newPostElement}
//                         onChange={this.onPostChange}
//                         className={styles.postsInput}
//                         type="text"
//                         value={this.props.profilePage.newPostText}/>
//                     {/*<textarea className={styles.postsInput}*/}
//                     {/*          onChange={onPostChange}*/}
//                     {/*          ref={newPostElement}*/}
//                     {/*          value={props.newPostText}/>*/}
//                     <div className={styles.postsBtn}>
//                         <button onClick={this.addPost}>Add Post</button>
//                     </div>
//                 </div>
//                 {postElements}
//             </div>
//         );
//     }
//
// }


const MyPosts = (props) => {

    let postElements = props.profilePage.postsData
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div className={styles.posts}>
                <div className={styles.postsTitle}>Posts</div>
                <input
                    ref={newPostElement}
                    onChange={onPostChange}
                    className={styles.postsInput}
                    type="text"
                    value={props.profilePage.newPostText}/>
                {/*<textarea className={styles.postsInput}*/}
                {/*          onChange={onPostChange}*/}
                {/*          ref={newPostElement}*/}
                {/*          value={props.newPostText}/>*/}
                <div className={styles.postsBtn}>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;