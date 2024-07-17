'use client'
import { useSelector } from 'react-redux';
import { usePathname } from "next/navigation";
import Logout from '../LogOut';
import Link from 'next/link';
import Image from 'next/image';
import userImg from "@/assets/userProfileImage.webp"
import { GoToHomepageBtn, GoToCartBtn } from '@/components/Hero/Styled';


const UserPage = () => {
    const currentUser = useSelector((state) => state.user.users);
    const girenUser = useSelector((state) => state.user.currentUserEmail);
    // console.log("girenUser: ", girenUser);

    const aktifKullaniciBilgileri = currentUser.filter(
        (kullanici) => kullanici.user_email === girenUser
    );
    // console.log("aktifKullanici: ", aktifKullaniciBilgileri);

    const hasActiveUser = aktifKullaniciBilgileri.length > 0;

    const activeUrl = usePathname();
    const activeLang = activeUrl.split('/')[1];

    return (
        <main className='container mt-5' style={{ height: "75vh" }}>
            {
                girenUser ? (
                    <div>
                        <h2 className='text-center mb-4'>Hoşgeldiniz</h2>

                        {hasActiveUser ? (
                            <div className='col-12 col-md-4 mx-auto'>
                                <div className="card rounded-3 border-2 text-center">
                                    <div className='text-center p-3'>
                                        <Image src={userImg} width={128} alt='UserImage' />
                                    </div>
                                    <div className="card-body  ">
                                        <h5 className="card-title">{aktifKullaniciBilgileri[0].user_name} {aktifKullaniciBilgileri[0].user_surname}</h5>
                                    </div>
                                    <ul className="list-group list-group-flush p-3 ">
                                        <li className="list-group-item border-0">Yaş: {aktifKullaniciBilgileri[0].user_age}</li>
                                        <li className="list-group-item border-0">Cinsiyet: {aktifKullaniciBilgileri[0].user_gender}</li>
                                        <li className="list-group-item border-0">Şehir: {aktifKullaniciBilgileri[0].user_city}</li>
                                    </ul>
                                    <div className="card-body d-flex flex-md-row flex-column justify-content-center gap-3 p-4">
                                        <GoToHomepageBtn>
                                            <Link href={`/${activeLang}`} className="card-link">Anasayfaya Git</Link>
                                        </GoToHomepageBtn>
                                        <GoToCartBtn>
                                            <Link href={`/${activeLang}/cart`} className="card-link">Sepete Git</Link>
                                        </GoToCartBtn>
                                    </div>
                                </div>
                            </div>

                        ) : <>
                            <div className='col-12 col-md-4 mx-auto'>
                                <div className="card rounded-3 border-2 text-center">
                                    <div className='text-center p-3'>
                                        <Image src={userImg} width={128} alt='UserImage' />
                                    </div>
                                    <div className="card-body  ">
                                        <h5 className="card-title">{girenUser}</h5>
                                    </div>
                                    <div className="card-body d-flex flex-md-row flex-column justify-content-center gap-3 p-4">
                                        <GoToHomepageBtn>
                                            <Link href={`/${activeLang}`} className="card-link">Anasayfaya Git</Link>
                                        </GoToHomepageBtn>
                                        <GoToCartBtn>
                                            <Link href={`/${activeLang}/cart`} className="card-link">Sepete Git</Link>
                                        </GoToCartBtn>
                                    </div>
                                </div>
                            </div>
                        </>
                        }
                        <div className='text-center my-3'> <Logout /></div>
                    </div>
                ) : (
                    ""
                )
            }
        </main>
    );
};

export default UserPage;

