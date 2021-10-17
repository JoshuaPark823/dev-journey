import { Category } from './../enum/categories.enum';

export interface PostObject {

    title: string;

    markdownPath: string;

    configPath: string;

    filePath: string;

    description: string;

    categories: Category[];
}