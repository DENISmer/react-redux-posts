import NavBarStyles from './NavBarStyle.module.css'
import {useNavigate} from "react-router";
export function NavBar(){
    const navigate = useNavigate();

    return(
        <div className={NavBarStyles.NavBarWindow}>
            <div className={NavBarStyles.NavBarContent}>
                <div className={NavBarStyles.NavBarBody}>
                    <button onClick={()=> navigate('/')}>posts</button>
                    <button onClick={()=> navigate('/Users')}>users</button>
                    <button onClick={()=> navigate('/Albums')}>albums</button>
                    <button >users</button>
                    <button >users</button>
                    <button >users</button>
                </div>
            </div>
        </div>
    )
}
