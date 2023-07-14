import { atom } from 'nanostores';

export const $isSidemenuOpen = atom<boolean>(false);

export const toggleSidemenu = (newValue: boolean | undefined) => {
    if (newValue !== undefined)
        $isSidemenuOpen.set(newValue);
    else
        $isSidemenuOpen.set(!$isSidemenuOpen.get());
};