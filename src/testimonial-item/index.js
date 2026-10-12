import './style.css';

import { registerBlockType } from '@wordpress/blocks';
import {
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

import metadata from './block.json';

registerBlockType(metadata.name, {
	edit: ({ attributes, setAttributes }) => {
		const { author, quote, photoId, photoUrl } = attributes;

		const blockProps = useBlockProps({
			className: 'testimonial-item',
		});

		return (
			<div {...blockProps}>
				<div className="testimonial-item__photo">
					{photoUrl ? (
						<>
							<img src={photoUrl} alt="" />

							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) =>
										setAttributes({
											photoId: media.id,
											photoUrl: media.url,
										})
									}
									allowedTypes={['image']}
									value={photoId}
									render={({ open }) => (
										<Button onClick={open} variant="secondary">
											Change Photo
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</>
					) : (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										photoId: media.id,
										photoUrl: media.url,
									})
								}
								allowedTypes={['image']}
								value={photoId}
								render={({ open }) => (
									<Button onClick={open} variant="primary">
										Select Photo
									</Button>
								)}
							/>
						</MediaUploadCheck>
					)}
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

	save: ({ attributes }) => {
		const { author, quote, photoUrl } = attributes;

		const blockProps = useBlockProps.save({
			className: 'testimonial-item',
		});

		return (
			<div {...blockProps}>
				{photoUrl && (
					<img
						className="testimonial-item__photo"
						src={photoUrl}
						alt=""
					/>
				)}

				<RichText.Content
					tagName="blockquote"
					value={quote}
				/>

				<RichText.Content
					tagName="p"
					value={author}
				/>
			</div>
		);
	},
});