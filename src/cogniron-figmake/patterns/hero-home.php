<?php
/**
 * Title: Hero Home
 * Slug: cogniron/hero-home
 * Categories: cogniron
 * Description: Homepage hero section with heading, description, and CTA buttons
 */
?>

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"8rem","bottom":"8rem"}}},"backgroundColor":"primary","className":"hero-section fade-in-up","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull hero-section fade-in-up has-primary-background-color has-background" style="padding-top:8rem;padding-bottom:8rem">
    
    <!-- wp:columns {"verticalAlignment":"center","align":"wide","style":{"spacing":{"blockGap":{"top":"4rem","left":"4rem"}}}} -->
    <div class="wp-block-columns alignwide are-vertically-aligned-center">
        
        <!-- wp:column {"verticalAlignment":"center","width":"55%"} -->
        <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:55%">
            
            <!-- wp:heading {"level":1,"fontSize":"6xl","style":{"typography":{"fontWeight":"700","lineHeight":"1.2"},"spacing":{"margin":{"bottom":"1.5rem"}}}} -->
            <h1 class="wp-block-heading has-6-xl-font-size" style="margin-bottom:1.5rem;font-weight:700;line-height:1.2">Transform Quality with AI-Powered Testing</h1>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"fontSize":"xl","style":{"spacing":{"margin":{"bottom":"3rem"}}}} -->
            <p class="has-xl-font-size" style="margin-bottom:3rem">Cogniron delivers intelligent QA solutions that predict defects, optimize workflows, and accelerate your time-to-market with precision.</p>
            <!-- /wp:paragraph -->

            <!-- wp:buttons {"style":{"spacing":{"blockGap":"1rem"}}} -->
            <div class="wp-block-buttons">
                <!-- wp:button {"gradient":"blue-aqua","className":"hero-button-primary hover-lift"} -->
                <div class="wp-block-button hero-button-primary hover-lift"><a class="wp-block-button__link wp-element-button" href="/contact">Get Started →</a></div>
                <!-- /wp:button -->

                <!-- wp:button {"backgroundColor":"secondary","textColor":"text-primary","className":"is-style-outline hero-button-secondary"} -->
                <div class="wp-block-button is-style-outline hero-button-secondary"><a class="wp-block-button__link has-text-primary-color has-secondary-background-color has-text-color has-background wp-element-button" href="/services">Explore Services</a></div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->

        </div>
        <!-- /wp:column -->

        <!-- wp:column {"verticalAlignment":"center","width":"45%"} -->
        <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:45%">
            
            <!-- wp:image {"aspectRatio":"16/9","scale":"cover","sizeSlug":"full","linkDestination":"none","className":"hero-image hover-scale","style":{"border":{"radius":"1.5rem"}}} -->
            <figure class="wp-block-image size-full has-custom-border hero-image hover-scale"><img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/placeholder-hero.jpg' ); ?>" alt="AI-Powered Testing Platform" style="border-radius:1.5rem;aspect-ratio:16/9;object-fit:cover"/></figure>
            <!-- /wp:image -->

        </div>
        <!-- /wp:column -->

    </div>
    <!-- /wp:columns -->

</div>
<!-- /wp:group -->
