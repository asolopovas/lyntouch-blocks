<?php

/**
 * Plugin Name:       Lyntouch Blocks
 * Description:       A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.
 * Version:           0.1.0
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       lyntouch-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

$lyntouchHot = file_exists(__DIR__ . '/build/hot');

//  Register Blocks
add_action('init', 'lyntouch_blocks_init');
function lyntouch_blocks_init()
{
    register_block_type(__DIR__ . '/build/lyn-columns');
    register_block_type(__DIR__ . '/build/lyn-column');
}

// function my_filter_block_type_metadata($metadata)
// {
//     if ('lyn/column' === $metadata['name']) {

//         $style = str_replace('file:.', '', $metadata['editorStyle']);
//         $blockDir = basename(dirname($metadata['file']));

//         $args = array(
//             'handle' => sanitize_key("{$metadata['name']}"),
//             'src'    => plugin_dir_url(__FILE__) . 'build/' . $blockDir . $style,
//         );

//         wp_enqueue_block_style($metadata['name'], $args);
//     }
//     return $metadata;
// }
// add_filter('block_type_metadata', 'my_filter_block_type_metadata');

// add_action('enqueue_block_editor_assets', 'lyntouch_block_editor_assets');
// function lyntouch_block_editor_assets()
// {
//     global $lyntouchHot;
//     $dir = new RecursiveDirectoryIterator(__DIR__ . '/build', RecursiveDirectoryIterator::SKIP_DOTS);
//     foreach ($dir as $fileinfo) {
//         if ($dir->isDir()) {
//             $name =  basename($dir);
//             $deps = require __DIR__ . "/build/$dir/index.asset.php";
//             wp_enqueue_script("lyntouch-blocks-$name", plugins_url("build/$name/index.js", __FILE__), $deps['dependencies'], $deps['version'], false);
//         }
//     }

//     // wp_enqueue_script('lyntouch-blocks', mix('js/blocks.js', __DIR__ . '/dist'), [], null, true);
// }
