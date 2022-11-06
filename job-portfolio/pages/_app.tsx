import '../styles/globals.css'
import type { AppProps } from 'next/app';

// importing our context
import { StateProvider, useThemeProvider } from "../context/ThemeProvider";
import reducer, {initialThem} from "../context/reducer"; // our reducer function

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider reducer={reducer} initialTheme={initialThem} >
      <Component {...pageProps} />
    </StateProvider>
  )
}
