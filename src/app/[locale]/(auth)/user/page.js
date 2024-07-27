'use client'
import UserDetail from '@/components/User/UserDetail';
import UserOrders from '@/components/User/UserOrders';
import { useSelector } from 'react-redux';

const UserPage = () => {
    const currentUser = useSelector((state) => state.user.users);
    const girenUser = useSelector((state) => state.user.currentUserEmail);

    const aktifKullaniciBilgileri = currentUser.filter(
        (kullanici) => kullanici.user_email === girenUser
    );

    const hasActiveUser = aktifKullaniciBilgileri.length > 0;

    return (
        <div className='container mt-5'>
            <div className='d-flex flex-column flex-lg-row'>
                <UserDetail girenUser={girenUser} aktifKullaniciBilgileri={aktifKullaniciBilgileri} hasActiveUser={hasActiveUser} />
                {girenUser ? <UserOrders userEmail={aktifKullaniciBilgileri[0].user_email} /> : ""}
            </div>
        </div>
    );
};

export default UserPage;
