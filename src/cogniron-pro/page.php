<?php
/**
 * The template for displaying all pages
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<div class="page-wrapper">
    <div class="container">

        <?php
        while ( have_posts() ) :
            the_post();
            ?>

            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                
                <header class="entry-header">
                    <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                </header>

                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="entry-featured-image">
                        <?php the_post_thumbnail( 'cogniron-hero' ); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content">
                    <?php
                    the_content();

                    wp_link_pages(
                        array(
                            'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'cogniron-pro' ),
                            'after'  => '</div>',
                        )
                    );
                    ?>
                </div>

            </article>

            <?php
            // If comments are open or we have at least one comment, load up the comment template.
            if ( comments_open() || get_comments_number() ) :
                comments_template();
            endif;

        endwhile;
        ?>

    </div>
</div>

<?php
get_footer();
