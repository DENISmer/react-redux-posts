import pageStyle from '../../MainPage/PostsList.module.css'
import profileStyle from './UserProfileStyle.module.css'
import {NavBar} from "../../../Navbar/NavBar";
import {Footer} from "../../../Footer/Footer";
import {Header} from "../../../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchCustomerPostsAction} from "../../../../store/customerReducer";
import {fetchPostsOfCustomer} from "../../../../requests/customers";
export function UserProfile(){

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.userProcess.currentUser)
    const postsOfUser = useSelector(state => state.customers.posts)

    const [active,setActive] = useState({posts: true,albums: false})
    useEffect(()=>{

        currentUser.id && dispatch(fetchPostsOfCustomer(currentUser.id))
        console.log(postsOfUser)
        },[])

    useEffect(()=>{
        currentUser.id && active.posts && dispatch(fetchPostsOfCustomer(currentUser.id))
    },[active.posts])

    return (<>
        <NavBar />

        <div className={profileStyle.profilePage}>
            <Header />
            <div className={pageStyle.leftIndent}>left indent</div>
            <div className={pageStyle.rightIndent}>right indent</div>

                <div className={profileStyle.profileInfo}>
                    {currentUser.id}
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

                    {postsOfUser ? postsOfUser.map((post,index)=>(
                    <div key={index} className={profileStyle.userPostsItem}>
                        {post.id}{post.title}{post.body}
                    </div>
                )) : <div><h1>EMPTY</h1></div>}

                </div>
                <div className={pageStyle.userList}>

                </div>

            <Footer />
        </div>
    </>)
}
