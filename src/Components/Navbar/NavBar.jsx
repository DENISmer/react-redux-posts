import NavBarStyles from './NavBarStyle.module.css'
export function NavBar(){
    return(
        <div className={NavBarStyles.NavBarWindow}>
            <div className={NavBarStyles.NavBarContent}>
                <div className={NavBarStyles.NavBarBody}>
                    <button >posts</button>
                    <button >users</button>
                    <button >albums</button>
                    <button >users</button>
                    <button >users</button>
                    <button >users</button>
                </div>
            </div>
        </div>
    )
}
