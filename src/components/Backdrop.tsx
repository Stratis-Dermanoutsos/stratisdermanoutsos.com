import { useStore } from '@nanostores/react';
import { $isSidemenuOpen, toggleSidemenu } from '@stores/layout';

const Backdrop = () => {
    const isSidemenuOpen = useStore($isSidemenuOpen);
    const clickEvent = () => toggleSidemenu(false);

    const commonClasses = 'bg-black fixed inset-0 z-40';
    const className = isSidemenuOpen
        ? `${commonClasses} bg-opacity-50`
        : `${commonClasses} bg-opacity-0 pointer-events-none`;

    return <div className={className} onClick={clickEvent} />;
};

export default Backdrop;