import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
import { withFormik } from 'formik'
import { connect, useSelector } from 'react-redux';
import { SagaType } from '../../Redux/Saga/SagaType/SagaType';
import { DelayTime } from '../../Util/Constant';
import * as Yup from 'yup'
const LoginForm = (props) => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;




    const [clickLogin, setClickLogin] = useState(false)
    const loginAnimation = useSpring({
        from: { transform: 'translateX(100%)' },
        transform: props.openLogin ? 'translateX(0%)' : 'translateX(100%)'
    })

    return <animated.div style={loginAnimation} className="login-form">
        <form onSubmit={handleSubmit} className="form-control myForm">
            <div className="form-group">
                <input onChange={handleChange} type="text" className="form-control" name="taiKhoan" placeholder="Email" />
                <p style={{fontSize:'14px',color:'red'}}>{errors.taiKhoan}</p>
            </div>
            <div className="form-group">
                <input onChange={handleChange} type="password" className="form-control" name="matKhau" placeholder="Password" />
                <p style={{fontSize:'14px',color:'red'}}>{errors.matKhau}</p>
            </div>
            <div className="form-group btn-group">
                <button
                    onClick={() => {
                        if (clickLogin == false) {
                            setClickLogin(!clickLogin)
                            setTimeout(() => {
                                setClickLogin(clickLogin)
                                props.setOpenLogin(false)
                            }, DelayTime.LOGIN_DELAY)
                        }
                    }}
                    type="submit" className="myBtn login-btn">
                    {!clickLogin ? <></> : <div className="spinner"><div></div><div></div></div>}
                    ĐĂNG NHẬP
                </button>
                <button type="button" className="normalBtn">Quên mật khẩu</button>
            </div>
            <button type="button" className="myBtn register-btn">ĐĂNG KÝ THÀNH VIÊN</button>
        </form>
    </animated.div>;
};


const MyLoginForm = withFormik({
    mapPropsToValues: () => ({
        taiKhoan: '',
        matKhau: ''
    }),

    // Custom sync validation
    validationSchema: Yup.object().shape({
        taiKhoan: Yup.string().required('Bạn cần nhập tài khoản vào đây !'),
        matKhau: Yup.string().required('Bạn cần nhập mật khẩu vào !')
    }),

    handleSubmit: (values, { props, setSubmitting }) => {
        props.dispatch({
            type: SagaType.LOGIN_API,
            userLogin: values
        })
    },

    displayName: 'BasicForm',
})(LoginForm);

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(MyLoginForm)
