import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            purple: string;
            hover_purple: string;
            black: string;
            grey: string;
            hover_red: string;
            deadline: string;
            in_progress: string;
            comp: string;
            placeholder: string;
            purple_active: string;  
        }
    }
}