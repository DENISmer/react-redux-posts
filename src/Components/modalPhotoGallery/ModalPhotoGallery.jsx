import PostWindowStyle from "../modalPostWindow/ModalPostWindow.module.css";
import GalleryWindowStyle from "./ModalPhotoGallery.module.css"
import closeIcon from '../../data/icons/buttons/closeButton.png'
import {useSelector} from "react-redux";

export function ModalPhotoGallery(props) {
    const photosOfAlbum = useSelector(state => state.customers.photos)
    console.log(photosOfAlbum);
    return (<>
        <div className={PostWindowStyle.window}>
            <div className={GalleryWindowStyle.closeButton} onClick={()=> props.disable()}><img alt={null} src={closeIcon}/></div>
            <div className={GalleryWindowStyle.container}>
                <h2 align={'center'}> {props.album.title}</h2>
                <div className={GalleryWindowStyle.content}>
                    {photosOfAlbum && photosOfAlbum.map((item, index) => (
                        <div key={index} className={GalleryWindowStyle.content_item}>
                            <img src={item.thumbnailUrl} alt={''} title={item.title}/>
                            {/*<span>{item.title}</span>*/}
                        </div>
                    ))}

                </div>
            </div>

        </div>
    </>)
}
