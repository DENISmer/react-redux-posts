import modalStyle from './ModalPostWindow.module.css'
import {useSelector, useDispatch} from "react-redux";
import {setDisableAction} from "../../store/cashReducer";
import {useEffect} from "react";
import {requestForPostComments} from "../../requests/customers";
import {removeCommentsAction, requestCommentsAction} from "../../store/commentsRequests";
import {CommentsBlock} from "./commentsUnderPost/commentsBlock";
import closeIcon from '../../data/icons/buttons/closeButton.png'

export default function ModalPostWindow(props){
    const dispatch = useDispatch()

    const modalState = useSelector(state => state.modalPost);
    const comments = useSelector(state => state.comments)

    useEffect(()=>{
        dispatch(requestForPostComments(modalState.postId))
        console.log(comments.comments)
    },[])

    const setDisableModal = (modalState) =>{
        dispatch(setDisableAction(modalState));
        dispatch(removeCommentsAction());
    }
    return(<>
        <div className={modalStyle.window}>
            <div className={modalStyle.postContent}>
                <div className={modalStyle.closeButton} onClick={()=>
                    setDisableModal({active: !modalState.active,
                        title: '',
                        body: '',
                        postId: ''})}>
                    <img alt={null} src={closeIcon}/>
                </div>
                <div className={modalStyle.postBody} >
                    <span>
                        <h4>
                            {modalState.title}
                        </h4>
                        {modalState.body}
                    </span>

                    {/*<br/><br/>{comments[0].name}*/}

                </div>
                <CommentsBlock comments={comments.comments}/>
            </div>

        </div>
    </>)
}
