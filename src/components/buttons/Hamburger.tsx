import { useStore } from '@nanostores/react';
import { $isSidemenuOpen, toggleSidemenu } from '../../stores/layout';

interface Props {
    children: React.ReactNode;
};

/**
 * @desc Hamburger button for opening the sidemenu.
 * @param {React.ReactNode} children - The content of the button.
 * @returns {JSX.Element} - The hamburger button.
 * 
 * Was supposed to be `<slot />`, according to
 * @link https://docs.astro.build/en/core-concepts/framework-components/#can-i-use-astro-components-inside-my-framework-components
 * but it doesn't work, so I'm using children instead.
 */
const Hamburger = (props: Props): React.ReactNode => {
    const isSidemenuOpen = useStore($isSidemenuOpen);

    const clickEvent = (e) => toggleSidemenu();

    return (
        <button
            onClick={clickEvent}
            className='inline-flex items-center p-2 text-sm text-txt-medium rounded-lg md:hidden hover:bg-high focus:outline-none focus:ring-2 focus:ring-txt-high dark:text-txt-medium dark:hover:bg-high dark:focus:ring-txt-high'>
            <span className='sr-only'>Open sidemenu</span>
            {props.children}
        </button>
    );
};

export default Hamburger;