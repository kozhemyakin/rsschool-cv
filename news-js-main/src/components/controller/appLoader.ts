import Loader from './loader';

interface AppLoaderOptions {
    apiKey: string;
}

class AppLoader extends Loader {
    constructor() {
        const options: AppLoaderOptions = {
            apiKey: 'fjdfh8897d8gds8g9s99hhsdf9h9ds77',
        };
        super('https://newsapi.org/v2/', options);
    }
}

export default AppLoader;
