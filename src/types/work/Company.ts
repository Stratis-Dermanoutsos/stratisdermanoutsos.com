import type Job from 'src/types/work/Job';

interface Company {
    title: string;
    url: string;
    dateStart: Date;
    dateEnd?: Date;
    jobs: Job[];
};

export default Company;