import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// VLabs Components
import { VTimePicker } from 'vuetify/labs/VTimePicker'
import { VTreeview } from 'vuetify/labs/VTreeview'
//DragScroll
import { VueDraggableNext } from 'vue-draggable-next'
import { 
    BLUE_THEME, 
    ODELIA_THEME
} from '@/theme/LightTheme';
import {
    DARK_BLUE_THEME,
    DARK_AQUA_THEME,
    DARK_ORANGE_THEME,
    DARK_PURPLE_THEME,
    DARK_GREEN_THEME,
    DARK_CYAN_THEME
} from '@/theme/DarkTheme';

export default createVuetify({
    components: {
        ...components,
        draggable: VueDraggableNext,
        VTimePicker,
        VTreeview
    },
    directives,

    theme: {
        defaultTheme: 'BLUE_THEME',
        themes: {
            BLUE_THEME,
            ODELIA_THEME,
            DARK_BLUE_THEME,
            DARK_AQUA_THEME,
            DARK_ORANGE_THEME,
            DARK_PURPLE_THEME,
            DARK_GREEN_THEME,
            DARK_CYAN_THEME
        }
    },
    defaults: {
        VCard: {
            rounded: 'xl'
        },
        VTextField: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VTextarea: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VSelect: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VListItem: {
            minHeight: '45px'
        },
        VTooltip: {
            location: 'top'
        }
    }
});
