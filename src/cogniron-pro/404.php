<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<div class="error-404-wrapper">
    <div class="container container-narrow">
        
        <section class="error-404 text-center">
            
            <h1 class="error-404__code">404</h1>
            
            <h2 class="error-404__title">
                <?php esc_html_e( 'Oops! Page Not Found', 'cogniron-pro' ); ?>
            </h2>
            
            <p class="error-404__text">
                <?php esc_html_e( 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.', 'cogniron-pro' ); ?>
            </p>

            <div class="error-404-actions">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary btn-large">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <?php esc_html_e( 'Back to Homepage', 'cogniron-pro' ); ?>
                </a>
            </div>

            <div class="error-404-search mt-48">
                <h3><?php esc_html_e( 'Or try searching:', 'cogniron-pro' ); ?></h3>
                <?php get_search_form(); ?>
            </div>

        </section>

    </div>
</div>

<?php
get_footer();
