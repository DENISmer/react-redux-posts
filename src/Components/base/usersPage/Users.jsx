import UsersStyle from './UsersStyle.module.css';
import MainPageStyle from '../MainPage/PostsList.module.css'
import {NavBar} from "../../Navbar/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import commentIcon from "../../../data/icons/main page/comments.svg";
import {useEffect} from "react";
import {fetchCustomers} from "../../../requests/customers";
import {setCurrentUserAction} from "../../../store/currentUserReducer";
import {Footer} from "../../Footer/Footer";

export function Users(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector(state => state.customers.customers)
    const user = useSelector(state => state.userProcess)

    useEffect(()=>{
        dispatch(fetchCustomers())
        console.log(users)
    },[])


    return (<>

        <div className={MainPageStyle.page}>

            <div className={MainPageStyle.leftIndent}>left indent<NavBar /></div>
            <div className={MainPageStyle.rightIndent}>right indent</div>

            {users.length > 0 ? <div className={MainPageStyle.userList}>{users.map((user,index)=>(
                <div key={user.id} className={MainPageStyle.userInfo} onClick={()=> {
                    navigate('/Profile');
                    dispatch(setCurrentUserAction(users[user.id - 1]));
                    console.log(user)
                }}>
                    <br/>
                    <h5>{user.name}</h5>
                    <h5>{user.email}</h5>
                    {user.website}
                    <br/>
                    {user.phone}
                    <br/><br/>

                </div>
            ))}</div> : <div>клиенты отсутствуют</div>}
            <Footer/>
        </div>

    </>)
}
