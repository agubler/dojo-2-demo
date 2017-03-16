import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode } from '@dojo/widget-core/interfaces';
import { w } from '@dojo/widget-core/d';

import HelloWorld from './widgets/HelloWorld';

export default class App extends WidgetBase {

	private _stranger = true;

	private _toggleStranger() {
		this._stranger = !this._stranger;
		this.invalidate();
	}

	protected render(): DNode {
		const { _stranger: stranger, _toggleStranger: toggleStranger } = this;

		return w(HelloWorld, { stranger, toggleStranger });
	}
}
