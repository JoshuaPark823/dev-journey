import { Category } from './../enum/categories.enum';

export class PostObject {

    title!: string;

    description!: string;

    filePath!: string;

    category!: Category;

    constructor(title: string, filePath: string, description?: string, category?: Category) {
        this.title = title;
        this.filePath = filePath;
        this.description = description || 'No description provided.';
        this.category = category || Category.NONE;
    }
}