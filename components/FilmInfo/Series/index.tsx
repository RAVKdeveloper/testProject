import { FC } from 'react'
import s from './style.module.css'
import { seriesArr } from '@/db/dataBase'
import Image from 'next/image'
import remember from '@/images/FilmInfoImages/icon-park-outline_attentionremember.svg'


const SeriesFIlmInfo: FC = () => {

    return (

        <section className={s.root}>
            <div className={s.cardsRow}>
                {
                    seriesArr.map(({ img, time, id, serieCount }) => (
                      <article key={id} className={s.card}>
                    <Image src={img} alt={serieCount} className={s.image} />
                    <p className={s.seriesNumber}>{serieCount}</p>
                    <p className={s.seriesTime}>{time}</p>
                      </article>
                    ))
                }
            </div>
            <div className={s.infoColumn}>
                <h4 className={s.title}>Описание</h4>
                <p className={s.text}>
                Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, 
                одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии 
                «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, 
                что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, 
                — и всё это на фоне её новых и очень запутанных отношений в академии.
                </p>
                <div className={s.rememberTextBody}>
                   <Image src={remember} alt='icon' className={s.rememberIcon} />
                   <p className={s.rememberText}>
                   Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит вашему здоровью.
                   </p>
                </div>
            </div>
        </section>
    )
}

export default SeriesFIlmInfo