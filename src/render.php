<?php

$clientId = wp_unique_id( 'amhb' );

?>
<div <?php echo get_block_wrapper_attributes(); ?> id='amhbAboutMe-<?php echo esc_attr($clientId); ?>' data-attributes='<?php echo esc_attr(wp_json_encode($attributes)); ?>'></div>