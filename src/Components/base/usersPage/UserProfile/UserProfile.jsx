import pageStyle from '../../MainPage/PostsList.module.css'
import profileStyle from './UserProfileStyle.module.css'
import {NavBar} from "../../../Navbar/NavBar";
import {Footer} from "../../../Footer/Footer";
import {Header} from "../../../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
export function UserProfile(){

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.userProcess.currentUser)

    useEffect(()=>{
        console.log(currentUser)
        },[])
    return (<>
        <NavBar />
        <div className={pageStyle.page}>
            <Header />

            <div className={pageStyle.leftIndent}>left indent</div>
            <div className={pageStyle.rightIndent}>right indent</div>

            <div className={pageStyle.userList}>
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
                    {}
                </div>
            </div>

            <Footer />
        </div>
    </>)
}
