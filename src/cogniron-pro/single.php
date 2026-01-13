<?php
/**
 * The template for displaying all single posts
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<div class="single-post-wrapper">
    <div class="container container-narrow">

        <?php
        while ( have_posts() ) :
            the_post();
            ?>

            <article id="post-<?php the_ID(); ?>" <?php post_class( 'single-post' ); ?>>
                
                <header class="entry-header">
                    
                    <?php
                    $categories = get_the_category();
                    if ( ! empty( $categories ) ) :
                        ?>
                        <div class="entry-categories">
                            <?php
                            foreach ( $categories as $category ) {
                                echo '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" class="post-card__category">' . esc_html( $category->name ) . '</a>';
                            }
                            ?>
                        </div>
                    <?php endif; ?>

                    <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>

                    <div class="entry-meta">
                        <span class="posted-on">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <?php echo get_the_date(); ?>
                        </span>
                        <span class="byline">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>">
                                <?php echo esc_html( get_the_author() ); ?>
                            </a>
                        </span>
                        <?php if ( comments_open() || get_comments_number() ) : ?>
                            <span class="comments-link">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <?php comments_number( '0 Comments', '1 Comment', '% Comments' ); ?>
                            </span>
                        <?php endif; ?>
                    </div>
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

                <footer class="entry-footer">
                    <?php
                    $tags = get_the_tags();
                    if ( $tags ) :
                        ?>
                        <div class="entry-tags">
                            <span><?php esc_html_e( 'Tags:', 'cogniron-pro' ); ?></span>
                            <?php
                            foreach ( $tags as $tag ) {
                                echo '<a href="' . esc_url( get_tag_link( $tag->term_id ) ) . '" class="tag-link">' . esc_html( $tag->name ) . '</a>';
                            }
                            ?>
                        </div>
                    <?php endif; ?>
                </footer>

            </article>

            <?php
            // Post navigation
            the_post_navigation(
                array(
                    'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'cogniron-pro' ) . '</span> <span class="nav-title">%title</span>',
                    'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'cogniron-pro' ) . '</span> <span class="nav-title">%title</span>',
                )
            );

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
