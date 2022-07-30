<?php

function register_lyn_column_block(): void
{
    register_block_type(__DIR__);
}

add_action('init', 'register_lyn_column_block');
