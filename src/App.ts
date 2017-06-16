import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode } from '@dojo/widget-core/interfaces';
import { w } from '@dojo/widget-core/d';

import HelloWorld from './widgets/HelloWorld';

export default class App extends WidgetBase {
	protected render(): DNode {
		return w(HelloWorld, {});
	}
}
