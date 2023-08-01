import {useSelector} from "react-redux";
import commentsStyle from './commentsUnderPost.module.css'
import {useEffect} from "react";
export function CommentsBlock(props){

    useEffect(()=>{
        {props.comments && props.comments.map((comment,index)=>(

                console.warn(comment)
        ))}
    },[])

    return (
        <div className={commentsStyle.allComments}>
            {props.comments && props.comments.map((comment,index)=>(
                <div className={commentsStyle.commentItem} key={index}>
                    {comment.email}
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
