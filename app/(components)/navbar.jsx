import Link from 'next/link'
import { FaTicketAlt } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";

function navbar() {
  return (
    <nav>
    <div className='flex justify-between bg-nav p-4'>
    <div className='flex items-center space-x-4'>
        <Link href='/'>
        <FaTicketAlt />
        </Link>
        <Link href='Ticket/new'></Link>
        <IoTicketOutline />
        </div>
        <div className='text-default-text'>jain@gmail.com</div>
    </div>
    </nav>
  )
}

export default navbar