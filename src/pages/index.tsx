import type { NextPage } from 'next'
import { Box, TButton } from '../components/Boxes/Box'
import { SiDiscord } from 'react-icons/si';
import { RiShoppingCartFill } from 'react-icons/ri';
import { BiDonateHeart } from 'react-icons/bi';

const Buttons: TButton[] = [
    {
        text: 'Bot de Música para Discord',
        icon: <SiDiscord />,
        url: 'https://discord.com/api/oauth2/authorize?client_id=926580642798534666&permissions=37088600&scope=bot%20applications.commands',
        border: 'hover:border-blue-500',
    },
    {
        text: 'Scripts e soluções para FiveM',
        icon: <RiShoppingCartFill className='text-green-400' />,
        url: 'https://discord.gg/3tWyNtzy7Y',
        border: 'hover:border-green-400',
    },
    {
        text: 'Contribuições',
        icon: <BiDonateHeart className='text-orange-500' />,
        url: 'https://twokei.store/discord',
        border: 'hover:border-orange-400',
        content: <h1>Ko-fi: <a className='text-orange-400' href="https://ko-fi.com/doiska">doiská</a></h1>
    }
]

const Home: NextPage = () => {
    return (
        <div className="flex w-screen h-screen bg-zinc-900 text-gray-300 items-center justify-center">
            <div className="flex flex-col gap-2">
                {Buttons.map((button, index) => <Box key={button.text + index} {...button} />)}
            </div>
        </div>
    )
}

export default Home
