import { css } from '@emotion/react';
import React, { MouseEventHandler, ReactElement, ReactText } from 'react';
import tw from 'twin.macro';

export interface ButtonProps {
    children?: ReactText;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    primary?: boolean;
}

export function Button({
    children,
    primary,
    ...props
}: ButtonProps): ReactElement {
    return (
        <button
            {...props}
            css={[
                css`
                    margin: 0;
                    padding: 0.5rem 2rem;
                    border: 1px solid;
                    border-radius: 0.25rem;
                    box-shadow: none;
                    font-family: inherit;
                    font-size: 1rem;
                    cursor: pointer;
                `,
                tw`text-gray-600 bg-transparent border-gray-500`,
            ]}
            type={primary ? 'submit' : 'button'}
        >
            {children}
        </button>
    );
}
