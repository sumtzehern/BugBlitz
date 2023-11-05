import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles"

//color design tokens
export const tokens = (mode) => ({
    ...(mode === 'dark' ? {
        grey: {
            100: "#fffefe",
            200: "#fffdfd",
            300: "#fffcfc",
            400: "#fffbfb",
            500: "#fffafa",
            600: "#ccc8c8",
            700: "#999696",
            800: "#666464",
            900: "#333232"
        },
        indigoA: {
            100: "#d1e0f9",
            200: "#a3c1f2",
            300: "#74a2ec",
            400: "#4683e5",
            500: "#1864df",
            600: "#1350b2",
            700: "#0e3c86",
            800: "#0a2859",
            900: "#05142d"
        },
        greenAccent: {
            100: "#dbece1",
            200: "#b8d9c2",
            300: "#94c7a4",
            400: "#71b485",
            500: "#4da167",
            600: "#3e8152",
            700: "#2e613e",
            800: "#1f4029",
            900: "#0f2015"
        },
        blueAccent: {
            100: "#cde3e3",
            200: "#9ac6c6",
            300: "#68aaaa",
            400: "#358d8d",
            500: "#037171",
            600: "#025a5a",
            700: "#024444",
            800: "#012d2d",
            900: "#011717"
        },
        primary: {
            100: "#e7ced0",
            200: "#cf9da2",
            300: "#b76b73",
            400: "#9f3a45",
            500: "#870916",
            600: "#6c0712",
            700: "#51050d",
            800: "#360409",
            900: "#1b0204"
        },
    } : {
        grey: {
            100: "#333232",
            200: "#666464",
            300: "#999696",
            400: "#ccc8c8",
            500: "#fffafa",
            600: "#fffbfb",
            700: "#fffcfc",
            800: "#fffdfd",
            900: "#fffefe"
        },
        indigoAccent: {
            100: "#05142d",
            200: "#0a2859",
            300: "#0e3c86",
            400: "#1350b2",
            500: "#1864df",
            600: "#4683e5",
            700: "#74a2ec",
            800: "#a3c1f2",
            900: "#d1e0f9"
        },
        greenAccent: {
            100: "#0f2015",
            200: "#1f4029",
            300: "#2e613e",
            400: "#3e8152",
            500: "#4da167",
            600: "#71b485",
            700: "#94c7a4",
            800: "#b8d9c2",
            900: "#dbece1"
        },
        blueAccent: {
            100: "#011717",
            200: "#012d2d",
            300: "#024444",
            400: "#025a5a",
            500: "#037171",
            500: "#358d8d",
            600: "#68aaaa",
            700: "#9ac6c6",
            800: "#cde3e3"
        },
        primary: {
            100: "#1b0204",
            200: "#360409",
            300: "#51050d",
            400: "#6c0712",
            500: "#870916",
            600: "#9f3a45",
            700: "#b76b73",
            800: "#cf9da2",
            900: "#e7ced0"
        }
    }
    )
})


// mui theme settings
export const themeSetting = (mode) => {
    const colors = tokens(mode)

    return {
        palette: {
            mode : mode,
            ...(mode === 'dark'
            ? {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral : {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background : {
                    default: colors.primary[500]
                }
            } : {
                primary: {
                    main: colors.primary[100],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral : {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background : {
                    default: "#FFE8C3"
                }
            }
            )
        },
        typegraphy: {
            fontFamily : ['Source Sans Pro', "sans-serif"].join(","),
            fontSize : 12,
            h1: {
                fontFamily: ['Source Sans Pro', "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ['Source Sans Pro', "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ['Source Sans Pro', "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ['Source Sans Pro', "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ['Source Sans Pro', "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ['Source Sans Pro', "sans-serif"].join(","),
                fontSize: 14,
            }
        }
    }
}

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
})

export const useMode = () => {
    const[mode, setMode] = useState("dark")

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
            setMode((prev) => (prev === 'light' ? "dark" : "light"))
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSetting(mode)), [mode])

    return [theme, colorMode]
}