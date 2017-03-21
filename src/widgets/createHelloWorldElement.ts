import { CustomElementDescriptor } from '@dojo/widget-core/customElements';
import HelloWorld from './HelloWorld';

export default function createHelloWorldElement(): CustomElementDescriptor {
	return {
		tagName: 'dojo-hello-world',
		widgetConstructor: HelloWorld,
		attributes: [
			{
				attributeName: 'stranger',
				value: value => value === 'false' || value === '0' ? false : true
			}
		],
		events: [
			{
				propertyName: 'toggleStranger',
				eventName: 'toggleStranger'
			}
		]
	};
};
