import { useStore } from '@nanostores/react';
import { $isSidemenuOpen } from '../../stores/layout';

interface Props {
    children: React.ReactNode;
};

/**
 * @desc The app's sidemenu.
 * @param {React.ReactNode} children - The content of the sidemenu.
 * @returns {JSX.Element} - The sidemenu.
 */
const Sidemenu = (props: Props): React.ReactNode => {
    const isSidemenuOpen = useStore($isSidemenuOpen);

    const commonClasses = 'fixed duration-300 ease-in-out h-full left-0 transition-transform transform top-0 w-64 z-[999]';
    const className = isSidemenuOpen
        ? `${commonClasses} translate-x-0`
        : `${commonClasses} -translate-x-full md:translate-x-0`;

    return (
        <aside className={className}>
            {props.children}
        </aside>
    );
};

export default Sidemenu;