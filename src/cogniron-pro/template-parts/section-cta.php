<?php
/**
 * Template part for displaying the CTA section
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$cta_title = get_theme_mod( 'cogniron_cta_title', __( 'Ready to Transform Your QA Process?', 'cogniron-pro' ) );
$cta_text = get_theme_mod( 'cogniron_cta_text', __( 'Join thousands of QA teams who trust Cogniron to deliver flawless software faster.', 'cogniron-pro' ) );
$cta_button_text = get_theme_mod( 'cogniron_cta_button_text', __( 'Start Free Trial', 'cogniron-pro' ) );
$cta_button_url = get_theme_mod( 'cogniron_cta_button_url', '#contact' );

if ( empty( $cta_title ) ) {
    return;
}
?>

<section class="cta-section" data-aos="fade-up">
    <div class="container">
        <div class="cta-inner" style="max-width: 800px; margin: 0 auto; text-align: center;">
            
            <?php if ( ! empty( $cta_title ) ) : ?>
                <h2 class="cta-title"><?php echo esc_html( $cta_title ); ?></h2>
            <?php endif; ?>

            <?php if ( ! empty( $cta_text ) ) : ?>
                <p class="cta-text" style="font-size: 20px; line-height: 32px; margin-bottom: 32px; color: var(--color-text-secondary);">
                    <?php echo esc_html( $cta_text ); ?>
                </p>
            <?php endif; ?>

            <?php if ( ! empty( $cta_button_text ) ) : ?>
                <a href="<?php echo esc_url( $cta_button_url ); ?>" class="btn btn-primary btn-large">
                    <?php echo esc_html( $cta_button_text ); ?>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            <?php endif; ?>

        </div>
    </div>
</section>
