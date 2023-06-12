import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data: any) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }
    getNews(e: any, callback: (data: any) => void): void {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
