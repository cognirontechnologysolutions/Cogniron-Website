<?php
/**
 * The template for displaying tag archive pages
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<div class="tag-archive-wrapper">
    <div class="container">

        <?php if ( have_posts() ) : ?>

            <header class="page-header">
                <h1 class="page-title">
                    <?php single_tag_title(); ?>
                </h1>
                <?php
                $tag_description = tag_description();
                if ( ! empty( $tag_description ) ) :
                    echo '<div class="archive-description">' . wp_kses_post( $tag_description ) . '</div>';
                endif;
                ?>
            </header>

            <div class="posts-grid">
                <?php
                while ( have_posts() ) :
                    the_post();
                    get_template_part( 'template-parts/content', 'post' );
                endwhile;
                ?>
            </div>

            <?php
            the_posts_pagination(
                array(
                    'mid_size'  => 2,
                    'prev_text' => sprintf(
                        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg> %s',
                        esc_html__( 'Previous', 'cogniron-pro' )
                    ),
                    'next_text' => sprintf(
                        '%s <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>',
                        esc_html__( 'Next', 'cogniron-pro' )
                    ),
                )
            );
            ?>

        <?php else : ?>

            <?php get_template_part( 'template-parts/content', 'none' ); ?>

        <?php endif; ?>

    </div>
</div>

<?php
get_footer();
