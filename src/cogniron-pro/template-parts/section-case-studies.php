<?php
/**
 * Template part for displaying the case studies section
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$case_studies_title = get_theme_mod( 'cogniron_case_studies_title', __( 'Success Stories', 'cogniron-pro' ) );
$case_studies_description = get_theme_mod( 'cogniron_case_studies_description', __( 'See how leading companies are transforming their QA with Cogniron.', 'cogniron-pro' ) );

// Default case studies
$default_case_studies = array(
    array(
        'title'  => __( 'FinTech Leader Reduces Testing Time by 75%', 'cogniron-pro' ),
        'text'   => __( 'A major financial services company leveraged Cogniron to automate 10,000+ test cases, cutting their release cycle from 4 weeks to 5 days.', 'cogniron-pro' ),
        'metric' => __( '75% Faster', 'cogniron-pro' ),
        'image'  => cogniron_get_placeholder_image( 'default' ),
    ),
    array(
        'title'  => __( 'E-Commerce Platform Achieves 99.9% Uptime', 'cogniron-pro' ),
        'text'   => __( 'Using Cogniron\'s continuous testing, this e-commerce giant eliminated critical bugs before production, ensuring flawless customer experiences.', 'cogniron-pro' ),
        'metric' => __( '99.9% Uptime', 'cogniron-pro' ),
        'image'  => cogniron_get_placeholder_image( 'default' ),
    ),
    array(
        'title'  => __( 'SaaS Startup Scales Testing 10x Without Adding QA Staff', 'cogniron-pro' ),
        'text'   => __( 'A fast-growing SaaS company used Cogniron to scale their testing operations while maintaining a lean QA team of just 3 engineers.', 'cogniron-pro' ),
        'metric' => __( '10x Scale', 'cogniron-pro' ),
        'image'  => cogniron_get_placeholder_image( 'default' ),
    ),
);

$case_studies = array();
for ( $i = 1; $i <= 3; $i++ ) {
    $title  = get_theme_mod( "cogniron_case_study_{$i}_title", $default_case_studies[ $i - 1 ]['title'] );
    $text   = get_theme_mod( "cogniron_case_study_{$i}_text", $default_case_studies[ $i - 1 ]['text'] );
    $metric = get_theme_mod( "cogniron_case_study_{$i}_metric", $default_case_studies[ $i - 1 ]['metric'] );
    $image  = get_theme_mod( "cogniron_case_study_{$i}_image", $default_case_studies[ $i - 1 ]['image'] );
    
    if ( ! empty( $title ) ) {
        $case_studies[] = array(
            'title'  => $title,
            'text'   => $text,
            'metric' => $metric,
            'image'  => $image,
        );
    }
}

if ( empty( $case_studies ) ) {
    return;
}
?>

<section class="case-studies-section" style="background-color: var(--color-bg-alt);">
    <div class="container">
        
        <?php if ( ! empty( $case_studies_title ) || ! empty( $case_studies_description ) ) : ?>
            <div class="section-header" data-aos="fade-up">
                <?php if ( ! empty( $case_studies_title ) ) : ?>
                    <h2><?php echo esc_html( $case_studies_title ); ?></h2>
                <?php endif; ?>
                
                <?php if ( ! empty( $case_studies_description ) ) : ?>
                    <p><?php echo esc_html( $case_studies_description ); ?></p>
                <?php endif; ?>
            </div>
        <?php endif; ?>

        <div class="grid grid-3">
            <?php foreach ( $case_studies as $index => $case_study ) : ?>
                <div class="card" data-aos="fade-up" data-aos-delay="<?php echo esc_attr( $index * 100 ); ?>">
                    <?php if ( ! empty( $case_study['image'] ) ) : ?>
                        <div class="card__image">
                            <img src="<?php echo esc_url( $case_study['image'] ); ?>" alt="<?php echo esc_attr( $case_study['title'] ); ?>">
                        </div>
                    <?php endif; ?>
                    
                    <?php if ( ! empty( $case_study['metric'] ) ) : ?>
                        <div class="case-study-metric" style="font-size: 32px; font-weight: 700; color: var(--color-primary); margin-bottom: 16px;">
                            <?php echo esc_html( $case_study['metric'] ); ?>
                        </div>
                    <?php endif; ?>
                    
                    <h3 class="card__title"><?php echo esc_html( $case_study['title'] ); ?></h3>
                    <div class="card__content">
                        <p><?php echo esc_html( $case_study['text'] ); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
