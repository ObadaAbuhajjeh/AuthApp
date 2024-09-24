import axios from "axios";
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { jwtDecode } from "jwt-decode";

export default function Login(setIsLogin,setUserData) {
    const navigate = useNavigate();


    const schema = yup.object({
        email:yup.string().required().min(5).max(100).email(),
        password:yup.string().required().min(2).max(100),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: LoginUser,
        validationSchema:schema
    });
    async function LoginUser() {

        const { data } = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`, formik.values);
        console.log(data);
        if (data.message === 'success') {
            localStorage.setItem('userToken', data.token);
            setIsLogin(true);
            const decoded = jwtDecode(data.token);
            setUserData(decoded);
            navigate('/');
        }
    }
    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>

                <div className="form-floating mb-3 w-50">
                    <input type="email" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" id="email" value={formik.email} placeholder="" />
                    <label htmlFor="email">User Email</label>
                    {formik.touched.email && formik.errors.email ? <div className="alert alert-danger">{formik.errors.email}</div> : null}
                </div>

                <div className="form-floating mb-3 w-50">
                    <input type="password" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" id="pass" value={formik.password} placeholder="" />
                    <label htmlFor="pass">User Password</label>
                    {formik.touched.password && formik.errors.password ? <div className="alert alert-danger">{formik.errors.password}</div> : null}

                </div>

                <button type="submit" className="btn btn-outline-info p-2" > Login </button>
            </form>

        </div>
    )
}
