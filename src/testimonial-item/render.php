
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$author   = isset( $attributes['author'] ) ? $attributes['author'] : '';
$quote    = isset( $attributes['quote'] ) ? $attributes['quote'] : '';
$photo_id = isset( $attributes['photoId'] ) ? absint( $attributes['photoId'] ) : 0;
?>

<div <?php echo get_block_wrapper_attributes( array( 'class' => 'testimonial-item' ) ); ?>>
	<?php if ( $photo_id ) : ?>
		<figure class="testimonial-item__figure">
			<?php
			echo wp_get_attachment_image(
				$photo_id,
				'medium',
				false,
				array( 'class' => 'testimonial-item__photo' )
			);
			?>
		</figure>
	<?php endif; ?>

	<?php if ( '' !== $quote ) : ?>
		<blockquote><?php echo esc_html( $quote ); ?></blockquote>
	<?php endif; ?>

	<?php if ( '' !== $author ) : ?>
		<p><?php echo esc_html( $author ); ?></p>
	<?php endif; ?>
</div>
