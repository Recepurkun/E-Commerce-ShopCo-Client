'use client'

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import Spinner from "@/components/Spinner";
import toast from "react-hot-toast";
import { HeroButton } from "@/components/Hero/Styled";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slice/authSlice";

function Login() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const router = useRouter();
    const activeUrl = usePathname();
    const activeLang = activeUrl.split('/')[1];
    const dispatch = useDispatch()


    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async () => {
        if (!validate()) return;

        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            dispatch(setUser(userCredential.user.email))
            setLoading(false);
            router.push(`/${activeLang}/user`);
            toast.success("Successfully registered");
        } catch (error) {
            const errorMessage = error.message;
            console.error("Error: ", errorMessage);
            toast.error("Registration failed");
            setLoading(false);
        }
    };

    const t = useTranslations("SignUp");

    return (
        <div>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                    <Spinner />
                </div>
            ) : (
                <div className="container p-3 p-lg-5">
                    <div className="d-flex flex-column flex-md-row p-3 p-lg-5">
                        <div className="col-12 col-md-6 mx-auto p-3 p-lg-5">
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">
                                        {t('Email')}
                                    </label>
                                    <input
                                        type="text"
                                        aria-label="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        placeholder={t('EnterEmail')}
                                        className={
                                            errors.email
                                                ? "input-error form-control"
                                                : "form-control"
                                        }
                                    />
                                    {errors.email && (
                                        <h6 className="error text-danger mt-1"> * {errors.email}</h6>
                                    )}
                                </div>
                                <div className="col-12">
                                    <label htmlFor="password" className="form-label">
                                        {t('Password')}
                                    </label>
                                    <input
                                        type="password"
                                        aria-label="Şifreniz"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="password"
                                        placeholder={t('EnterPassword')}
                                        className={
                                            errors.password
                                                ? "input-error form-control"
                                                : "form-control"
                                        }
                                    />
                                    {errors.password && (
                                        <h6 className="error text-danger mt-1"> * {errors.password}</h6>
                                    )}
                                </div>
                                <h6 className="text-end">{t('DontHaveAccount')}
                                    <Link className="text-decoration-underline ms-1" href={`/${activeLang}/signup`}>
                                        {t('SignIn')}
                                    </Link>
                                </h6>
                                <div className="d-flex justify-content-center pt-3">
                                    <HeroButton type="button" disabled={loading} className="w-100" onClick={handleRegister}>
                                        {t('Login')}
                                    </HeroButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
