import FiverrIcon from './components/icons/FiverrIcon.astro';
import FreelancerIcon from './components/icons/FreelancerIcon.astro';
import LinkedInIcon from './components/icons/LinkedInIcon.astro';
import UpworkIcon from './components/icons/UpworkIcon.astro';

export const TITLE_PREFIX = 'Stratis Dermanoutsos';
export const DESCRIPTION = 'Stratis Dermanoutsos is a Senior Software Developer based in Athens, Greece. He is passionate about building software in the most efficient and maintainable way possible.';

export const SIDEMENU_ITEMS = [{
    title: 'Home',
    url: '/',
    icon: 'House'
}, {
    title: 'About',
    url: '/about',
    icon: 'AdressCard'
}, {
    title: 'Work',
    url: '/work',
    icon: 'Briefcase'
}, {
    title: 'Blog',
    url: '/blog',
    icon: 'CommentDots'
}, {
    title: 'Notes',
    url: 'https://notes.stratisdermanoutsos.com',
    icon: 'Book'
}, {
    title: 'About this page',
    url: '/about-this-page',
    icon: 'CircleInfo'
}];

export const SOCIAL_LINKS: {
    [key: string]: {
        url: string,
        icon: any
        text: string
    }
} = {
    dribble: {
        url: 'https://dribbble.com/stratis_derm',
        icon: FiverrIcon, // TODO
        text: 'Dribble'
    },
    figma: {
        url: 'https://www.figma.com/@stratis_derm',
        icon: FiverrIcon, // TODO
        text: 'Figma'
    },
    fiverr: {
        url: 'https://www.fiverr.com/stratis_derm',
        icon: FiverrIcon,
        text: 'Fiverr'
    },
    freelancer: {
        url: 'https://www.freelancer.com/u/stratisderm',
        icon: FreelancerIcon,
        text: 'Freelancer'
    },
    github: {
        url: 'https://github.com/Stratis-Dermanoutsos',
        icon: FreelancerIcon, // TODO
        text: 'GitHub'
    },
    linkedin: {
        url: 'https://www.linkedin.com/in/stratis-dermanoutsos',
        icon: LinkedInIcon,
        text: 'LinkedIn'
    },
    stackoverflow: {
        url: 'https://stackoverflow.com/users/13187980/stratis-dermanoutsos',
        icon: UpworkIcon, // TODO
        text: 'Stack Overflow'
    },
    twitter: {
        url: 'https://twitter.com/stratis_derm',
        icon: UpworkIcon, // TODO
        text: 'Twitter'
    },
    upwork: {
        url: 'https://www.upwork.com/freelancers/~0114743f3a4798b41c',
        icon: UpworkIcon,
        text: 'Upwork'
    }
};