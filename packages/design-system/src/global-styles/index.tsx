import { css, Global } from '@emotion/react';
import React, { ReactNode } from 'react';

import FONT_FAMILIES from './font-families';

export interface GlobalStylesProps {
    children?: ReactNode;
}

export function GlobalStyles({ children }: GlobalStylesProps) {
    return (
        <>
            <Global
                styles={css`
                    html,
                    body {
                        width: 100%;
                    }
                    html {
                        box-sizing: border-box;
                        line-height: 1.5;
                    }
                    body {
                        margin: 0;
                        font-family: ${FONT_FAMILIES};
                    }
                    *,
                    *::before,
                    *::after {
                        box-sizing: inherit;
                    }
                `}
            />
            {children}
        </>
    );
}
