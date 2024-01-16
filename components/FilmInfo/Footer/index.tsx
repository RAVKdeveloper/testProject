import { FC } from 'react'
import s from './style.module.css'


const FooterFilmInfo: FC = () => {

    return (

        <footer className={s.root}>
            <h5 className={s.title}>Информация</h5>
            <div className={s.columnRow}>
                <article className={s.column}>
                    <p className={s.columnTitle}>Премьера в мире</p>
                    <p className={s.columnValue}>31 октября 2022</p>
                    <p className={s.columnTitle}>Оригинальное название</p>
                    <p className={s.columnValue}>Wednesday</p>
                </article>
                <article className={s.column}>
                    <p className={s.columnTitle}>Страна</p>
                    <p className={s.columnValue}>США</p>
                    <p className={s.columnTitle}>Жанры</p>
                    <p className={s.columnValue}>Фентези, Комедия, Криминал, Детектив</p>
                </article>
                <article className={s.column}>
                    <p className={s.columnTitle}>Язык аудиодорожки</p>
                    <p className={s.columnValue}>Rus, Eng</p>
                    <p className={s.columnTitle}>Качество</p>
                    <p className={s.columnBage}>Full HD</p>
                </article>
            </div>
        </footer>
    )
}

export default FooterFilmInfo