import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode, WidgetProperties } from '@dojo/widget-core/interfaces';
import { v } from '@dojo/widget-core/d';
import { ThemeableMixin, theme } from '@dojo/widget-core/mixins/Themeable';

import * as css from './styles/HelloWorld.css';

export interface HelloWorldProperties extends WidgetProperties {
	stranger: boolean;
<<<<<<< e2c9346a8206c7f49b5f9a7b0e6c00951d5a3eec
	toggleStranger: Function;
=======
>>>>>>> demo-3
}

export const HelloWorldBase = ThemeableMixin(WidgetBase);

@theme(css)
export default class HelloWorld extends HelloWorldBase<HelloWorldProperties> {
<<<<<<< e2c9346a8206c7f49b5f9a7b0e6c00951d5a3eec

	private _onClick() {
		this.properties.toggleStranger && this.properties.toggleStranger();
	}

	protected render(): DNode {
=======
	render() {
>>>>>>> demo-3
		const classes = this.classes(
			css.hello,
			this.properties.stranger ? css.upsidedown : null
		);

<<<<<<< e2c9346a8206c7f49b5f9a7b0e6c00951d5a3eec
		return v('div', { classes, onclick: this._onClick }, [ 'Hello, Dojo World!' ]);
=======
		return v('div', { classes }, [ 'Hello, Dojo World!' ]);
>>>>>>> demo-3
	}
}
