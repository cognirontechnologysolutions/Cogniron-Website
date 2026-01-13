<?php
/**
 * Template part for displaying the testimonials section
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$testimonials_title = get_theme_mod( 'cogniron_testimonials_title', __( 'What Our Clients Say', 'cogniron-pro' ) );
$testimonials_description = get_theme_mod( 'cogniron_testimonials_description', __( 'Trusted by QA teams worldwide.', 'cogniron-pro' ) );

// Default testimonials
$default_testimonials = array(
    array(
        'text'     => __( 'Cogniron has completely transformed our testing process. We\'ve reduced our QA cycle from weeks to days, and our bug escape rate is down by 90%.', 'cogniron-pro' ),
        'name'     => __( 'Sarah Johnson', 'cogniron-pro' ),
        'position' => __( 'VP of Engineering, TechCorp', 'cogniron-pro' ),
    ),
    array(
        'text'     => __( 'The AI-powered test generation is a game-changer. It catches edge cases our manual testing would have missed, saving us countless hours.', 'cogniron-pro' ),
        'name'     => __( 'Michael Chen', 'cogniron-pro' ),
        'position' => __( 'QA Lead, InnovateSoft', 'cogniron-pro' ),
    ),
    array(
        'text'     => __( 'Best ROI we\'ve seen from any testing tool. The platform paid for itself in the first quarter through reduced manual testing costs alone.', 'cogniron-pro' ),
        'name'     => __( 'Emily Rodriguez', 'cogniron-pro' ),
        'position' => __( 'CTO, StartupX', 'cogniron-pro' ),
    ),
);

$testimonials = array();
for ( $i = 1; $i <= 3; $i++ ) {
    $text     = get_theme_mod( "cogniron_testimonial_{$i}_text", $default_testimonials[ $i - 1 ]['text'] );
    $name     = get_theme_mod( "cogniron_testimonial_{$i}_name", $default_testimonials[ $i - 1 ]['name'] );
    $position = get_theme_mod( "cogniron_testimonial_{$i}_position", $default_testimonials[ $i - 1 ]['position'] );
    
    if ( ! empty( $text ) ) {
        $testimonials[] = array(
            'text'     => $text,
            'name'     => $name,
            'position' => $position,
        );
    }
}

if ( empty( $testimonials ) ) {
    return;
}
?>

<section class="testimonials-section">
    <div class="container">
        
        <?php if ( ! empty( $testimonials_title ) || ! empty( $testimonials_description ) ) : ?>
            <div class="section-header" data-aos="fade-up">
                <?php if ( ! empty( $testimonials_title ) ) : ?>
                    <h2><?php echo esc_html( $testimonials_title ); ?></h2>
                <?php endif; ?>
                
                <?php if ( ! empty( $testimonials_description ) ) : ?>
                    <p><?php echo esc_html( $testimonials_description ); ?></p>
                <?php endif; ?>
            </div>
        <?php endif; ?>

        <div class="grid grid-3">
            <?php foreach ( $testimonials as $index => $testimonial ) : ?>
                <div class="card" data-aos="fade-up" data-aos-delay="<?php echo esc_attr( $index * 100 ); ?>">
                    <div class="card__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                        </svg>
                    </div>
                    
                    <div class="card__content">
                        <p><?php echo esc_html( $testimonial['text'] ); ?></p>
                    </div>
                    
                    <div class="testimonial-author" style="margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--color-border);">
                        <div style="font-weight: 600; color: var(--color-text-primary); margin-bottom: 4px;">
                            <?php echo esc_html( $testimonial['name'] ); ?>
                        </div>
                        <div style="font-size: 14px; color: var(--color-text-muted);">
                            <?php echo esc_html( $testimonial['position'] ); ?>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
