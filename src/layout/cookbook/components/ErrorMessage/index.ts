import dynamic from 'next/dynamic';

export const ErrorMessage = dynamic(() => import('./ErrorMessage'), { ssr: false });
