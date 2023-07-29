import { useStore } from '@nanostores/react';
import { $isSidemenuOpen, toggleSidemenu } from '@stores/layout';
import { useEffect } from 'react';

interface Props {
    children: React.ReactNode;
};

/**
 * @desc The app's sidemenu.
 * @param {React.ReactNode} children - The content of the sidemenu.
 * @returns {JSX.Element} - The sidemenu.
 */
const StatefulSidemenu = (props: Props): React.ReactNode => {
    const isSidemenuOpen = useStore($isSidemenuOpen);

    /**
     * Create an observer for cases when the sidemenu is toggled on mobile 
     * and the screen is resized to desktop.
     */
    useEffect(() => {
        const query = matchMedia('(min-width: 768px)');
        if (typeof window !== 'undefined')
            query.addEventListener('change', (_event) => {
                toggleSidemenu(false);
            });
    }, []);

    const commonClasses = 'fixed duration-300 ease-in-out h-full left-0 transition-transform transform top-0 w-64 z-50';
    const className = isSidemenuOpen
        ? `${commonClasses} translate-x-0`
        : `${commonClasses} -translate-x-full md:translate-x-0`;

    return (
        <aside className={className}>
            {props.children}
        </aside>
    );
};

export default StatefulSidemenu;