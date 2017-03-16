import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode, WidgetProperties } from '@dojo/widget-core/interfaces';
import { v } from '@dojo/widget-core/d';
import { ThemeableMixin, theme } from '@dojo/widget-core/mixins/Themeable';

import * as css from './styles/HelloWorld.css';

export interface HelloWorldProperties extends WidgetProperties {
	stranger: boolean;
}

export const HelloWorldBase = ThemeableMixin(WidgetBase);

@theme(css)
export default class HelloWorld extends HelloWorldBase<HelloWorldProperties> {
	protected render(): DNode {
		const classes = this.classes(
			css.hello,
			this.properties.stranger ? css.upsidedown : null
		);

		return v('div', { classes }, [ 'Hello, Dojo World!' ]);
	}
}
