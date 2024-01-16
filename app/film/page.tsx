import { FC } from 'react'
import s from './style.module.css'
import HeadBannerFIlmInfo from '@/components/FilmInfo/headBanner'
import SeriesFIlmInfo from '@/components/FilmInfo/Series'
import RecomendateFilmInfo from '@/components/FilmInfo/Recomendate'
import FooterFilmInfo from '@/components/FilmInfo/Footer'


const FilmInfoPage: FC = () => {

    return (

        <main className={s.root}>
            <HeadBannerFIlmInfo/>
            <SeriesFIlmInfo/>
            <RecomendateFilmInfo/>
            <FooterFilmInfo/>
        </main>
    )
}

export default FilmInfoPage