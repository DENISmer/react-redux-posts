import modalStyle from './ModalPostWindow.module.css'
import {useSelector, useDispatch} from "react-redux";
import {setDisableAction} from "../../store/cashReducer";
import {useEffect} from "react";
import {requestForPostComments} from "../../requests/customers";
import {requestCommentsAction} from "../../store/commentsRequests";

export function ModalPostWindow(props){
    const dispatch = useDispatch()

    const modalState = useSelector(state => state.modalPost);
    const comments = useSelector(state => state.comments.comments)

    useEffect(()=>{
        dispatch(requestForPostComments(modalState.postId))
        console.log(modalState)
    },[])
    const setDisableModal = (modalState) =>{
        dispatch(setDisableAction(modalState))
    }
    return(<>
        <div className={modalStyle.window}>
            <div className={modalStyle.postBody} onClick={()=> setDisableModal({active: !modalState.active,
                title: '',
                body: '',
                postId: ''})}>
                <h2>{modalState.title}</h2>
                <div>________________________________________________________</div>
                <br/>
                <h4>{modalState.body}</h4>
                <br/>
                <div>________________________________________________________</div>
                <br/>
                <div className={modalStyle.comments}>{comments[0].name}</div>

                    {/*<br/>{comments[0].body}*/}

            </div>
        </div>
    </>)
}
