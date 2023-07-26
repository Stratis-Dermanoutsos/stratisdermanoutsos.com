import {
    AddressCardIcon,
    BookIcon,
    BriefcaseIcon,
    CircleInfoIcon,
    CommentDotsIcon,
    DribbleIcon,
    EmailIcon,
    FigmaIcon,
    FiverrIcon,
    FreelancerIcon,
    GithubIcon,
    HouseIcon,
    LinkedInIcon,
    StackOverflowIcon,
    TwitterIcon,
    UpworkIcon
} from './components/icons/icons';
import type INavLink from './types/NavLink';

export const TITLE_PREFIX = 'Stratis Dermanoutsos';
export const DESCRIPTION = 'Stratis Dermanoutsos is a Senior Software Developer based in Athens, Greece. He is passionate about building software in the most efficient and maintainable way possible.';

export const SIDEMENU_ITEMS: INavLink[] = [{
    text: 'Home',
    url: '/',
    icon: HouseIcon
}, {
    text: 'About',
    url: '/about',
    icon: AddressCardIcon
}, {
    text: 'Work',
    url: '/work',
    icon: BriefcaseIcon
}, {
    text: 'Blog',
    url: '/blog',
    icon: CommentDotsIcon
}, {
    text: 'Notes',
    url: 'https://notes.stratisdermanoutsos.com',
    icon: BookIcon
}, {
    text: 'About this page',
    url: '/about-this-page',
    icon: CircleInfoIcon
}];

export const SOCIAL_LINKS: {
    [key: string]: INavLink
} = {
    dribble: {
        url: 'https://dribbble.com/stratis_derm',
        icon: DribbleIcon,
        text: 'Dribble'
    },
    email: {
        url: 'mailto:stratis.dermanoutsos@gmail.com',
        icon: EmailIcon,
        text: 'Email'
    },
    figma: {
        url: 'https://www.figma.com/@stratis_derm',
        icon: FigmaIcon,
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
        icon: GithubIcon,
        text: 'GitHub'
    },
    linkedin: {
        url: 'https://www.linkedin.com/in/stratis-dermanoutsos',
        icon: LinkedInIcon,
        text: 'LinkedIn'
    },
    stackoverflow: {
        url: 'https://stackoverflow.com/users/13187980/stratis-dermanoutsos',
        icon: StackOverflowIcon,
        text: 'Stack Overflow'
    },
    twitter: {
        url: 'https://twitter.com/stratis_derm',
        icon: TwitterIcon,
        text: 'Twitter'
    },
    upwork: {
        url: 'https://www.upwork.com/freelancers/~0114743f3a4798b41c',
        icon: UpworkIcon,
        text: 'Upwork'
    }
};