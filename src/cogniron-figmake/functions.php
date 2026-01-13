<?php
/**
 * Cogniron Figma Make Theme Functions
 *
 * @package Cogniron_Figmake
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Theme Setup
 */
function cogniron_figmake_setup() {
	// Make theme available for translation
	load_theme_textdomain( 'cogniron-figmake', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head
	add_theme_support( 'automatic-feed-links' );

	// Let WordPress manage the document title
	add_theme_support( 'title-tag' );

	// Enable support for Post Thumbnails on posts and pages
	add_theme_support( 'post-thumbnails' );

	// Switch default core markup to output valid HTML5
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
		'style',
		'script',
	) );

	// Add theme support for block templates
	add_theme_support( 'block-templates' );

	// Add support for editor styles
	add_theme_support( 'editor-styles' );

	// Add support for core block styles
	add_theme_support( 'wp-block-styles' );

	// Add support for responsive embeds
	add_theme_support( 'responsive-embeds' );

	// Add support for wide and full alignments
	add_theme_support( 'align-wide' );

	// Add custom image sizes
	add_image_size( 'cogniron-hero', 1920, 1080, true );
	add_image_size( 'cogniron-card', 600, 400, true );
	add_image_size( 'cogniron-blog', 800, 600, true );
	add_image_size( 'cogniron-thumbnail', 400, 300, true );

	// Register navigation menus
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary Menu', 'cogniron-figmake' ),
		'footer'  => esc_html__( 'Footer Menu', 'cogniron-figmake' ),
	) );
}
add_action( 'after_setup_theme', 'cogniron_figmake_setup' );

/**
 * Enqueue scripts and styles
 */
function cogniron_figmake_scripts() {
	// Main theme stylesheet (style.css)
	wp_enqueue_style(
		'cogniron-figmake-style',
		get_stylesheet_uri(),
		array(),
		wp_get_theme()->get( 'Version' )
	);

	// Main CSS
	wp_enqueue_style(
		'cogniron-figmake-main',
		get_template_directory_uri() . '/assets/css/main.css',
		array( 'cogniron-figmake-style' ),
		wp_get_theme()->get( 'Version' )
	);

	// Animations CSS
	wp_enqueue_style(
		'cogniron-figmake-animations',
		get_template_directory_uri() . '/assets/css/animations.css',
		array( 'cogniron-figmake-main' ),
		wp_get_theme()->get( 'Version' )
	);

	// Main JavaScript
	wp_enqueue_script(
		'cogniron-figmake-main',
		get_template_directory_uri() . '/assets/js/main.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);

	// Animations JavaScript
	wp_enqueue_script(
		'cogniron-figmake-animations',
		get_template_directory_uri() . '/assets/js/animations.js',
		array( 'cogniron-figmake-main' ),
		wp_get_theme()->get( 'Version' ),
		true
	);

	// Localize script for theme data
	wp_localize_script(
		'cogniron-figmake-main',
		'cognironTheme',
		array(
			'ajaxUrl' => admin_url( 'admin-ajax.php' ),
			'siteUrl' => home_url( '/' ),
			'themeUrl' => get_template_directory_uri(),
		)
	);

	// Comment reply script for threaded comments
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'cogniron_figmake_scripts' );

/**
 * Register block patterns
 */
function cogniron_figmake_register_patterns() {
	// Register pattern category
	register_block_pattern_category(
		'cogniron',
		array( 'label' => esc_html__( 'Cogniron', 'cogniron-figmake' ) )
	);

	// Register individual patterns
	$patterns = array(
		'hero-home',
		'services-section',
		'about-section',
		'features-section',
		'testimonials-section',
		'cta-section',
		'blog-grid-section',
		'contact-section',
		'stats-section',
	);

	foreach ( $patterns as $pattern ) {
		$pattern_file = get_template_directory() . '/patterns/' . $pattern . '.php';
		if ( file_exists( $pattern_file ) ) {
			require_once $pattern_file;
		}
	}
}
add_action( 'init', 'cogniron_figmake_register_patterns' );

/**
 * Add SVG support to media uploads
 */
function cogniron_figmake_mime_types( $mimes ) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter( 'upload_mimes', 'cogniron_figmake_mime_types' );

/**
 * Custom excerpt length
 */
function cogniron_figmake_excerpt_length( $length ) {
	return 30;
}
add_filter( 'excerpt_length', 'cogniron_figmake_excerpt_length', 999 );

/**
 * Custom excerpt more text
 */
function cogniron_figmake_excerpt_more( $more ) {
	if ( ! is_single() ) {
		return '&hellip;';
	}
	return $more;
}
add_filter( 'excerpt_more', 'cogniron_figmake_excerpt_more' );

/**
 * Add custom body classes
 */
function cogniron_figmake_body_classes( $classes ) {
	// Add class for front page
	if ( is_front_page() ) {
		$classes[] = 'front-page';
	}

	// Add class for singular posts and pages
	if ( is_singular() ) {
		$classes[] = 'singular';
	}

	// Add class for blog archives
	if ( is_home() || is_archive() ) {
		$classes[] = 'blog-archive';
	}

	return $classes;
}
add_filter( 'body_class', 'cogniron_figmake_body_classes' );

/**
 * Enqueue editor styles
 */
function cogniron_figmake_editor_styles() {
	add_editor_style( array(
		'assets/css/main.css',
		'assets/css/animations.css',
	) );
}
add_action( 'admin_init', 'cogniron_figmake_editor_styles' );

/**
 * Get placeholder image URL
 */
function cogniron_figmake_get_placeholder( $type = 'default' ) {
	$placeholders = array(
		'hero'      => 'placeholder-hero.jpg',
		'card-1'    => 'placeholder-card-1.jpg',
		'card-2'    => 'placeholder-card-2.jpg',
		'avatar'    => 'placeholder-avatar.jpg',
		'thumbnail' => 'placeholder-thumbnail.jpg',
		'default'   => 'placeholder-card-1.jpg',
	);

	$file = isset( $placeholders[ $type ] ) ? $placeholders[ $type ] : $placeholders['default'];
	return get_template_directory_uri() . '/assets/images/' . $file;
}
