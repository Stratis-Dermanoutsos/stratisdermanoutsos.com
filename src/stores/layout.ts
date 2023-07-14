import { atom } from 'nanostores';

export const $isSidemenuOpen = atom<boolean>(false);

export const toggleSidemenu = () => {
    $isSidemenuOpen.set(!$isSidemenuOpen.get());
};