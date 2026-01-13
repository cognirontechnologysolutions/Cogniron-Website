<?php
/**
 * Template part for displaying posts in loops
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-card' ); ?>>
    
    <?php if ( has_post_thumbnail() ) : ?>
        <div class="post-card__image">
            <a href="<?php the_permalink(); ?>">
                <?php the_post_thumbnail( 'cogniron-medium' ); ?>
            </a>
        </div>
    <?php endif; ?>

    <div class="post-card__content">
        
        <div class="post-card__meta">
            <span class="posted-on">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <?php echo get_the_date(); ?>
            </span>
            <span class="byline">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>">
                    <?php echo esc_html( get_the_author() ); ?>
                </a>
            </span>
        </div>

        <?php
        $categories = get_the_category();
        if ( ! empty( $categories ) ) :
            ?>
            <div class="post-card__categories">
                <?php
                foreach ( $categories as $category ) {
                    echo '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" class="post-card__category">' . esc_html( $category->name ) . '</a>';
                }
                ?>
            </div>
        <?php endif; ?>

        <h3 class="post-card__title">
            <a href="<?php the_permalink(); ?>">
                <?php the_title(); ?>
            </a>
        </h3>

        <div class="post-card__excerpt">
            <?php the_excerpt(); ?>
        </div>

        <a href="<?php the_permalink(); ?>" class="btn btn-secondary">
            <?php esc_html_e( 'Read More', 'cogniron-pro' ); ?>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </a>

    </div>

</article>
