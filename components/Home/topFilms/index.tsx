import { FC } from 'react'
import s from './style.module.css'
import { topFilmsArr } from '@/db/dataBase'
import Image from 'next/image'


const TopFilmsHome: FC = () => {

    return (

        <section className={s.root}>
            <div className={s.titleRow}>
                <h4 className={s.title}>ТОП-10</h4>
                <span className={s.subTitle}>просмотров за неделю</span>
            </div>
            <div className={s.cardRow}>
                {
                    topFilmsArr.map(({ number, id, img }) => (
                     <article key={id} className={s.card}>
                    <p className={s.number}>{number}</p>
                    <Image src={img} alt={number} className={s.icon} />
                     </article>
                    ))
                }
            </div>
        </section>
    )
}

export default TopFilmsHome