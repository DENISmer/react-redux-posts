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
                <h2>MODAL WINDOW
                    <br/>
                    {modalState.title}
                    <br/>{comments[0].name}</h2>

            </div>
        </div>
    </>)
}
