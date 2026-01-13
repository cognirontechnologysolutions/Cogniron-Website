<?php
/**
 * Template part for displaying the services section
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$services_title = get_theme_mod( 'cogniron_services_title', __( 'Our Services', 'cogniron-pro' ) );
$services_description = get_theme_mod( 'cogniron_services_description', __( 'Comprehensive QA solutions tailored to your business needs.', 'cogniron-pro' ) );

// Default services
$default_services = array(
    array(
        'title' => __( 'Automated Testing', 'cogniron-pro' ),
        'text'  => __( 'End-to-end test automation for web, mobile, and API testing with intelligent self-healing capabilities.', 'cogniron-pro' ),
        'image' => cogniron_get_placeholder_image( 'default' ),
    ),
    array(
        'title' => __( 'Performance Testing', 'cogniron-pro' ),
        'text'  => __( 'Load testing, stress testing, and performance monitoring to ensure your application scales reliably.', 'cogniron-pro' ),
        'image' => cogniron_get_placeholder_image( 'default' ),
    ),
    array(
        'title' => __( 'Security Testing', 'cogniron-pro' ),
        'text'  => __( 'Comprehensive security audits and penetration testing to protect your applications from vulnerabilities.', 'cogniron-pro' ),
        'image' => cogniron_get_placeholder_image( 'default' ),
    ),
);

$services = array();
for ( $i = 1; $i <= 3; $i++ ) {
    $title = get_theme_mod( "cogniron_service_{$i}_title", $default_services[ $i - 1 ]['title'] );
    $text  = get_theme_mod( "cogniron_service_{$i}_text", $default_services[ $i - 1 ]['text'] );
    $image = get_theme_mod( "cogniron_service_{$i}_image", $default_services[ $i - 1 ]['image'] );
    
    if ( ! empty( $title ) ) {
        $services[] = array(
            'title' => $title,
            'text'  => $text,
            'image' => $image,
        );
    }
}

if ( empty( $services ) ) {
    return;
}
?>

<section class="services-section">
    <div class="container">
        
        <?php if ( ! empty( $services_title ) || ! empty( $services_description ) ) : ?>
            <div class="section-header" data-aos="fade-up">
                <?php if ( ! empty( $services_title ) ) : ?>
                    <h2><?php echo esc_html( $services_title ); ?></h2>
                <?php endif; ?>
                
                <?php if ( ! empty( $services_description ) ) : ?>
                    <p><?php echo esc_html( $services_description ); ?></p>
                <?php endif; ?>
            </div>
        <?php endif; ?>

        <div class="grid grid-3">
            <?php foreach ( $services as $index => $service ) : ?>
                <div class="card" data-aos="fade-up" data-aos-delay="<?php echo esc_attr( $index * 100 ); ?>">
                    <?php if ( ! empty( $service['image'] ) ) : ?>
                        <div class="card__image">
                            <img src="<?php echo esc_url( $service['image'] ); ?>" alt="<?php echo esc_attr( $service['title'] ); ?>">
                        </div>
                    <?php endif; ?>
                    
                    <h3 class="card__title"><?php echo esc_html( $service['title'] ); ?></h3>
                    <div class="card__content">
                        <p><?php echo esc_html( $service['text'] ); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
