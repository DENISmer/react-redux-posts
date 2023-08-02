import UsersStyle from './UsersStyle.module.css';
import MainPageStyle from '../MainPage/PostsList.module.css'
import {NavBar} from "../../Navbar/NavBar";

export function Users(){
    return (<><NavBar />
        <div className={MainPageStyle.page}>

        </div>
    </>)
}
