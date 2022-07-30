/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {useInnerBlocksProps, useBlockProps} from '@wordpress/block-editor';

export default function save({attributes}) {
    const {isStackedOnMobile, verticalAlignment, columns} = attributes;

    const className = classnames('tw-grid', {
        [`align-${verticalAlignment}`]: verticalAlignment,
        [`is-not-stacked-on-mobile`]: !isStackedOnMobile,
        [`tw-grid-cols-${columns}`]: columns,
    });

    const blockProps = useBlockProps.save({className});
    const innerBlocksProps = useInnerBlocksProps.save(blockProps);

    return <div {...innerBlocksProps} />;
}
