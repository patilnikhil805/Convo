import DesktopSidebar from '@/components/sidebar/DesktopSidebar';
import Sidebar from '@/components/sidebar/Sidebar';
import getUsers from '../actions/getUsers';
import UserList from './components/UserList';
export default async function UsersLayout({
    children
}: {
    children: React.ReactNode;
}) {

    const users = await getUsers();
    return (
        <Sidebar>
            <div>
                
                <main className='h-full'>
                    <UserList items={users} />
                    {children}
                </main>
            </div>
        </Sidebar>
    )
}