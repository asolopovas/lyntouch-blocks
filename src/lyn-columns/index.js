/**
 * WordPress dependencies
 */
import {registerBlockType} from '@wordpress/blocks'
import {__} from '@wordpress/i18n'
import {columns as icon} from '@wordpress/icons'

/**
 * Internal dependencies
 */
import edit from './edit.jsx'
import metadata from './block.json'
import save from './save.jsx'
import variations from './variations.jsx'
import transforms from './transforms'
import './style.scss'
import './editor.scss'

const {name} = metadata

export {metadata, name}

export const settings = {
    icon,
    variations,
    example: {
        viewportWidth: 600, // Columns collapse "@media (max-width: 599px)".
        innerBlocks: [
            {
                name: 'lyn/column',
                innerBlocks: [
                    {
                        name: 'core/paragraph',
                        attributes: {
                            /* translators: example text. */
                            content: __(
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.',
                            ),
                        },
                    },
                    {
                        name: 'core/image',
                        attributes: {
                            url:
                                'https://s.w.org/images/core/5.3/Windbuchencom.jpg',
                        },
                    },
                    {
                        name: 'core/paragraph',
                        attributes: {
                            /* translators: example text. */
                            content: __(
                                'Suspendisse commodo neque lacus, a dictum orci interdum et.',
                            ),
                        },
                    },
                ],
            },
            {
                name: 'lyn/column',
                innerBlocks: [
                    {
                        name: 'core/paragraph',
                        attributes: {
                            /* translators: example text. */
                            content: __(
                                'Etiam et egestas lorem. Vivamus sagittis sit amet dolor quis lobortis. Integer sed fermentum arcu, id vulputate lacus. Etiam fermentum sem eu quam hendrerit.',
                            ),
                        },
                    },
                    {
                        name: 'core/paragraph',
                        attributes: {
                            /* translators: example text. */
                            content: __(
                                'Nam risus massa, ullamcorper consectetur eros fermentum, porta aliquet ligula. Sed vel mauris nec enim.',
                            ),
                        },
                    },
                ],
            },
        ],
    },
    edit,
    save,
    transforms,
}


registerBlockType(name, settings)
