import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";
import { setUser } from "@/redux/slice/authSlice";
import { HeroButton } from "@/components/Hero/Styled";
import toast from "react-hot-toast";

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const activeUrl = usePathname();
  const activeLang = activeUrl.split("/")[1];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(setUser(""));
      toast.success("Başarıyla çıkış yapıldı!");
      router.push(`/${activeLang}`);
    } catch (error) {
      console.error("Logout failed: ", error.message);
      toast.error("Logout failed: ", error.message);
    }
  };

  return <HeroButton onClick={handleLogout}>Çıkış Yap</HeroButton>;
};

export default Logout;
