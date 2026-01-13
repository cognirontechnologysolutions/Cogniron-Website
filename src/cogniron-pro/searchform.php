<?php
/**
 * Custom search form template
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>

<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <label>
        <span class="screen-reader-text"><?php esc_html_e( 'Search for:', 'cogniron-pro' ); ?></span>
        <input 
            type="search" 
            class="search-field" 
            placeholder="<?php esc_attr_e( 'Search...', 'cogniron-pro' ); ?>" 
            value="<?php echo get_search_query(); ?>" 
            name="s" 
            required
        />
    </label>
    <button type="submit" class="search-submit btn btn-primary">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
        </svg>
        <span class="screen-reader-text"><?php esc_html_e( 'Search', 'cogniron-pro' ); ?></span>
    </button>
</form>
