import { Course } from './course';
import { firestore } from 'firebase';

export class MenuItem {
    id: string;
    name: string;
    price: number;
    course: Course;
    courseRef: firestore.DocumentReference;
    tags: string[];
}
