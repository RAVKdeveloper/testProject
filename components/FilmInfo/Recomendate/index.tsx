import { FC } from 'react'
import s from './style.module.css'
import imgOne from '@/images/FilmInfoImages/film1.png'
import imgTwo from '@/images/FilmInfoImages/film2.png'
import imgThree from '@/images/FilmInfoImages/film3.png'
import imgFour from '@/images/FilmInfoImages/film4.png'
import imgFive from '@/images/FilmInfoImages/film5.png'
import imgSix from '@/images/FilmInfoImages/film6.png'
import imgSeven from '@/images/FilmInfoImages/film7.png'
import Image from 'next/image'


const RecomendateFilmInfo: FC = () => {

    const arrImg = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, imgSeven]

    return (

        <section className={s.root}>
            <h4 className={s.title}>Похожее</h4>
            <div className={s.cardRow}>
                {
                    arrImg.map((el, i) => (
                        <Image key={i} src={el} alt='film' className={s.card} />
                    ))
                }
            </div>
        </section>
    )
}

export default RecomendateFilmInfo