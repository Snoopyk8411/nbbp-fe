import dynamic from 'next/dynamic';

export const ErrorFrame = dynamic(() => import('./ErrorFrame'), { ssr: false });
