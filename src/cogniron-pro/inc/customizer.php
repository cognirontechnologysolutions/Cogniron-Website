<?php
/**
 * Cogniron Pro Theme Customizer
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Add postMessage support for site title and description for the Theme Customizer
 */
function cogniron_customize_register( $wp_customize ) {
    
    $wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
    $wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
    $wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

    if ( isset( $wp_customize->selective_refresh ) ) {
        $wp_customize->selective_refresh->add_partial(
            'blogname',
            array(
                'selector'        => '.site-title a',
                'render_callback' => function() {
                    bloginfo( 'name' );
                },
            )
        );
        $wp_customize->selective_refresh->add_partial(
            'blogdescription',
            array(
                'selector'        => '.site-description',
                'render_callback' => function() {
                    bloginfo( 'description' );
                },
            )
        );
    }

    // ========================================================================
    // Hero Section
    // ========================================================================
    
    $wp_customize->add_section(
        'cogniron_hero_section',
        array(
            'title'    => esc_html__( 'Hero Section', 'cogniron-pro' ),
            'priority' => 30,
        )
    );

    // Hero Title
    $wp_customize->add_setting(
        'cogniron_hero_title',
        array(
            'default'           => __( 'Transform Your QA Process with AI-Powered Testing', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_text_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_hero_title',
        array(
            'label'   => esc_html__( 'Hero Title', 'cogniron-pro' ),
            'section' => 'cogniron_hero_section',
            'type'    => 'text',
        )
    );

    // Hero Subtitle
    $wp_customize->add_setting(
        'cogniron_hero_subtitle',
        array(
            'default'           => __( 'Accelerate testing cycles, reduce costs, and deliver flawless software with Cogniron\'s intelligent automation platform.', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_textarea_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_hero_subtitle',
        array(
            'label'   => esc_html__( 'Hero Subtitle', 'cogniron-pro' ),
            'section' => 'cogniron_hero_section',
            'type'    => 'textarea',
        )
    );

    // Hero CTA Primary Text
    $wp_customize->add_setting(
        'cogniron_hero_cta_primary_text',
        array(
            'default'           => __( 'Get Started Free', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_text_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_hero_cta_primary_text',
        array(
            'label'   => esc_html__( 'Primary Button Text', 'cogniron-pro' ),
            'section' => 'cogniron_hero_section',
            'type'    => 'text',
        )
    );

    // Hero CTA Primary URL
    $wp_customize->add_setting(
        'cogniron_hero_cta_primary_url',
        array(
            'default'           => '#contact',
            'sanitize_callback' => 'esc_url_raw',
        )
    );

    $wp_customize->add_control(
        'cogniron_hero_cta_primary_url',
        array(
            'label'   => esc_html__( 'Primary Button URL', 'cogniron-pro' ),
            'section' => 'cogniron_hero_section',
            'type'    => 'url',
        )
    );

    // Hero CTA Secondary Text
    $wp_customize->add_setting(
        'cogniron_hero_cta_secondary_text',
        array(
            'default'           => __( 'Watch Demo', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_text_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_hero_cta_secondary_text',
        array(
            'label'   => esc_html__( 'Secondary Button Text', 'cogniron-pro' ),
            'section' => 'cogniron_hero_section',
            'type'    => 'text',
        )
    );

    // Hero CTA Secondary URL
    $wp_customize->add_setting(
        'cogniron_hero_cta_secondary_url',
        array(
            'default'           => '#demo',
            'sanitize_callback' => 'esc_url_raw',
        )
    );

    $wp_customize->add_control(
        'cogniron_hero_cta_secondary_url',
        array(
            'label'   => esc_html__( 'Secondary Button URL', 'cogniron-pro' ),
            'section' => 'cogniron_hero_section',
            'type'    => 'url',
        )
    );

    // Hero Image
    $wp_customize->add_setting(
        'cogniron_hero_image',
        array(
            'default'           => '',
            'sanitize_callback' => 'esc_url_raw',
        )
    );

    $wp_customize->add_control(
        new WP_Customize_Image_Control(
            $wp_customize,
            'cogniron_hero_image',
            array(
                'label'   => esc_html__( 'Hero Image', 'cogniron-pro' ),
                'section' => 'cogniron_hero_section',
            )
        )
    );

    // ========================================================================
    // Features Section
    // ========================================================================
    
    $wp_customize->add_section(
        'cogniron_features_section',
        array(
            'title'    => esc_html__( 'Features Section', 'cogniron-pro' ),
            'priority' => 31,
        )
    );

    // Features Title
    $wp_customize->add_setting(
        'cogniron_features_title',
        array(
            'default'           => __( 'Powerful Features for Modern QA Teams', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_text_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_features_title',
        array(
            'label'   => esc_html__( 'Section Title', 'cogniron-pro' ),
            'section' => 'cogniron_features_section',
            'type'    => 'text',
        )
    );

    // Features Description
    $wp_customize->add_setting(
        'cogniron_features_description',
        array(
            'default'           => __( 'Our AI-powered platform delivers everything you need to build, execute, and maintain comprehensive test suites.', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_textarea_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_features_description',
        array(
            'label'   => esc_html__( 'Section Description', 'cogniron-pro' ),
            'section' => 'cogniron_features_section',
            'type'    => 'textarea',
        )
    );

    // Individual Features (6 features)
    for ( $i = 1; $i <= 6; $i++ ) {
        // Feature Title
        $wp_customize->add_setting(
            "cogniron_feature_{$i}_title",
            array(
                'default'           => '',
                'sanitize_callback' => 'sanitize_text_field',
            )
        );

        $wp_customize->add_control(
            "cogniron_feature_{$i}_title",
            array(
                'label'   => sprintf( esc_html__( 'Feature %d Title', 'cogniron-pro' ), $i ),
                'section' => 'cogniron_features_section',
                'type'    => 'text',
            )
        );

        // Feature Text
        $wp_customize->add_setting(
            "cogniron_feature_{$i}_text",
            array(
                'default'           => '',
                'sanitize_callback' => 'sanitize_textarea_field',
            )
        );

        $wp_customize->add_control(
            "cogniron_feature_{$i}_text",
            array(
                'label'   => sprintf( esc_html__( 'Feature %d Text', 'cogniron-pro' ), $i ),
                'section' => 'cogniron_features_section',
                'type'    => 'textarea',
            )
        );
    }

    // ========================================================================
    // Services Section
    // ========================================================================
    
    $wp_customize->add_section(
        'cogniron_services_section',
        array(
            'title'    => esc_html__( 'Services Section', 'cogniron-pro' ),
            'priority' => 32,
        )
    );

    // Services Title
    $wp_customize->add_setting(
        'cogniron_services_title',
        array(
            'default'           => __( 'Our Services', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_text_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_services_title',
        array(
            'label'   => esc_html__( 'Section Title', 'cogniron-pro' ),
            'section' => 'cogniron_services_section',
            'type'    => 'text',
        )
    );

    // Services Description
    $wp_customize->add_setting(
        'cogniron_services_description',
        array(
            'default'           => __( 'Comprehensive QA solutions tailored to your business needs.', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_textarea_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_services_description',
        array(
            'label'   => esc_html__( 'Section Description', 'cogniron-pro' ),
            'section' => 'cogniron_services_section',
            'type'    => 'textarea',
        )
    );

    // Individual Services (3 services)
    for ( $i = 1; $i <= 3; $i++ ) {
        // Service Title
        $wp_customize->add_setting(
            "cogniron_service_{$i}_title",
            array(
                'default'           => '',
                'sanitize_callback' => 'sanitize_text_field',
            )
        );

        $wp_customize->add_control(
            "cogniron_service_{$i}_title",
            array(
                'label'   => sprintf( esc_html__( 'Service %d Title', 'cogniron-pro' ), $i ),
                'section' => 'cogniron_services_section',
                'type'    => 'text',
            )
        );

        // Service Text
        $wp_customize->add_setting(
            "cogniron_service_{$i}_text",
            array(
                'default'           => '',
                'sanitize_callback' => 'sanitize_textarea_field',
            )
        );

        $wp_customize->add_control(
            "cogniron_service_{$i}_text",
            array(
                'label'   => sprintf( esc_html__( 'Service %d Text', 'cogniron-pro' ), $i ),
                'section' => 'cogniron_services_section',
                'type'    => 'textarea',
            )
        );

        // Service Image
        $wp_customize->add_setting(
            "cogniron_service_{$i}_image",
            array(
                'default'           => '',
                'sanitize_callback' => 'esc_url_raw',
            )
        );

        $wp_customize->add_control(
            new WP_Customize_Image_Control(
                $wp_customize,
                "cogniron_service_{$i}_image",
                array(
                    'label'   => sprintf( esc_html__( 'Service %d Image', 'cogniron-pro' ), $i ),
                    'section' => 'cogniron_services_section',
                )
            )
        );
    }

    // ========================================================================
    // CTA Section
    // ========================================================================
    
    $wp_customize->add_section(
        'cogniron_cta_section',
        array(
            'title'    => esc_html__( 'Call to Action Section', 'cogniron-pro' ),
            'priority' => 33,
        )
    );

    // CTA Title
    $wp_customize->add_setting(
        'cogniron_cta_title',
        array(
            'default'           => __( 'Ready to Transform Your QA Process?', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_text_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_cta_title',
        array(
            'label'   => esc_html__( 'CTA Title', 'cogniron-pro' ),
            'section' => 'cogniron_cta_section',
            'type'    => 'text',
        )
    );

    // CTA Text
    $wp_customize->add_setting(
        'cogniron_cta_text',
        array(
            'default'           => __( 'Join thousands of QA teams who trust Cogniron to deliver flawless software faster.', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_textarea_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_cta_text',
        array(
            'label'   => esc_html__( 'CTA Text', 'cogniron-pro' ),
            'section' => 'cogniron_cta_section',
            'type'    => 'textarea',
        )
    );

    // CTA Button Text
    $wp_customize->add_setting(
        'cogniron_cta_button_text',
        array(
            'default'           => __( 'Start Free Trial', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_text_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_cta_button_text',
        array(
            'label'   => esc_html__( 'Button Text', 'cogniron-pro' ),
            'section' => 'cogniron_cta_section',
            'type'    => 'text',
        )
    );

    // CTA Button URL
    $wp_customize->add_setting(
        'cogniron_cta_button_url',
        array(
            'default'           => '#contact',
            'sanitize_callback' => 'esc_url_raw',
        )
    );

    $wp_customize->add_control(
        'cogniron_cta_button_url',
        array(
            'label'   => esc_html__( 'Button URL', 'cogniron-pro' ),
            'section' => 'cogniron_cta_section',
            'type'    => 'url',
        )
    );

    // ========================================================================
    // Header Settings
    // ========================================================================
    
    $wp_customize->add_section(
        'cogniron_header_section',
        array(
            'title'    => esc_html__( 'Header Settings', 'cogniron-pro' ),
            'priority' => 34,
        )
    );

    // Header CTA Text
    $wp_customize->add_setting(
        'cogniron_header_cta_text',
        array(
            'default'           => __( 'Get Started', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_text_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_header_cta_text',
        array(
            'label'   => esc_html__( 'Header Button Text', 'cogniron-pro' ),
            'section' => 'cogniron_header_section',
            'type'    => 'text',
        )
    );

    // Header CTA URL
    $wp_customize->add_setting(
        'cogniron_header_cta_url',
        array(
            'default'           => '#contact',
            'sanitize_callback' => 'esc_url_raw',
        )
    );

    $wp_customize->add_control(
        'cogniron_header_cta_url',
        array(
            'label'   => esc_html__( 'Header Button URL', 'cogniron-pro' ),
            'section' => 'cogniron_header_section',
            'type'    => 'url',
        )
    );

    // ========================================================================
    // Footer Settings
    // ========================================================================
    
    $wp_customize->add_section(
        'cogniron_footer_section',
        array(
            'title'    => esc_html__( 'Footer Settings', 'cogniron-pro' ),
            'priority' => 35,
        )
    );

    // Footer Copyright
    $wp_customize->add_setting(
        'cogniron_footer_copyright',
        array(
            'default'           => sprintf( 
                esc_html__( '© %s %s. All rights reserved.', 'cogniron-pro' ),
                date( 'Y' ),
                get_bloginfo( 'name' )
            ),
            'sanitize_callback' => 'wp_kses_post',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_footer_copyright',
        array(
            'label'   => esc_html__( 'Copyright Text', 'cogniron-pro' ),
            'section' => 'cogniron_footer_section',
            'type'    => 'textarea',
        )
    );

    // ========================================================================
    // Blog Preview Section
    // ========================================================================
    
    $wp_customize->add_section(
        'cogniron_blog_preview_section',
        array(
            'title'    => esc_html__( 'Blog Preview Section', 'cogniron-pro' ),
            'priority' => 36,
        )
    );

    // Blog Preview Title
    $wp_customize->add_setting(
        'cogniron_blog_preview_title',
        array(
            'default'           => __( 'Latest Insights', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_text_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_blog_preview_title',
        array(
            'label'   => esc_html__( 'Section Title', 'cogniron-pro' ),
            'section' => 'cogniron_blog_preview_section',
            'type'    => 'text',
        )
    );

    // Blog Preview Description
    $wp_customize->add_setting(
        'cogniron_blog_preview_description',
        array(
            'default'           => __( 'Stay updated with the latest trends in QA testing and automation.', 'cogniron-pro' ),
            'sanitize_callback' => 'sanitize_textarea_field',
            'transport'         => 'postMessage',
        )
    );

    $wp_customize->add_control(
        'cogniron_blog_preview_description',
        array(
            'label'   => esc_html__( 'Section Description', 'cogniron-pro' ),
            'section' => 'cogniron_blog_preview_section',
            'type'    => 'textarea',
        )
    );

    // Posts Count
    $wp_customize->add_setting(
        'cogniron_blog_preview_count',
        array(
            'default'           => 3,
            'sanitize_callback' => 'absint',
        )
    );

    $wp_customize->add_control(
        'cogniron_blog_preview_count',
        array(
            'label'   => esc_html__( 'Number of Posts to Show', 'cogniron-pro' ),
            'section' => 'cogniron_blog_preview_section',
            'type'    => 'number',
            'input_attrs' => array(
                'min' => 1,
                'max' => 6,
            ),
        )
    );
}
add_action( 'customize_register', 'cogniron_customize_register' );
