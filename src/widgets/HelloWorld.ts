import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode, WidgetProperties } from '@dojo/widget-core/interfaces';
import { v } from '@dojo/widget-core/d';
import { ThemeableMixin, theme } from '@dojo/widget-core/mixins/Themeable';

import * as css from './styles/HelloWorld.css';

export interface HelloWorldProperties extends WidgetProperties {
	stranger: boolean;
	toggleStranger: Function;
}

export const HelloWorldBase = ThemeableMixin(WidgetBase);

@theme(css)
export default class HelloWorld extends HelloWorldBase<HelloWorldProperties> {

	private _onClick() {
		this.properties.toggleStranger && this.properties.toggleStranger();
	}

	protected render(): DNode {
		const classes = this.classes(
			css.hello,
			this.properties.stranger ? css.upsidedown : null
		);

		return v('div', { classes, onclick: this._onClick }, [ 'Hello, Dojo World!' ]);
	}
}
