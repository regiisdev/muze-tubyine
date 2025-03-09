import _ from "axios";
import { signOut } from 'next-auth/react';
const axios = _.create({
    baseURL: "/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});

axios.interceptors.request.use(
    (config) => {
        const user = localStorage.getItem("sl_auth_user"); // Get token from local storage or any auth mechanism
        if (user) {
            const token = JSON.parse(user)?.token;
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axios.interceptors.response.use((response) => {
    if (response.status == 403) {
        console.log("Not authorized");
        signOut({ redirect: false })
        localStorage.clear();

        window.location.href = "/auth/login";
    }

    return response;
});

async function fetcher(url: string) {
    try {
        const res = await axios.get(url);
        return res.data?.data || [];
    } catch (error) {
        throw error
    }
}

export { axios, fetcher };
