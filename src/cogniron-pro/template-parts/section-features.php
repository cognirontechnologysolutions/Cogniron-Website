<?php
/**
 * Template part for displaying the features section
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$features_title = get_theme_mod( 'cogniron_features_title', __( 'Powerful Features for Modern QA Teams', 'cogniron-pro' ) );
$features_description = get_theme_mod( 'cogniron_features_description', __( 'Our AI-powered platform delivers everything you need to build, execute, and maintain comprehensive test suites.', 'cogniron-pro' ) );

// Define default features
$default_features = array(
    array(
        'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
        'title' => __( 'AI-Powered Test Generation', 'cogniron-pro' ),
        'text'  => __( 'Automatically generate comprehensive test cases using machine learning algorithms that understand your application.', 'cogniron-pro' ),
    ),
    array(
        'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        'title' => __( 'Smart Test Execution', 'cogniron-pro' ),
        'text'  => __( 'Run tests across multiple environments simultaneously with intelligent prioritization and parallel execution.', 'cogniron-pro' ),
    ),
    array(
        'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
        'title' => __( 'Visual Regression Testing', 'cogniron-pro' ),
        'text'  => __( 'Detect visual bugs automatically with pixel-perfect screenshot comparison and intelligent change detection.', 'cogniron-pro' ),
    ),
    array(
        'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
        'title' => __( 'Cross-Browser Testing', 'cogniron-pro' ),
        'text'  => __( 'Test on all major browsers and devices with our cloud-based infrastructure, no setup required.', 'cogniron-pro' ),
    ),
    array(
        'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
        'title' => __( 'CI/CD Integration', 'cogniron-pro' ),
        'text'  => __( 'Seamlessly integrate with your existing CI/CD pipeline including Jenkins, GitLab, and GitHub Actions.', 'cogniron-pro' ),
    ),
    array(
        'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>',
        'title' => __( 'Advanced Analytics', 'cogniron-pro' ),
        'text'  => __( 'Get actionable insights with detailed reports, test coverage metrics, and quality trend analysis.', 'cogniron-pro' ),
    ),
);

$features = array();
for ( $i = 1; $i <= 6; $i++ ) {
    $title = get_theme_mod( "cogniron_feature_{$i}_title", $default_features[ $i - 1 ]['title'] );
    $text  = get_theme_mod( "cogniron_feature_{$i}_text", $default_features[ $i - 1 ]['text'] );
    
    if ( ! empty( $title ) ) {
        $features[] = array(
            'icon'  => $default_features[ $i - 1 ]['icon'],
            'title' => $title,
            'text'  => $text,
        );
    }
}

if ( empty( $features ) ) {
    return;
}
?>

<section class="features-section">
    <div class="container">
        
        <?php if ( ! empty( $features_title ) || ! empty( $features_description ) ) : ?>
            <div class="section-header" data-aos="fade-up">
                <?php if ( ! empty( $features_title ) ) : ?>
                    <h2><?php echo esc_html( $features_title ); ?></h2>
                <?php endif; ?>
                
                <?php if ( ! empty( $features_description ) ) : ?>
                    <p><?php echo esc_html( $features_description ); ?></p>
                <?php endif; ?>
            </div>
        <?php endif; ?>

        <div class="grid grid-3">
            <?php foreach ( $features as $index => $feature ) : ?>
                <div class="card" data-aos="fade-up" data-aos-delay="<?php echo esc_attr( $index * 100 ); ?>">
                    <div class="card__icon">
                        <?php echo wp_kses_post( $feature['icon'] ); ?>
                    </div>
                    <h3 class="card__title"><?php echo esc_html( $feature['title'] ); ?></h3>
                    <div class="card__content">
                        <p><?php echo esc_html( $feature['text'] ); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
