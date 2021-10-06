import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-component',
  template: `{{ md }}`,
  styles: [``]
})
export class PostComponent  {
    md: string | undefined;
    constructor(private http:HttpClient) { }

    async ngOnInit() {
        this.md = await this.http.get(``, { responseType: 'text'}).toPromise();
    }
}