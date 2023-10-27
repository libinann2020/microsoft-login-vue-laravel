import { createStore } from "vuex";
import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "445e9c07-733c-411c-8b24-2f05727d71e6",
        client_secret: "fa225cbe-9c5a-43c8-981e-9b2613635b4c",
        authority: "https://login.microsoftonline.com/common/",
        // "https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a",
        redirectUri: "http://localhost:8000", // Your redirect URI
    },
    cache: {
        cacheLocation: "localStorage",
    },
};

const msalInstance = new PublicClientApplication(msalConfig);

const store = createStore({
    state() {
        return {
            msalConfig,
            msalInstance, // Store the initialized MSAL instance
            accessToken: "",
        };
    },
    mutations: {
        setAccessToken(state, token) {
            state.accessToken = token;
        },
    },
});

export default store;
