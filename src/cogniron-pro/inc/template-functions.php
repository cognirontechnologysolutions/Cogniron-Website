<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Add custom classes to the array of post classes
 */
function cogniron_post_classes( $classes, $class, $post_id ) {
    if ( ! is_singular() ) {
        $classes[] = 'entry';
    }

    return $classes;
}
add_filter( 'post_class', 'cogniron_post_classes', 10, 3 );

/**
 * Custom page title output
 */
function cogniron_page_title() {
    if ( is_front_page() && is_home() ) {
        echo esc_html( get_bloginfo( 'name' ) );
    } elseif ( is_front_page() ) {
        echo esc_html( get_bloginfo( 'name' ) );
    } elseif ( is_home() ) {
        single_post_title();
    } else {
        the_title();
    }
}

/**
 * Get reading time for a post
 */
function cogniron_get_reading_time( $post_id = null ) {
    $post = get_post( $post_id );
    $word_count = str_word_count( strip_tags( $post->post_content ) );
    $reading_time = ceil( $word_count / 200 );
    
    return sprintf(
        esc_html( _n( '%s min read', '%s mins read', $reading_time, 'cogniron-pro' ) ),
        $reading_time
    );
}

/**
 * Custom comment list callback
 */
function cogniron_comment_list( $comment, $args, $depth ) {
    ?>
    <li id="comment-<?php comment_ID(); ?>" <?php comment_class( 'comment' ); ?>>
        <article class="comment-body">
            <footer class="comment-meta">
                <div class="comment-author vcard">
                    <?php echo get_avatar( $comment, 50 ); ?>
                    <?php
                    printf(
                        '<b class="fn">%s</b>',
                        get_comment_author_link()
                    );
                    ?>
                </div>
                <div class="comment-metadata">
                    <a href="<?php echo esc_url( get_comment_link( $comment, $args ) ); ?>">
                        <time datetime="<?php comment_time( 'c' ); ?>">
                            <?php
                            printf(
                                esc_html__( '%1$s at %2$s', 'cogniron-pro' ),
                                get_comment_date(),
                                get_comment_time()
                            );
                            ?>
                        </time>
                    </a>
                </div>
            </footer>

            <div class="comment-content">
                <?php comment_text(); ?>
            </div>

            <?php
            comment_reply_link(
                array_merge(
                    $args,
                    array(
                        'depth'     => $depth,
                        'max_depth' => $args['max_depth'],
                    )
                )
            );
            ?>
        </article>
    <?php
}

/**
 * Display related posts
 */
function cogniron_related_posts( $post_id = null ) {
    if ( ! $post_id ) {
        $post_id = get_the_ID();
    }

    $categories = wp_get_post_categories( $post_id );
    
    if ( empty( $categories ) ) {
        return;
    }

    $args = array(
        'category__in'   => $categories,
        'post__not_in'   => array( $post_id ),
        'posts_per_page' => 3,
        'orderby'        => 'rand',
    );

    $related_query = new WP_Query( $args );

    if ( ! $related_query->have_posts() ) {
        return;
    }

    ?>
    <div class="related-posts">
        <h3 class="section-title"><?php esc_html_e( 'Related Posts', 'cogniron-pro' ); ?></h3>
        <div class="posts-grid">
            <?php
            while ( $related_query->have_posts() ) :
                $related_query->the_post();
                get_template_part( 'template-parts/content', 'post' );
            endwhile;
            wp_reset_postdata();
            ?>
        </div>
    </div>
    <?php
}

/**
 * Get social share links
 */
function cogniron_social_share_links() {
    $post_url = urlencode( get_permalink() );
    $post_title = urlencode( get_the_title() );

    $links = array(
        'twitter'  => 'https://twitter.com/intent/tweet?url=' . $post_url . '&text=' . $post_title,
        'facebook' => 'https://www.facebook.com/sharer/sharer.php?u=' . $post_url,
        'linkedin' => 'https://www.linkedin.com/shareArticle?mini=true&url=' . $post_url . '&title=' . $post_title,
    );

    return $links;
}
