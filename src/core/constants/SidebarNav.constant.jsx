import { BiSolidConversation } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { Link } from 'react-router-dom';
function sidebarNav(collapsed) {
	if (collapsed) {
		return [
			{
				key: 'dashboard',
				icon: (
					<Link to="/dashboard">
						<MdDashboardCustomize className='text-[18px] text-[#495057]' />
					</Link>
				),
			},
			{
				key: 'all-conversation',
				icon: (
					<Link to="/all-conversation">
						<BiSolidConversation className='text-[18px] text-[#495057]'/>
					</Link>
				),
			},
			{
				key: 'users',
				icon: (
					<Link to="/users">
						<FaUserGraduate className='text-[18px] text-[#495057]' />
					</Link>
				),
			},
		];
	} else {
		return [
			{
				key: 'dashboard',
				label:<Link to="/dashboard" className='text-[#495057]'>Dashboard</Link>,
				icon: (
					<Link to="/dashboard">
						<MdDashboardCustomize className='text-[18px] text-[#495057]' />
					</Link>
				),
			},
			{
				key: 'all-conversation',
				label:<Link to="/all-conversation" className='text-[#495057]'>All Conversation</Link>,
				icon: (
					<Link to="/all-conversation">
						<BiSolidConversation className='text-[18px] text-[#495057]'/>
					</Link>
				),
			},
			{
				key: 'users',
				label:<Link to="/users" className='text-[#495057]'>Users</Link>,
				icon: (
					<Link to="/users">
						<FaUserGraduate className='text-[18px] text-[#495057]' />
					</Link>
				),
			},
		];
	}
}

export default sidebarNav;
