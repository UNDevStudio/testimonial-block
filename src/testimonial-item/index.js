
import './style.css';

import { registerBlockType } from '@wordpress/blocks';
import {
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

import metadata from './block.json';

registerBlockType(metadata.name, {
	edit: ({ attributes, setAttributes }) => {
		const { author, quote, photoId } = attributes;

		const photo = useSelect(
			(select) =>
				photoId ? select('core').getMedia(photoId) : null,
			[photoId]
		);

		const photoUrl = photo?.source_url || '';

		const blockProps = useBlockProps({
			className: 'testimonial-item',
		});

		return (
			<div {...blockProps}>
				<div className="testimonial-item__photo">
					{photoUrl && <img src={photoUrl} alt="" />}

					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({ photoId: media.id })
							}
							allowedTypes={['image']}
							value={photoId}
							render={({ open }) => (
								<Button onClick={open} variant="secondary">
									{photoId ? 'Change Photo' : 'Select Photo'}
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</div>

				<RichText
					tagName="blockquote"
					value={quote}
					onChange={(value) => setAttributes({ quote: value })}
					placeholder="Write testimonial..."
				/>

				<RichText
					tagName="p"
					value={author}
					onChange={(value) => setAttributes({ author: value })}
					placeholder="Client name..."
				/>
			</div>
		);
	},

	save: () => null,
});
