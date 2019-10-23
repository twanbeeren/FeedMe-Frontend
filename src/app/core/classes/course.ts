export class Course {
    id: number;
    name: string;
    priority: number;

    constructor(id: number, name: string, priority: number) {
        this.id = id;
        this.name = name;
        this.priority = priority;
    }
}
