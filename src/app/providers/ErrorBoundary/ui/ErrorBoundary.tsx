import React, { ErrorInfo, ReactNode } from 'react';
import * as Sentry from '@sentry/react';

Sentry.init({
    dsn: 'https://091748bca19718a2ce963e3865fcd6a3@o4506099762724864.ingest.sentry.io/4506099762790400',
    integrations: [
        new Sentry.BrowserTracing({
            tracePropagationTargets: [
                'localhost',
                /^https:\/\/yourserver\.io\/api/,
            ],
        }),
        new Sentry.Replay(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}
export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return <h1>{`Something went wrong.`}</h1>;
        }

        return children;
    }
}
