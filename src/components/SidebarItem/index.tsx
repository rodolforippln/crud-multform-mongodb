import Link from 'next/link'
import * as C from './styles'

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({ title, description, icon, path, active }: Props) => {

const BookIcon = 'https://img.icons8.com/ios/25/000000/book.png'
const MailIcon = 'https://img.icons8.com/ios/25/000000/composing-mail.png'
const ProfileIcon = 'https://img.icons8.com/ios/25/000000/head-profile.png'
    return (

            <Link href={path}> 
            <a>
            <C.Container>

                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' && <img src={ProfileIcon}/>}
                    {icon === 'book' && <img src={BookIcon}/>}
                    {icon === 'mail' && <img src={MailIcon}/>}
                    
                </C.IconArea>                   
                
                <C.Point active={active}></C.Point>

            </C.Container>

            </a>
                               
            </Link>      

    );
}