import modalStyle from './ModalPostWindow.module.css'
import {useSelector, useDispatch} from "react-redux";
import {setDisableAction} from "../../store/cashReducer";

export function ModalPostWindow(){
    const dispatch = useDispatch()

    const modalState = useSelector(state => state.modalPost.active);

    const setDisableModal = (modalState) =>{
        dispatch(setDisableAction(modalState))
    }
    return(<>
        <div className={modalStyle.window}>
            <div className={modalStyle.postBody} onClick={()=> setDisableModal(!modalState)}>
                <h2>MODAL WINDOW</h2>
            </div>
        </div>
    </>)
}
