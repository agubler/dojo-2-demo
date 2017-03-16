import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode, WidgetProperties } from '@dojo/widget-core/interfaces';
import { v } from '@dojo/widget-core/d';
import { ThemeableMixin, theme } from '@dojo/widget-core/mixins/Themeable';

import * as css from './styles/HelloWorld.css';

const HelloWorldBase = ThemeableMixin(WidgetBase);

@theme(css)
export default class HelloWorld extends HelloWorldBase<WidgetProperties> {
	protected render(): DNode {
		return v('div', { classes: this.classes(css.hello) }, [ 'Hello, Dojo World!' ]);
	}
}
