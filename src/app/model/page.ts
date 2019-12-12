import { Color } from "./color"

export class Page {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Color[];
}