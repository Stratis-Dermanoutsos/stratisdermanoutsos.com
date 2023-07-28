interface Job {
    title: string;
    dateStart: Date;
    dateEnd?: Date | undefined;
    description?: string | undefined;
};

export default Job;