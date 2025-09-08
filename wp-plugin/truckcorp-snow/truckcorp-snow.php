<?php
/**
 * Plugin Name: TruckCorp Snow App
 * Description: Embeds the TruckCorp Snow & Ice Knowledgebase from Vercel
 * Version: 2.0.0
 * Author: TruckCorp
 */
if (!defined('ABSPATH')) exit;

define('TC_SNOW_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('TC_SNOW_PLUGIN_URL', plugin_dir_url(__FILE__));

// Admin settings page
add_action('admin_menu', function() {
    add_options_page(
        'TruckCorp Snow Settings',
        'TruckCorp Snow',
        'manage_options',
        'truckcorp-snow',
        'tc_snow_settings_page'
    );
});

function tc_snow_settings_page() {
    if (isset($_POST['tc_snow_app_url'])) {
        update_option('tc_snow_app_url', sanitize_url($_POST['tc_snow_app_url']));
        echo '<div class="notice notice-success"><p>Settings saved!</p></div>';
    }
    
    $app_url = get_option('tc_snow_app_url', 'https://your-app.vercel.app');
    ?>
    <div class="wrap">
        <h1>TruckCorp Snow Settings</h1>
        <form method="post">
            <table class="form-table">
                <tr>
                    <th scope="row"><label for="tc_snow_app_url">Vercel App URL</label></th>
                    <td>
                        <input type="url" id="tc_snow_app_url" name="tc_snow_app_url" value="<?php echo esc_attr($app_url); ?>" class="regular-text" />
                        <p class="description">The URL where your app is hosted on Vercel (e.g., https://your-app.vercel.app)</p>
                    </td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}

// Shortcode handler
add_shortcode('truckcorp_snow', function($atts) {
    $atts = shortcode_atts(['kb' => 'true'], $atts);
    $app_url = get_option('tc_snow_app_url', 'https://your-app.vercel.app');
    
    // Generate unique ID for multiple instances
    $container_id = 'tc-snow-' . uniqid();
    
    // Configuration to pass to the app
    $config = [
        'containerId' => $container_id,
        'features' => ['kb' => ($atts['kb'] === 'true')],
        'wpData' => [
            'siteUrl' => site_url(),
            'apiUrl' => rest_url()
        ]
    ];
    
    // Enqueue the remote scripts with a unique handle
    $handle = 'tc-snow-app-' . md5($app_url);
    wp_enqueue_script($handle, $app_url . '/truckcorp-kb.js', [], null, true);
    wp_enqueue_style($handle . '-css', $app_url . '/truckcorp-kb.css', [], null);
    
    // Pass configuration to the script
    wp_localize_script($handle, 'tcSnowConfig_' . str_replace('-', '_', $container_id), $config);
    
    // Return the container div
    return sprintf(
        '<div id="%s" class="tc-snow-container" data-config="%s"></div>',
        esc_attr($container_id),
        esc_attr(json_encode($config))
    );
});