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
} from '@components/icons/icons';
import type INavLink from 'src/types/NavLink';
import type ICompany from 'src/types/work/Company';

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

export const COMPANIES: ICompany[] = [{
    title: 'MODUS S.A.',
    url: 'https://modus.gr',
    dateStart: new Date('2021-11-01'),
    jobs: [{
        title: 'Senior .NET Developer',
        dateStart: new Date('2023-05-01'),
        description: 'Work on a variety of projects such as internal tools, web applications and servers. Collaborated with other teams to deliver high-quality software.'
    }, {
        title: 'Full-Stack Software Developer',
        dateStart: new Date('2021-11-01'),
        dateEnd: new Date('2023-05-01'),
        description: 'Led the development of many portal applications used by thousands of daily users and other custom projects for clients. Took the initiative to introduce new technologies such as React and helped apply modern best practices. Helped in mentoring junior developers to improve their skills.'
    }]
}, {
    title: 'Freelance',
    url: SOCIAL_LINKS!.email!.url,
    dateStart: new Date('2022-11-01'),
    jobs: [{
        title: 'Full-Stack Software Developer',
        dateStart: new Date('2022-11-01'),
        description: 'Senior .NET Developer with vast experience in React. I specialize in web development and have extensive experience in .NET development, Astro, React, Java, C#, JavaScript, and TypeScript. I have a proven track record of delivering innovative, custom solutions using .NET and React that meet my clients\' unique needs and help them achieve their business goals. I am dedicated to providing top-quality work and ensuring that my clients are satisfied with the results. Let\'s collaborate and bring your vision to life!'
    }]
}];