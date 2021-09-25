import { ContentObject } from "./content-obj.model";

export interface CategorizedContent {

    category: string | undefined;

    contentList: ContentObject[] | undefined;
}