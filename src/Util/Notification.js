import { toast } from "react-toastify"

const poppopupBody = (text,type) => {
    toast[type](text, {
        theme: "colored",
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000
    })
}

export const poppupNoti = {
    loginSuccess: () => {
        poppopupBody("Đăng nhập thành công","success")
    },

    loginFailure: () => {
        poppopupBody("Đăng nhập thất bại","error")
    },
    logoutSuccess: () => {
        poppopupBody("Đăng xuất thành công","success")
    }
}