module.exports = Object.freeze(
    EMAIL_CONFIG =
        {
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'dangtunguyen_hr@outlook.com.vn', // email Hotmail của bạn
                pass: '@Dangtuan12' // mật khẩu email Hotmail của bạn
            },
            tls: {
                ciphers: 'SSLv3'
            }
        }
);
