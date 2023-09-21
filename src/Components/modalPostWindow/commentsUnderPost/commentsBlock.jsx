import {useDispatch, useSelector} from "react-redux";
import commentsStyle from './commentsUnderPost.module.css'
import {useEffect, useState} from "react";
import {requestForUserByEmail} from "../../../requests/customers";
import {useNavigate} from "react-router";
export function CommentsBlock(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [commentValue, setCommentValue] = useState('');
    const [textAreaRowsCount, setTextAreaRowsCount] = useState(1);

    useEffect(()=>{
        {props.comments && props.comments.map((comment,index)=>(
                console.warn(comment)
        ))}
    },[])

    const textAreaHeightChange = (countOfChars) => {
        if(countOfChars){
            console.log(true);
            console.log(countOfChars.split('').match(/\n/g))
        }
    }

    useEffect(()=>{
        textAreaHeightChange(commentValue)
    }, [commentValue])
    const sendComment = (data) => {
        console.log(data)
        // return data
    }

    return (
        <div className={commentsStyle.allComments}>
            {props.comments && props.comments.map((comment,index)=>(
                <div className={commentsStyle.commentItem} key={index} onClick={ () => {
                    // navigate('/Profile');
                    // dispatch(requestForUserByEmail(comment.email))
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
                <textarea rows={textAreaRowsCount} column={"33"} onChange={(event)=> setCommentValue(event.target.value)}/>
                <button type={'submit'}>send</button>
            </div>
        </div>
    )
}
