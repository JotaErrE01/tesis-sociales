const isProduction = import.meta.env.PROD;

if (isProduction && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
} else {
    console.log('Service worker not supported');
}