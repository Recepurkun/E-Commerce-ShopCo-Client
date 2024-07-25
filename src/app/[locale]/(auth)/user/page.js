import UserDetail from '@/components/User/UserDetail';
import UserOrders from '@/components/User/UserOrders';
import { getUserData } from '@/services/api';

const UserPage = () => {

    return (
        <>
            <UserDetail />
            {/* <UserOrders userEmail={userEmail} /> */}
        </>
    );
};

export default UserPage;
