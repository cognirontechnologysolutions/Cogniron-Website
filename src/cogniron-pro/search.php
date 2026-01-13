<?php
/**
 * The template for displaying search results pages
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<div class="search-results-wrapper">
    <div class="container">

        <?php if ( have_posts() ) : ?>

            <header class="page-header">
                <h1 class="page-title">
                    <?php
                    printf(
                        esc_html__( 'Search Results for: %s', 'cogniron-pro' ),
                        '<span>' . get_search_query() . '</span>'
                    );
                    ?>
                </h1>
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

            <header class="page-header">
                <h1 class="page-title">
                    <?php esc_html_e( 'No Results Found', 'cogniron-pro' ); ?>
                </h1>
            </header>

            <div class="search-no-results">
                <p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with different keywords.', 'cogniron-pro' ); ?></p>
                <?php get_search_form(); ?>
            </div>

        <?php endif; ?>

    </div>
</div>

<?php
get_footer();
