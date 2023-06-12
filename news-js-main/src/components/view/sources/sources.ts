import './sources.css';

interface Source {
    id: number;
    name: string;
}

class Sources {
    draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (sourceItemTemp !== null) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true);

                sourceClone.querySelector('.source__item-name')!.textContent = item.name;
                sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id.toString());

                fragment.append(sourceClone);
            });
        }

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
