import Vue from 'vue';
import type { PluginObject } from 'vue';

declare module 'vue/types/vue' {
    export interface Vue {
        $indolence: Partial<PageProps>;
        $page: Record<string, any>;
    }
}

interface Options {
    appId?: string;
    debug?: boolean;
    // TODO: Consider passing `resolveComponent` as a plugin option instead of a prop.
    resolveComponent?: (name: string) => Promise<any>;
}

interface PageProps {
    component: string;
    url: string;
    props: Record<string, any>;
    [key: string]: any;
}

function getData(options: Options = {}): PageProps {
    const app = document.getElementById(options.appId ?? 'app');
    const data = JSON.parse(app?.dataset.page ?? '{}') as PageProps;

    return data;
}

const plugin: PluginObject<Options> = {
    install(_app, options = {}) {
        const data = getData(options);

        Object.defineProperty(Vue.prototype, '$indolence', { get: () => data });
        Object.defineProperty(Vue.prototype, '$page', { get: () => data.props });
    },
};

export default plugin;
