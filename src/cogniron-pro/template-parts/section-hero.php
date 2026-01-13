<?php
/**
 * Template part for displaying the hero section
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$hero_title = get_theme_mod( 'cogniron_hero_title', __( 'Transform Your QA Process with AI-Powered Testing', 'cogniron-pro' ) );
$hero_subtitle = get_theme_mod( 'cogniron_hero_subtitle', __( 'Accelerate testing cycles, reduce costs, and deliver flawless software with Cogniron\'s intelligent automation platform.', 'cogniron-pro' ) );
$hero_cta_primary_text = get_theme_mod( 'cogniron_hero_cta_primary_text', __( 'Get Started Free', 'cogniron-pro' ) );
$hero_cta_primary_url = get_theme_mod( 'cogniron_hero_cta_primary_url', '#contact' );
$hero_cta_secondary_text = get_theme_mod( 'cogniron_hero_cta_secondary_text', __( 'Watch Demo', 'cogniron-pro' ) );
$hero_cta_secondary_url = get_theme_mod( 'cogniron_hero_cta_secondary_url', '#demo' );
$hero_image = get_theme_mod( 'cogniron_hero_image', cogniron_get_placeholder_image( 'hero' ) );
?>

<section class="hero" data-aos="fade-up">
    <div class="container">
        <div class="hero__inner">
            
            <div class="hero__content">
                <?php if ( ! empty( $hero_title ) ) : ?>
                    <h1><?php echo esc_html( $hero_title ); ?></h1>
                <?php endif; ?>

                <?php if ( ! empty( $hero_subtitle ) ) : ?>
                    <p><?php echo esc_html( $hero_subtitle ); ?></p>
                <?php endif; ?>

                <div class="hero__actions">
                    <?php if ( ! empty( $hero_cta_primary_text ) ) : ?>
                        <a href="<?php echo esc_url( $hero_cta_primary_url ); ?>" class="btn btn-primary btn-large">
                            <?php echo esc_html( $hero_cta_primary_text ); ?>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    <?php endif; ?>

                    <?php if ( ! empty( $hero_cta_secondary_text ) ) : ?>
                        <a href="<?php echo esc_url( $hero_cta_secondary_url ); ?>" class="btn btn-secondary btn-large">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                            <?php echo esc_html( $hero_cta_secondary_text ); ?>
                        </a>
                    <?php endif; ?>
                </div>
            </div>

            <div class="hero__media">
                <img src="<?php echo esc_url( $hero_image ); ?>" alt="<?php echo esc_attr( $hero_title ); ?>">
            </div>

        </div>
    </div>
</section>
