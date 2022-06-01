import React from "react";
import styles from './Users.module.css';
import userPhoto from '../img/jim.jpg';
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {



    return <div>
        <Paginator totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage}/>
        {
            props.users.map(u => <div className={styles.users} key={u.id}>
                <div className={styles.left}>
                    <div className={styles.photo}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div className={styles.follow}>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }}>Unfollow
                            </button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>Follow
                            </button>}
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.nameStatus}>
                        <div className={styles.name}>{u.name}</div>
                        <div className={styles.status}>{u.status}</div>
                    </div>
                    <div className={styles.location}>
                        <div className={styles.city}>{"u.location.country"}</div>
                        <div className={styles.country}>{"u.location.city"}</div>
                    </div>
                </div>


            </div>)
        }
    </div>
}


export default Users;


// import React from "react";
// import styles from './Users.module.css';
// import userPhoto from '../img/jim.jpg'
// import * as axios from "axios";
//
// class Users extends React.Component {
//
//     componentDidMount() {
//         // alert('Mount');
//
//         if (this.props.users.length === 0) {
//
//             axios.get(`https://social-network.samuraijs.com/api/1.0/users?` +
//                 `page=${this.props.currentPage}&count=${this.props.pageSize}`)
//                 .then(response => {
//                     this.props.setUsers(response.data.items);
//                     this.props.setTotalUsersCount(response.data.totalCount);
//                 });
//         }
//     }
//
//     componentWillUnmount() {
//         // alert('Unmount');
//     }
//
//     componentDidUpdate() {
//         // alert('Update');
//     }
//
//     onPageChanged = (pageNumber) => {
//         this.props.setCurrentPage(pageNumber);
//
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?` +
//             `page=${pageNumber}&count=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsers(response.data.items);
//             });
//     }
//
//     render() {
//
//         let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
//
//         let pages = [];
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i);
//         }
//
//         return <div>
//             <div className={styles.pagination}>
//                 {pages.map(p => {
//                     return <span className={this.props.currentPage === p && styles.selectedPage}
//                                  onClick={() => {this.onPageChanged(p)}}>{p}</span>
//                 })}
//             </div>
//             {
//                 this.props.users.map(u => <div className={styles.users} key={u.id}>
//                     <div className={styles.left}>
//                         <div className={styles.photo}>
//                             <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
//                                  className={styles.userPhoto}/>
//                         </div>
//                         <div className={styles.follow}>
//                             {u.followed ?
//                                 <button onClick={() => {
//                                     this.props.unfollow(u.id)
//                                 }}>Unfollow</button> :
//                                 <button onClick={() => {
//                                     this.props.follow(u.id)
//                                 }}>Follow</button>}
//                         </div>
//                     </div>
//
//                     <div className={styles.right}>
//                         <div className={styles.nameStatus}>
//                             <div className={styles.name}>{u.name}</div>
//                             <div className={styles.status}>{u.status}</div>
//                         </div>
//                         <div className={styles.location}>
//                             <div className={styles.city}>{"u.location.country"}</div>
//                             <div className={styles.country}>{"u.location.city"}</div>
//                         </div>
//                     </div>
//
//
//                 </div>)
//             }
//         </div>
//     }
// }


// let Users = (props) => {
//
//     let getUsers = () =>
//     {
//         console.log(props.users.length)
//         if (props.users.length === 0) {
//
//             axios.get("https://social-network.samuraijs.com/api/1.0/users")
//                 .then(response => {
//                     props.setUsers(response.data.items);
//                 });
//         }
//     }
//
//     return <div>
//         <button onClick={getUsers}>Get Users</button>
//         {
//             props.users.map(u => <div className={styles.users} key={u.id}>
//                 <div className={styles.left}>
//                     <div className={styles.photo}>
//                         <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
//                              className={styles.userPhoto}/>
//                     </div>
//                     <div className={styles.follow}>
//                         {u.followed ?
//                             <button onClick={() => {
//                                 props.unfollow(u.id)
//                             }}>Unfollow</button> :
//                             <button onClick={() => {
//                                 props.follow(u.id)
//                             }}>Follow</button>}
//                     </div>
//                 </div>
//
//                 <div className={styles.right}>
//                     <div className={styles.nameStatus}>
//                         <div className={styles.name}>{u.name}</div>
//                         <div className={styles.status}>{u.status}</div>
//                     </div>
//                     <div className={styles.location}>
//                         <div className={styles.city}>{"u.location.country"}</div>
//                         <div className={styles.country}>{"u.location.city"}</div>
//                     </div>
//                 </div>
//
//
//             </div>)
//         }
//     </div>
// }

// export default Users;


// let Users = (props) => {
//     if (props.users.length === 0) {
//         // debugger;
//         console.log(props.users.length);
//         axios.get("https://social-network.samuraijs.com/api/1.0/users")
//             .then(response => {
//                 console.log(123)
//                 props.setUsers(response.data.items);
//             });
//     }
//
//     return (<div>
//             {
//                 props.users.map(u => <div className={styles.users} key={u.id}>
//                     <div className={styles.left}>
//                         <div className={styles.photo}>
//                             <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
//                                  className={styles.userPhoto}/>
//                         </div>
//                         <div className={styles.follow}>
//                             {u.followed ?
//                                 <button onClick={() => {
//                                     props.unfollow(u.id)
//                                 }}>Unfollow</button> :
//                                 <button onClick={() => {
//                                     props.follow(u.id)
//                                 }}>Follow</button>}
//                         </div>
//                     </div>
//
//                     <div className={styles.right}>
//                         <div className={styles.nameStatus}>
//                             <div className={styles.name}>{u.name}</div>
//                             <div className={styles.status}>{u.status}</div>
//                         </div>
//                         <div className={styles.location}>
//                             <div className={styles.city}>{"u.location.country"}</div>
//                             <div className={styles.country}>{"u.location.city"}</div>
//                         </div>
//                     </div>
//
//
//                     {/*<span>*/}
//                     {/*    <div>*/}
//                     {/*        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""*/}
//                     {/*             className={styles.userPhoto}/>*/}
//                     {/*    </div>*/}
//                     {/*    <div>*/}
//                     {/*        {u.followed ?*/}
//                     {/*            <button onClick={() => {*/}
//                     {/*                props.unfollow(u.id)*/}
//                     {/*            }}>Unfollow</button> :*/}
//                     {/*            <button onClick={() => {*/}
//                     {/*                props.follow(u.id)*/}
//                     {/*            }}>Follow</button>}*/}
//
//                     {/*    </div>*/}
//                     {/*</span>*/}
//                     {/*<span>*/}
//                     {/*    <span>*/}
//                     {/*        <div>{u.name}</div>*/}
//                     {/*        <div>{u.status}</div>*/}
//                     {/*    </span>*/}
//                     {/*    <span>*/}
//                     {/*        <div>{"u.location.country"}</div>*/}
//                     {/*        <div>{"u.location.city"}</div>*/}
//                     {/*    </span>*/}
//                     {/*</span>*/}
//                 </div>)
//             }
//         </div>
//     );
// };
//
// export default Users;