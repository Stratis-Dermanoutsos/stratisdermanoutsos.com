import { toggleSidemenu } from '@stores/layout';

interface Props {
    children: React.ReactNode;
};

/**
 * @desc Hamburger button for opening the sidemenu.
 * @param {React.ReactNode} children - The content of the button.
 * @returns {JSX.Element} - The hamburger button.
 */
const Hamburger = (props: Props): React.ReactNode => {
    const clickEvent = () => toggleSidemenu();

    return (
        <button
            onClick={clickEvent}
            className='inline-flex items-center p-2 text-sm text-txt-medium rounded-lg md:hidden hover:bg-high focus:outline-none focus:ring-2 focus:ring-txt-high'>
            <span className='sr-only'>Open sidemenu</span>
            {props.children}
        </button>
    );
};

export default Hamburger;