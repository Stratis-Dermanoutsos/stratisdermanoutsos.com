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
}, {
    title: 'Open Source',
    url: `${SOCIAL_LINKS!.github!.url}/lists/is-contributing`,
    dateStart: new Date('2020-09-15'),
    jobs: [{
        title: 'DataStories-UniPi/miniDB',
        url: 'https://github.com/DataStories-UniPi/miniDB',
        dateStart: new Date('2022-05-01'),
        dateEnd: new Date('2022-11-14'),
        description: 'The miniDB project is a minimal and easy to expand and develop for RMDBS tool, written exclusivelly in Python 3. MiniDB\'s main goal is to provide the user with as much functionality as possible while being easy to understand and even easier to expand.Thus, miniDB\'s primary market are students and researchers that want to work with a tool that they can understand through and through, while being able to implement additional features as quickly as possible.'
    }, {
        title: 'Stratis-Dermanoutsos/Money_CLI',
        url: 'https://github.com/Stratis-Dermanoutsos/Money_CLI',
        dateStart: new Date('2022-01-02'),
        description: 'Money is an Open Source CLI tool for anyone to note and see quick stats of their money usage.'
    }, {
        title: '...and more',
        url: `${SOCIAL_LINKS!.github!.url}/lists/is-contributing`,
        dateStart: new Date('2020-09-15'),
        description: 'I have contributed to many open source projects and continue to do so when I have the time. You can see the full list by clicking here.'
    }]
}];