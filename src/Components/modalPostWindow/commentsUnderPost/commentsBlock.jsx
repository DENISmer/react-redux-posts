import {useDispatch, useSelector} from "react-redux";
import commentsStyle from './commentsUnderPost.module.css'
import {useEffect} from "react";
import {requestForUserByEmail} from "../../../requests/customers";
import {useNavigate} from "react-router";
export function CommentsBlock(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        {props.comments && props.comments.map((comment,index)=>(
                console.warn(comment)
        ))}
    },[])

    return (
        <div className={commentsStyle.allComments}>
            {props.comments && props.comments.map((comment,index)=>(
                <div className={commentsStyle.commentItem} key={index} onClick={ () => {
                    navigate('/Profile');
                    dispatch(requestForUserByEmail(comment.email))
                    }
                }>
                    <div className={commentsStyle.commentUserMail}>
                        {comment.email}
                    </div>
                    <br/>
                    {comment.name}
                    <br/>
                    {comment.body}
                </div>
            ))}
            <div className={commentsStyle.commentTextArea}>
                <input type={"text"}/>
                <button>send</button>
            </div>
        </div>
    )
}
