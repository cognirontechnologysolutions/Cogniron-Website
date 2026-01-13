<?php
/**
 * Template part for displaying the blog preview section
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$blog_title = get_theme_mod( 'cogniron_blog_preview_title', __( 'Latest Insights', 'cogniron-pro' ) );
$blog_description = get_theme_mod( 'cogniron_blog_preview_description', __( 'Stay updated with the latest trends in QA testing and automation.', 'cogniron-pro' ) );
$posts_count = get_theme_mod( 'cogniron_blog_preview_count', 3 );

$args = array(
    'post_type'      => 'post',
    'posts_per_page' => $posts_count,
    'post_status'    => 'publish',
);

$blog_query = new WP_Query( $args );

if ( ! $blog_query->have_posts() ) {
    return;
}
?>

<section class="blog-preview-section">
    <div class="container">
        
        <?php if ( ! empty( $blog_title ) || ! empty( $blog_description ) ) : ?>
            <div class="section-header" data-aos="fade-up">
                <?php if ( ! empty( $blog_title ) ) : ?>
                    <h2><?php echo esc_html( $blog_title ); ?></h2>
                <?php endif; ?>
                
                <?php if ( ! empty( $blog_description ) ) : ?>
                    <p><?php echo esc_html( $blog_description ); ?></p>
                <?php endif; ?>
            </div>
        <?php endif; ?>

        <div class="posts-grid">
            <?php
            $index = 0;
            while ( $blog_query->have_posts() ) :
                $blog_query->the_post();
                ?>
                <article class="post-card" data-aos="fade-up" data-aos-delay="<?php echo esc_attr( $index * 100 ); ?>">
                    
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
                <?php
                $index++;
            endwhile;
            wp_reset_postdata();
            ?>
        </div>

        <div class="text-center mt-48" data-aos="fade-up">
            <a href="<?php echo esc_url( get_permalink( get_option( 'page_for_posts' ) ) ); ?>" class="btn btn-primary btn-large">
                <?php esc_html_e( 'View All Posts', 'cogniron-pro' ); ?>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>

    </div>
</section>
