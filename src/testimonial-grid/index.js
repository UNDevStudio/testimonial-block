import './style.css';

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import metadata from './block.json';

registerBlockType(metadata.name, {
	edit: () => (
		<div className="testimonial-grid">
			<InnerBlocks
				allowedBlocks={['testimonial-block/testimonial-item']}
				orientation="horizontal"
				templateLock={false}
			/>
		</div>
	),

	save: () => (
		<div className="testimonial-grid">
			<InnerBlocks.Content />
		</div>
	),
});