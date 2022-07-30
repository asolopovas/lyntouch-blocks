/**
 * WordPress dependencies
 */
import {registerBlockType} from '@wordpress/blocks'
import { column as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import edit from './edit.jsx';
import metadata from './block.json';
import save from './save.jsx';
import './style.scss';
import './editor.scss';

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon,
	edit,
	save,
};

registerBlockType(name, settings)

