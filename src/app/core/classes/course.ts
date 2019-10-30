export class Course {
    id: string;
    name: string;
    priority: number;

    constructor(id: string, name: string, priority: number) {
        this.id = id;
        this.name = name;
        this.priority = priority;
    }
}
