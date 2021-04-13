import { GlobalStyles } from '@mono/design-system';
import React from 'react';
import ReactDOM from 'react-dom';
import tw from 'twin.macro';

function App() {
    return (
        <GlobalStyles>
            <main css={tw`p-5`}>Welcome react-lerna-template!</main>
        </GlobalStyles>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
}
