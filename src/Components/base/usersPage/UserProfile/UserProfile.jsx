import pageStyle from '../../MainPage/PostsList.module.css'
import profileStyle from './UserProfileStyle.module.css'
import {NavBar} from "../../../Navbar/NavBar";
import {Footer} from "../../../Footer/Footer";
import {Header} from "../../../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchCustomerPostsAction} from "../../../../store/customerReducer";
import {fetchAlbumsOfCustomer, fetchPostsOfCustomer} from "../../../../requests/customers";
import {ModalPostWindow} from "../../../modalPostWindow/ModalPostWindow";
import {setEnableAction} from "../../../../store/cashReducer";
export function UserProfile(){

    const modalState = useSelector(state => state.modalPost);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.userProcess.currentUser);
    const currentUserByEmail = useSelector(state => state.userProcess.currentUserByEmail)
    const postsOfUser = useSelector(state => state.customers.posts)
    const albumsOfUser = useSelector(state => state.customers.albums)

    const setEnableModal = (modalState) => {
        dispatch(setEnableAction(modalState))
    }

    const [active,setActive] = useState({posts: true,albums: false})
    useEffect(()=>{

        currentUser.id && dispatch(fetchPostsOfCustomer(currentUser.id))
        console.log(postsOfUser)
        },[])

    useEffect(()=>{
        currentUser.id && active.posts === true && dispatch(fetchPostsOfCustomer(currentUser.id))

        currentUser.id && active.albums === true && dispatch(fetchAlbumsOfCustomer(currentUser.id))
        console.log(albumsOfUser)

    },[active])

    return (<>
        <NavBar />
        {modalState.active ? <ModalPostWindow /> : null}

        <div className={profileStyle.profilePage}>
            <Header />
            <div className={pageStyle.leftIndent}>left indent</div>
            <div className={pageStyle.rightIndent}>right indent</div>

                <div className={profileStyle.profileInfo}>
                    {currentUser.id}
                    {currentUserByEmail.id}
                    <br/>
                    {currentUser.name}
                    <br/>
                    {currentUser.phone}
                    <br/>
                    {currentUser.username}
                    <br/>
                    {currentUser.website}
                    <br/>
                    {currentUser.email}
                    <br/>
                </div>
                <div className={profileStyle.profileContent}>
                    <button className={active.posts ?
                        profileStyle.profileContentButtonActive :
                        profileStyle.profileContentButton}
                        onClick={()=> setActive({posts: true, albums: false})}>POSTS</button>

                    <button className={active.albums ?
                        profileStyle.profileContentButtonActive :
                        profileStyle.profileContentButton}
                        onClick={()=> setActive({posts: false, albums: true})}>ALBUMS</button>

                    {/* rendering user posts/albums */}
                    {active.posts ?
                        postsOfUser ? postsOfUser.map((post,index)=>(
                            <div key={index} className={profileStyle.userPostsItem}
                                onClick={()=> setEnableModal({active: !modalState.active,
                                    title: post.title,
                                    body: post.body,
                                    postId: post.id})}>
                                {post.title}
                                <br/>
                                {post.body}
                            </div>
                        )) : <div><h1>EMPTY POSTS</h1></div>
                    :
                        albumsOfUser ? albumsOfUser.map((album,index)=>(
                                <div key={index} className={profileStyle.userPostsItem}>
                                    {album.title}
                                </div>
                            )) : <div><h1>EMPTY ALBUMS</h1></div>
                    }
                </div>
                <div className={pageStyle.userList}>
                </div>

            <Footer />
        </div>
    </>)
}
