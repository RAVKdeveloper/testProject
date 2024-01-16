import { FC } from 'react'
import Image from 'next/image'
import s from './style.module.css'
import logo from '@/images/SideBar/Logo (1).svg'
import search from '@/images/SideBar/Box Iconssearch.svg'
import home from '@/images/SideBar/Buttons TVhome.svg'
import films from '@/images/SideBar/Buttons TVfilms.svg'
import tv from '@/images/SideBar/Box Iconstv.svg'
import likes from '@/images/SideBar/Buttons TVlike.svg'
import user from '@/images/SideBar/Buttons TVuser.svg'
import arrow from '@/images/SideBar/Box Iconsarrow.svg'


const SideBar: FC = () => {

    return (

        <aside className={s.root}>
             <Image src={logo} alt={'logo'} width={144} height={50}  />
             <nav className={s.navigateBody}>
               <Image src={search} alt="icon" className={s.iconNav} width={44} height={44} />
               <Image src={home} alt="icon" className={s.iconNav} width={44} height={44} />
               <Image src={films} alt="icon" className={s.iconNav} width={44} height={44} />
               <Image src={tv} alt="icon" className={s.iconNav} width={44} height={44} />
               <Image src={likes} alt="icon" className={s.iconNav} width={44} height={44} />
               <Image src={user} alt="icon" className={s.iconNav} width={44} height={44} />
             </nav>
             <Image src={arrow} alt="arrow" className={s.arrow} />
        </aside>
    )
}


export default SideBar
