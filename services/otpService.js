const axios = require('axios');

const sendOtp = async (mobile, message) => {
    try {
        const username = 'knobee';
        const password = 'knowbee@12';
        const numbers = "91" + mobile;
        const sender = 'KNOBEE';
        const encodedMessage = encodeURIComponent(message);
        const data = `username=${username}&password=${password}&sender=${sender}&sendto=${numbers}&message=${encodedMessage}&PEID=1401833390000015765&templateid=1407165933571331624`;
        const url = `http://trans.promotionmantra.com/api.php?${data}`;
        const response = await axios.post(url);
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error sending OTP:", error); 
        throw new Error('Error sending OTP');
    }
};

const sendInternationalOtp = async (phncode, mobile, message) => {
    const authkeyUrl = "https://api.authkey.io/request";
    const params = {
        authkey: '08b4b8b7a52e1ccf',
        mobile: mobile,
        country_code: phncode,
        sms: message
    };
    try {
        const response = await axios.get(authkeyUrl, { params });
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw new Error('Error sending international OTP');
    }
};

module.exports = { sendOtp, sendInternationalOtp };
