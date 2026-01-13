<?php
/**
 * The front page template file
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<div class="front-page">

    <?php
    // Hero Section
    get_template_part( 'template-parts/section', 'hero' );
    ?>

    <?php
    // Display page content if exists (for Gutenberg blocks)
    while ( have_posts() ) :
        the_post();
        if ( get_the_content() ) :
            ?>
            <section class="page-content-section">
                <div class="container">
                    <article class="entry-content">
                        <?php the_content(); ?>
                    </article>
                </div>
            </section>
            <?php
        endif;
    endwhile;
    ?>

    <?php
    // Features Section
    get_template_part( 'template-parts/section', 'features' );
    ?>

    <?php
    // Services Section
    get_template_part( 'template-parts/section', 'services' );
    ?>

    <?php
    // Case Studies Section
    get_template_part( 'template-parts/section', 'case-studies' );
    ?>

    <?php
    // Testimonials Section
    get_template_part( 'template-parts/section', 'testimonials' );
    ?>

    <?php
    // Blog Preview Section
    get_template_part( 'template-parts/section', 'blog' );
    ?>

    <?php
    // CTA Section
    get_template_part( 'template-parts/section', 'cta' );
    ?>

</div>

<?php
get_footer();
