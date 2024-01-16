import { FC } from 'react'
import s from './style.module.css'
import Image from 'next/image'
import backImg from '@/images/FilmInfoImages/image 111backImg.png'
import nameOne from '@/images/FilmInfoImages/VectortextOne.svg'
import nameTwo from '@/images/FilmInfoImages/VectortextTwo.svg'
import repost from '@/images/FilmInfoImages/repost.svg'
import like from '@/images/FilmInfoImages/like.svg'


const HeadBannerFIlmInfo: FC = () => {

    const tagsArr = ['2022 - ...', '1 сезон', 'США', 'Ужасы', '0+']
    const paginationArr = [1, 2, 3]

    return (

        <section className={s.root}>
            <Image src={backImg} alt="backImg" className={s.backImg} />
            <div className={s.topContent}>
                <div className={s.nameImgRow}>
                    <Image src={nameOne} alt='wednesday' />
                    <Image src={nameTwo} alt='wednesday' />
                </div>
                <div className={s.tagsRow}>
                    <span className={s.rating}>10</span>
                    {
                        tagsArr.map((el, i) => (
                            <span key={i} className={s.tag}>{el}</span>
                        )) 
                    }
                </div>
                <p className={s.text}>
                Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.
                </p>
            <div className={s.btnRow}>
                <button className={s.btnSee}>Смотреть</button>
                <button className={s.trailer}>Трейлер</button>
                <div className={s.actionBtn}>
                <Image src={repost} alt="repost" className={s.icon} />
                </div>
                <div className={s.actionBtn}>
                <Image src={like} alt="repost" className={s.icon} />
                </div>
            </div>
            <div className={s.pagination}>
                <p className={s.paginationText}>Сезоны</p>
                <div className={s.paginationBtnRow}>
                    {
                        paginationArr.map((el, i) => (
                            <button key={i} className={el === 1 ? `${s.paginationBtn} ${s.active}` : s.paginationBtn}>{el}</button>
                        ))
                    }
                </div>
            </div>
            </div>
        </section>
    )
}

export default HeadBannerFIlmInfo