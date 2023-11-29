import { useDispatch } from "react-redux";
import LoginInput from "../components/LoginInput";
import { asyncSetAuthUser } from "../states/authUser/action";

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="bg-gray-200">
      <div className="flex h-screen justify-center items-center">
        <LoginInput login={onLogin} />
      </div>
    </section>
  );
};

export default LoginPage;
