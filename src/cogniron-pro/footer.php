<?php
/**
 * The footer for the theme
 *
 * @package Cogniron_Pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>

    </main><!-- #primary -->

    <footer id="colophon" class="site-footer">
        <div class="container">
            
            <?php if ( is_active_sidebar( 'footer-1' ) || is_active_sidebar( 'footer-2' ) || is_active_sidebar( 'footer-3' ) || is_active_sidebar( 'footer-4' ) ) : ?>
                <div class="footer-widgets">
                    <?php for ( $i = 1; $i <= 4; $i++ ) : ?>
                        <?php if ( is_active_sidebar( 'footer-' . $i ) ) : ?>
                            <div class="footer-widget">
                                <?php dynamic_sidebar( 'footer-' . $i ); ?>
                            </div>
                        <?php endif; ?>
                    <?php endfor; ?>
                </div>
            <?php endif; ?>

            <div class="footer-bottom">
                <div class="footer-copyright">
                    <?php
                    $copyright_text = get_theme_mod( 'cogniron_footer_copyright', sprintf( 
                        esc_html__( '© %s %s. All rights reserved.', 'cogniron-pro' ),
                        date( 'Y' ),
                        get_bloginfo( 'name' )
                    ) );
                    echo wp_kses_post( $copyright_text );
                    ?>
                </div>

                <?php
                if ( has_nav_menu( 'footer' ) ) {
                    wp_nav_menu(
                        array(
                            'theme_location' => 'footer',
                            'menu_class'     => 'footer-menu',
                            'container'      => 'nav',
                            'container_class' => 'footer-navigation',
                            'depth'          => 1,
                            'fallback_cb'    => false,
                        )
                    );
                }
                ?>
            </div>

        </div>
    </footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
