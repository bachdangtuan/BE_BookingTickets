
const STATUS = require("../constant/status.constant");
const alertTelegramWarning = (log_type, originalURL, statusCode) => {
    return `
💥 ALERT SYSTEMS:  💥
--------
LOG_TYPE:  ${log_type}
--------
PATH_URL:  ${originalURL}
--------
STATUS_CODE:  ${statusCode}
---------------------------------------
Vui lòng kiểm tra lại hệ thống 💚💚
                `
}

const alertTelegramLoginFalse = (log_type, originalURL, statusCode) => {
    return `
💥 ALERT SYSTEMS:  💥
--------
LOG_TYPE:  ${log_type}
--------
LỖI YÊU CẦU:  ĐĂNG NHẬP KHÔNG ĐÚNG MẬT KHẨU
--------
PATH_URL:  ${originalURL}
--------
STATUS_CODE:  ${statusCode}
---------------------------------------
Vui lòng kiểm tra lại hệ thống 💚💚
                `
}


exports.module = {
    alertTelegramWarning,
    alertTelegramLoginFalse
}
