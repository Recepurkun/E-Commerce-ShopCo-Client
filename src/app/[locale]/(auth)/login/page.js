// 'use client'

// import { useFormik } from "formik";

// import { useTranslations } from "next-intl";
// import { usePathname, useRouter } from "next/navigation";
// import Spinner from "@/components/Spinner";
// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/firebaseConfig";
// import toast from "react-hot-toast";
// import { HeroButton } from "@/components/Hero/Styled";
// import { authSchema } from "@/shema"

// function Login() {

//     const [loading, setLoading] = useState(false);
//     const router = useRouter();
//     const activeUrl = usePathname()
//     const activeLang = activeUrl.split('/')[1];

//     const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//     const onSubmit = async (values, actions) => {
//         console.log("ONSUBMİT");
//         // const { name, email, password } = values;
//         // if (!name || !email || !password) {
//         //     alert(t('AllFieldsRequired'));
//         //     return;
//         // }
//         // setLoading(true);
//         // try {
//         //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         //     // console.log("userCredential: ", userCredential.email);

//         //     const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];
//         //     existingUsers.push(values);
//         //     localStorage.setItem("userData", JSON.stringify(existingUsers));

//         //     toast.success(t('SuccessMessage'), {
//         //         icon: '🚀',
//         //         style: {
//         //             borderRadius: '10px',
//         //             marginTop: '30px',
//         //             marginRight: '30px',
//         //             background: '#333',
//         //             color: '#fff',
//         //         },
//         //     });
//         //     await delay(1500);
//         //     setLoading(false);
//         //     router.push(`/${activeLang}/login`);
//         // } catch (error) {
//         //     // const errorCode = error.code;
//         //     const errorMessage = error.message;
//         //     toast.error(`{t('ErrorMessage')} ${errorMessage} `, {
//         //         icon: '❌',
//         //         style: {
//         //             borderRadius: '10px',
//         //             marginTop: '30px',
//         //             marginRight: '30px',
//         //             background: '#333',
//         //             color: '#fff',
//         //         },
//         //     })
//         //     setLoading(false);
//         // }
//         // actions.resetForm();
//     };

//     const {
//         values,
//         errors,
//         isSubmitting,
//         touched,
//         handleChange,
//         handleSubmit,
//         handleBlur,
//     } = useFormik({
//         initialValues: {
//             name: "",
//             surname: "",
//             email: "",
//             password: "",
//             age: "",
//             city: "",
//             gender: "",
//             electronicMessage: false,
//             data: false,
//         },
//         validationSchema: authSchema,
//         onSubmit,
//     });

//     const t = useTranslations("SignUp");

//     return (
//         <div>
//             {loading ? (
//                 <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
//                     <Spinner />
//                 </div>
//             ) : (
//                 <div className="container p-3 p-lg-5">
//                     <div className="d-flex flex-column flex-md-row p-3 p-lg-5">
//                         <div className="col-12 col-md-6 border">
//                             resim
//                         </div>
//                         <div className="col-12 col-md-6 border p-3 p-lg-5">
//                             <form
//                                 className="row g-3"
//                                 onSubmit={handleSubmit}
//                             >
//                                 {/* <div className="col-12 col-md-6">
//                                     <label htmlFor="name" className="form-label">
//                                         {t('Name')}
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="Adınızı giriniz"
//                                         aria-label="Adiniz"
//                                         value={values.name}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         id="name"
//                                         className={
//                                             errors.name && touched.name
//                                                 ? "input-error form-control"
//                                                 : "form-control"
//                                         }
//                                     />
//                                     {errors.name && touched.name && (
//                                         <h6 className="error text-danger   mt-1"> * {errors.name}</h6>
//                                     )}
//                                 </div>
//                                 <div className="col-12 col-md-6">
//                                     <label htmlFor="surname" className="form-label">
//                                         {t('Lastname')}
//                                     </label>
//                                     <input
//                                         type="text"
//                                         aria-label="Soyadiniz"
//                                         value={values.surname}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         id="surname"
//                                         placeholder="Soyadınızı giriniz"
//                                         className={
//                                             errors.surname && touched.surname
//                                                 ? "input-error form-control"
//                                                 : "form-control"
//                                         }
//                                     />
//                                     {errors.surname && touched.surname && (
//                                         <h6 className="error text-danger   mt-1"> * {errors.surname}</h6>
//                                     )}
//                                 </div> */}
//                                 <div className="col-12 col-md-6">
//                                     <label htmlFor="email" className="form-label">
//                                         {t('Email')}
//                                     </label>
//                                     <input
//                                         type="text"
//                                         aria-label="Email"
//                                         value={values.email}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         id="email"
//                                         placeholder="Emailinizi giriniz"
//                                         className={
//                                             errors.email && touched.email
//                                                 ? "input-error form-control"
//                                                 : "form-control"
//                                         }
//                                     />
//                                     {errors.email && touched.email && (
//                                         <h6 className="error text-danger mt-1"> * {errors.email}</h6>
//                                     )}
//                                 </div>
//                                 <div className="col-12 col-md-6">
//                                     <label htmlFor="password" className="form-label">
//                                         {t('Password')}
//                                     </label>
//                                     <input
//                                         type="password"
//                                         aria-label="Şifreniz"
//                                         value={values.password}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         id="password"
//                                         placeholder="Şifrenizi giriniz"
//                                         className={
//                                             errors.password && touched.password
//                                                 ? "input-error form-control"
//                                                 : "form-control"
//                                         }
//                                     />
//                                     {errors.password && touched.password && (
//                                         <h6 className="error text-danger mt-1"> * {errors.password}</h6>
//                                     )}
//                                 </div>
//                                 {/* <div className="col-12 col-md-6">
//                                     <label htmlFor="city" className="form-label">
//                                         {t('City')}
//                                     </label>
//                                     <input
//                                         type="text"
//                                         aria-label="Şehriniz"
//                                         value={values.city}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         id="city"
//                                         placeholder="Şehrinizi giriniz"
//                                         className={
//                                             errors.city && touched.city
//                                                 ? "input-error form-control"
//                                                 : "form-control"
//                                         }
//                                     />
//                                     {errors.city && touched.city && (
//                                         <h6 className="error text-danger mt-1"> * {errors.city}</h6>
//                                     )}
//                                 </div>
//                                 <div className="col-12 col-md-6">
//                                     <label htmlFor="age" className="form-label">
//                                         {t('Age')}
//                                     </label>
//                                     <input
//                                         type="number"
//                                         aria-label="Yaşınız"
//                                         value={values.age}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         id="age"
//                                         placeholder="Yaşınızı giriniz"
//                                         className={
//                                             errors.age && touched.age
//                                                 ? "input-error form-control"
//                                                 : "form-control"
//                                         }
//                                     />
//                                     {errors.age && touched.age && (
//                                         <h6 className="error text-danger mt-1"> * {errors.age}</h6>
//                                     )}
//                                 </div> */}
//                                 {/* <div className="col-12">
//                                     <label htmlFor="inputGender" className="form-label">{t('Gender')}</label>
//                                     <select
//                                         className={
//                                             errors.gender && touched.gender
//                                                 ? "input-error form-select"
//                                                 : "form-select"
//                                         }
//                                         id="inputGender"
//                                         aria-label="Gender select"
//                                         value={values.gender}
//                                         name="gender"
//                                         onBlur={handleBlur}
//                                         onChange={handleChange}>
//                                         <option value="" label="Select gender" />
//                                         <option value="Erkek">{t('Man')}</option>
//                                         <option value="Kadın">{t('Woman')}</option>
//                                     </select>
//                                     {errors.gender && touched.gender && (
//                                         <h6 className="text-danger mt-2"> * {errors.gender}</h6>
//                                     )}
//                                 </div>
//                                 <div className="col-12">
//                                     <div className="form-check">
//                                         <input
//                                             className="form-check-input"
//                                             type="checkbox"
//                                             id="ElectroniCheck"
//                                             checked={values.electronicMessage}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             name="electronicMessage"
//                                         />
//                                         <label className="form-check-label" htmlFor="ElectroniCheck">
//                                             {t('ElectronicMesage')}
//                                         </label>
//                                         {errors.electronicMessage && touched.electronicMessage && (
//                                             <h6 className="text-danger mt-2"> * {errors.electronicMessage}</h6>
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div className="col-12">
//                                     <div className="form-check">
//                                         <input
//                                             className="form-check-input"
//                                             type="checkbox"
//                                             id="DataCheck"
//                                             checked={values.data}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             name="data"
//                                         />
//                                         <label className="form-check-label" htmlFor="DataCheck">
//                                             {t('Data')}
//                                         </label>
//                                         {errors.data && touched.data && (
//                                             <h6 className="text-danger mt-2"> * {errors.data}</h6>
//                                         )}
//                                     </div>
//                                 </div> */}
//                                 <div className="d-flex justify-content-center pt-3">
//                                     <HeroButton type="submit" disabled={isSubmitting} className="w-100">
//                                         {/* {t('SignInBtn')} */}
//                                         Giriş Yap
//                                     </HeroButton>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>)}

//         </div>
//     );
// }

// export default Login;


'use client'

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import Spinner from "@/components/Spinner";
import toast from "react-hot-toast";
import { HeroButton } from "@/components/Hero/Styled";

function Login() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loggedUser, setLoggedUser] = useState('')
    const router = useRouter();
    const activeUrl = usePathname();
    const activeLang = activeUrl.split('/')[1];

    const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
            // console.log("userCredential: ", userCredential.user.email);
            setLoggedUser(userCredential.user.email)
            toast.success("Successfully registered");
            await delay(500);
            setLoading(false);
            router.push(`/${activeLang}`);
        } catch (error) {
            console.error("Error: ", error);
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
                        <div className="col-12 col-md-6 border">
                            resim
                        </div>
                        <div className="col-12 col-md-6 border p-3 p-lg-5">
                            <div className="row g-3">
                                <div className="col-12 col-md-6">
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
                                <div className="col-12 col-md-6">
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
                                <div className="d-flex justify-content-center pt-3">
                                    <HeroButton type="button" disabled={loading} className="w-100" onClick={handleRegister}>
                                        {t('LoginBtn')}
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
