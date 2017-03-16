import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode } from '@dojo/widget-core/interfaces';
import { w } from '@dojo/widget-core/d';

import HelloWorld from './widgets/HelloWorld';

export default class App extends WidgetBase {

	private _stranger = true;

	protected render(): DNode {
		const { _stranger: stranger } = this;

		return w(HelloWorld, { stranger });
	}
}
