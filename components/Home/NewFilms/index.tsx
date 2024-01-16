import { FC } from 'react'
import s from './style.module.css'
import { newFilmsArr } from '@/db/dataBase'
import Image from 'next/image'
import Link from 'next/link'


const NewFilmsHome: FC = () => {

    return (

        <section className={s.root}>
            <h3 className={s.title}>Новинки</h3>
            <div className={s.cardRow}>
                {
                    newFilmsArr.map(({ name, img, id }) => (
                     <Link href={'/film'} key={id} className={s.card}>
                    <Image src={img} alt={name} className={s.icon} />
                    <p className={s.name}>{name}</p>
                     </Link>
                    ))
                }
            </div>
        </section>
    )
} 

export default NewFilmsHome