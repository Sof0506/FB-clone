import React from 'react'
import {ChevronDownIcon,ShoppingBagIcon,UserGroupIcon} from "@heroicons/react/outline"
import {CalendarIcon,ClockIcon,DesktopComputerIcon,UsersIcon} from "@heroicons/react/solid"
import { useSession } from 'next-auth/react'
import SidebarRow from "../components/SidebarRow"

function Sidebar() {
  const {data:session}=useSession();
  if(session)
 { return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
    <SidebarRow className="font-semibold" src={session.user.image} title={session.user.name}/>
    <SidebarRow Icon={UsersIcon} title="Friends"/>
    <SidebarRow Icon={UserGroupIcon} title="Groups"/>
    <SidebarRow Icon={ShoppingBagIcon} title="Marketplace"/>
    <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
    <SidebarRow Icon={CalendarIcon} title="Events"/>
    <SidebarRow Icon={ClockIcon} title="Memories"/>
    <SidebarRow Icon={ChevronDownIcon} title="See more"/>
    </div>
  )}
}

export default Sidebar