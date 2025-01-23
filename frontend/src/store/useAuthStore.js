import { create } from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000" : "/";
export const useAuthStore = create((set) => ({
    authUser: null,
    ratingUsers: [],
    isSigningUp: false,
    isLogginingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");

            set({ authUser: res.data })
        } catch (error) {
            console.log("Error in checkAuth", error);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false, })
        }
    },

    signUp: async (data) => {
        set({ isSigningUp: true });

        try {
            const res = await axiosInstance.post("/auth/signup", data)
            set({ authUser: res.data });
            toast.success("Акаунт створено");

        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }
    },

    login: async (data) => {
        set({ isLogginingIn: true });

        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({ authUser: res.data });
            toast.success("Ви увійшли в акаунт");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isLogginingIn: false });
        }
    },

    logout: async () => {
        try {
            const res = await axiosInstance.post("/auth/logout");
            set({ authUser: null });
            toast.success("Ви вийшли з акаунта")
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    updateProfile: async (data) => {
        set({ isUpdatingProfile: true });
        try {
            const res = await axiosInstance.put("/auth/update-profile", data);
            set({ authUser: res.data });
            toast.success("Фото оновлено");
        } catch (error) {
            console.log("Error in update-profile");

            toast.error(error.response.data.message);
        } finally {
            set({ isUpdatingProfile: false });
        }
    },

    fetchRatingUsers: async () => {
        try {
            const res = await axiosInstance.get("/rating/rating"); // Запит до бекенду
            set({ ratingUsers: res.data }); // Збереження користувачів у стан
        } catch (error) {
            console.error("Error fetching rating users:", error);
        } 
    }
}))
