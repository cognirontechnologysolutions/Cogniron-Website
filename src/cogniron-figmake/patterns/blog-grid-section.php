<?php
/**
 * Title: Blog Grid Section
 * Slug: cogniron/blog-grid-section
 * Categories: cogniron
 * Description: Latest blog posts grid for homepage
 */
?>

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"6rem","bottom":"6rem"}}},"backgroundColor":"secondary","className":"blog-grid-section fade-in","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull blog-grid-section fade-in has-secondary-background-color has-background" style="padding-top:6rem;padding-bottom:6rem">
    
    <!-- wp:group {"align":"wide","layout":{"type":"default"}} -->
    <div class="wp-block-group alignwide">
        
        <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"},"style":{"spacing":{"margin":{"bottom":"4rem"}}}} -->
        <div class="wp-block-group" style="margin-bottom:4rem">
            <!-- wp:heading {"fontSize":"4xl","style":{"typography":{"fontWeight":"700"}}} -->
            <h2 class="wp-block-heading has-4-xl-font-size" style="font-weight:700">Latest Insights</h2>
            <!-- /wp:heading -->

            <!-- wp:buttons -->
            <div class="wp-block-buttons">
                <!-- wp:button {"textColor":"brand-blue","className":"is-style-outline"} -->
                <div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-brand-blue-color has-text-color wp-element-button" href="/blog">View All Posts →</a></div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
        </div>
        <!-- /wp:group -->

        <!-- wp:query {"queryId":2,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"exclude","inherit":false},"displayLayout":{"type":"flex","columns":3},"align":"wide"} -->
        <div class="wp-block-query alignwide">
            
            <!-- wp:post-template {"style":{"spacing":{"blockGap":"2rem"}}} -->
            
                <!-- wp:group {"style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"}}},"backgroundColor":"secondary","className":"blog-post-card hover-lift","layout":{"type":"default"}} -->
                <div class="wp-block-group blog-post-card hover-lift has-secondary-background-color has-background" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">
                    
                    <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","style":{"border":{"radius":"1rem 1rem 0 0"}}} /-->

                    <!-- wp:group {"style":{"spacing":{"padding":{"top":"1.5rem","right":"1.5rem","bottom":"1.5rem","left":"1.5rem"}}},"layout":{"type":"default"}} -->
                    <div class="wp-block-group" style="padding-top:1.5rem;padding-right:1.5rem;padding-bottom:1.5rem;padding-left:1.5rem">
                        
                        <!-- wp:post-date {"fontSize":"sm","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"0.5rem"}}}} /-->

                        <!-- wp:post-title {"level":3,"isLink":true,"fontSize":"xl","style":{"spacing":{"margin":{"bottom":"0.75rem"}},"typography":{"fontWeight":"600"}}} /-->

                        <!-- wp:post-excerpt {"moreText":"Read More →","excerptLength":15} /-->

                    </div>
                    <!-- /wp:group -->

                </div>
                <!-- /wp:group -->

            <!-- /wp:post-template -->

        </div>
        <!-- /wp:query -->

    </div>
    <!-- /wp:group -->

</div>
<!-- /wp:group -->
