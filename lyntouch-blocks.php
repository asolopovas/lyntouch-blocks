<?php

/**
 * Plugin Name:       Lyntouch Blocks
 * Description:       A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.
 * Version:           0.1.0
 * Requires at least: 5.9
 * Requires PHP:      8.0
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


//  Register Blocks
function lyntouch_blocks_init()
{
    register_block_type(__DIR__ . '/build/lyn-columns');
    register_block_type(__DIR__ . '/build/lyn-column');
}
add_action('init', 'lyntouch_blocks_init');
