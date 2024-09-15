import { useFormik } from "formik"
import axios from "axios";

export default function Login() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: LoginUser,
        validate: values => {
            let errors = {};
            if (values.email.length <= 10) {
                errors.email = "Email should be at least 10 characters long";
            }
            if (values.password.length <= 6) {
                errors.password = "Password should be at least 6 characters long";
            }
            return errors;
        }
    });
    async function LoginUser() {

        const { data } = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`, formik.values);
        console.log(data);
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
