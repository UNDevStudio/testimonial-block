<?php
/**
 * Plugin Name: Testimonials Block
 * Description: A Gutenberg block for displaying multiple client testimonials.
 * Version: 1.0.0
 * Author: UNDevStudio
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function testimonial_block_register() {
	register_block_type_from_metadata(
		__DIR__ . '/build/testimonial-grid'
	);

	register_block_type_from_metadata(
		__DIR__ . '/build/testimonial-item'
	);
}

add_action( 'init', 'testimonial_block_register' );