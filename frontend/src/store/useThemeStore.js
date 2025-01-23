import { create } from 'zustand';

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("theme") || "dark-theme", // Встановлюємо тему з localStorage або за замовчуванням "dark-theme"
    setTheme: (newTheme) => {
        localStorage.setItem("theme", newTheme);
        set({ theme: newTheme }); 
    },
}));
