import { Vue, Component, Prop } from 'vue-property-decorator';
import type { ComponentOptions, CreateElement, VNode } from 'vue';
import type { DefaultComputed, DefaultData, DefaultMethods, DefaultProps } from 'vue/types/options';

type VueComponent<
    Data = DefaultData<never>,
    Methods = DefaultMethods<never>,
    Computed = DefaultComputed,
    Props = DefaultProps
> = ComponentOptions<Vue, Data, Methods, Computed, Props> & {
    layout?: VueComponent | ((h: CreateElement, child: VNode) => VNode);
};

@Component
export default class Indolence extends Vue {
    @Prop({
        type: Function,
        required: true,
    })
    readonly resolveComponent!: (name: string) => Promise<VueComponent>;

    component: VueComponent | null = null;
    props: Record<string, any> | null = null;

    async created(): Promise<void> {
        if (this.$indolence.component !== undefined) {
            const component = await this.resolveComponent(this.$indolence.component);

            this.component = component;
            this.props = this.$indolence.props ?? null;
        }
    }

    render(h: CreateElement): VNode {
        if (this.component) {
            const child = h(this.component, {
                props: this.props ?? undefined,
            });

            if (this.component.layout !== undefined) {
                if (typeof this.component.layout === 'function') {
                    return this.component.layout(h, child);
                }

                return h(this.component.layout, [child]);
            }

            return child;
        }

        return h('div', 'ERROR: Could not load component');
    }
}
