import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-inky-ten.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;