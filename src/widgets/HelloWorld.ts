import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode } from '@dojo/widget-core/interfaces';
import { v } from '@dojo/widget-core/d';

export default class HelloWorld extends WidgetBase {
	protected render(): DNode {
		return v('div', [ 'Hello, Dojo World!' ]);
	}
}
