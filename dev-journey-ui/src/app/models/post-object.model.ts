import { Category } from './../enum/categories.enum';

export class PostObject {

    title!: string;

    filePath!: string;

    category!: Category;

    constructor(title: string, filePath: string, category?: Category) {
        this.title = title;
        this.filePath = filePath;
        this.category = category || Category.NONE;
    }
}