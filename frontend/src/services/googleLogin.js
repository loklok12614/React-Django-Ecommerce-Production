import axios from "axios";

const { REACT_APP_BASE_BACKEND_URL } = process.env;

/** 316802535562-3frd4qtsla2e3vg2rpqrite5b14dh6s5.apps.googleusercontent.com
 * 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
 * This is the accesstoken of the user obtained from Google
 */
const googleLogin = async ({ data, access_token }) => {
    const headers = {
        Authorization: access_token,
        'Content-Type': 'application/json'
    }

    const res = await axios.post(`${REACT_APP_BASE_BACKEND_URL}/api/users/google/`, data, { headers })
    return await res.data
  }

export default googleLogin;