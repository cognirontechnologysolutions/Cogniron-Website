<?php
/**
 * The header for the theme
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> data-theme="light">
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'cogniron-pro' ); ?></a>

<div id="page" class="site">
    
    <header id="masthead" class="site-header">
        <div class="container">
            <div class="site-header__inner">
                
                <div class="site-branding">
                    <?php
                    if ( has_custom_logo() ) {
                        the_custom_logo();
                    } else {
                        ?>
                        <h1 class="site-title">
                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                                <?php bloginfo( 'name' ); ?>
                            </a>
                        </h1>
                        <?php
                        $description = get_bloginfo( 'description', 'display' );
                        if ( $description || is_customize_preview() ) {
                            ?>
                            <p class="site-description screen-reader-text"><?php echo esc_html( $description ); ?></p>
                            <?php
                        }
                    }
                    ?>
                </div>

                <nav id="site-navigation" class="main-navigation" aria-label="<?php esc_attr_e( 'Primary Navigation', 'cogniron-pro' ); ?>">
                    <?php
                    wp_nav_menu(
                        array(
                            'theme_location' => 'primary',
                            'menu_id'        => 'primary-menu',
                            'menu_class'     => 'primary-menu',
                            'container'      => false,
                            'fallback_cb'    => false,
                        )
                    );
                    ?>
                </nav>

                <div class="header-actions">
                    <button id="theme-toggle" class="theme-toggle" aria-label="<?php esc_attr_e( 'Toggle dark mode', 'cogniron-pro' ); ?>">
                        <svg class="theme-icon sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                        <svg class="theme-icon moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </button>

                    <?php
                    $cta_text = get_theme_mod( 'cogniron_header_cta_text', __( 'Get Started', 'cogniron-pro' ) );
                    $cta_url  = get_theme_mod( 'cogniron_header_cta_url', '#contact' );
                    
                    if ( ! empty( $cta_text ) ) :
                    ?>
                        <a href="<?php echo esc_url( $cta_url ); ?>" class="btn btn-primary">
                            <?php echo esc_html( $cta_text ); ?>
                        </a>
                    <?php endif; ?>

                    <button class="mobile-menu-toggle" aria-label="<?php esc_attr_e( 'Toggle mobile menu', 'cogniron-pro' ); ?>" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

            </div>
        </div>
    </header>

    <main id="primary" class="site-main">
