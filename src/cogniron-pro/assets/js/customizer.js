/**
 * Customizer JavaScript - Live Preview
 *
 * @package Cogniron_Pro
 */

(function($) {
    'use strict';

    // Site Title
    wp.customize('blogname', function(value) {
        value.bind(function(to) {
            $('.site-title a').text(to);
        });
    });

    // Site Description
    wp.customize('blogdescription', function(value) {
        value.bind(function(to) {
            $('.site-description').text(to);
        });
    });

    // ========================================================================
    // Hero Section
    // ========================================================================

    wp.customize('cogniron_hero_title', function(value) {
        value.bind(function(to) {
            $('.hero__content h1').text(to);
        });
    });

    wp.customize('cogniron_hero_subtitle', function(value) {
        value.bind(function(to) {
            $('.hero__content p').first().text(to);
        });
    });

    wp.customize('cogniron_hero_cta_primary_text', function(value) {
        value.bind(function(to) {
            $('.hero__actions .btn-primary').first().contents().filter(function() {
                return this.nodeType === 3;
            }).first().replaceWith(to);
        });
    });

    wp.customize('cogniron_hero_cta_secondary_text', function(value) {
        value.bind(function(to) {
            $('.hero__actions .btn-secondary').first().contents().filter(function() {
                return this.nodeType === 3;
            }).first().replaceWith(to);
        });
    });

    // ========================================================================
    // Features Section
    // ========================================================================

    wp.customize('cogniron_features_title', function(value) {
        value.bind(function(to) {
            $('.features-section .section-header h2').text(to);
        });
    });

    wp.customize('cogniron_features_description', function(value) {
        value.bind(function(to) {
            $('.features-section .section-header p').text(to);
        });
    });

    // ========================================================================
    // Services Section
    // ========================================================================

    wp.customize('cogniron_services_title', function(value) {
        value.bind(function(to) {
            $('.services-section .section-header h2').text(to);
        });
    });

    wp.customize('cogniron_services_description', function(value) {
        value.bind(function(to) {
            $('.services-section .section-header p').text(to);
        });
    });

    // ========================================================================
    // CTA Section
    // ========================================================================

    wp.customize('cogniron_cta_title', function(value) {
        value.bind(function(to) {
            $('.cta-section .cta-title').text(to);
        });
    });

    wp.customize('cogniron_cta_text', function(value) {
        value.bind(function(to) {
            $('.cta-section .cta-text').text(to);
        });
    });

    wp.customize('cogniron_cta_button_text', function(value) {
        value.bind(function(to) {
            $('.cta-section .btn').contents().filter(function() {
                return this.nodeType === 3;
            }).first().replaceWith(to);
        });
    });

    // ========================================================================
    // Header Settings
    // ========================================================================

    wp.customize('cogniron_header_cta_text', function(value) {
        value.bind(function(to) {
            $('.header-actions .btn-primary').text(to);
        });
    });

    // ========================================================================
    // Footer Settings
    // ========================================================================

    wp.customize('cogniron_footer_copyright', function(value) {
        value.bind(function(to) {
            $('.footer-copyright').html(to);
        });
    });

    // ========================================================================
    // Blog Preview Section
    // ========================================================================

    wp.customize('cogniron_blog_preview_title', function(value) {
        value.bind(function(to) {
            $('.blog-preview-section .section-header h2').text(to);
        });
    });

    wp.customize('cogniron_blog_preview_description', function(value) {
        value.bind(function(to) {
            $('.blog-preview-section .section-header p').text(to);
        });
    });

})(jQuery);
