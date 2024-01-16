import { FC } from 'react'
import s from './style.module.css'
import Image from 'next/image'
import backImg from '@/images/FilmsHomePage/indianaBack.png'
import textImage from '@/images/FilmsHomePage/indianaText.png'


const HeadBannerHome: FC = () => {

    return (

        <section className={s.root}>
            <Image src={backImg} alt="image" className={s.backImg} />
            <div className={s.content}>
            <Image src={textImage} alt="indiana djones" className={s.textImg} />
            <h3 className={s.text}>
            Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле.
            </h3>
            <div className={s.btnRow}>
                <button className={s.seeBtn}>Смотреть</button>
                <button className={s.infoBtn}>О фильме</button>
            </div>
            </div>
        </section>
    )
}

export default HeadBannerHome