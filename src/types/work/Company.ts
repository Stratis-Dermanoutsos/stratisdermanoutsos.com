import type Job from 'src/types/work/Job';

interface Company {
    title: string;
    dateStart: Date;
    dateEnd?: Date | undefined;
    jobs: Job[];
};

export default Company;