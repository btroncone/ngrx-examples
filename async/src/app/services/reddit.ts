import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class Reddit{
    constructor(private http : Http){}

    fetchPosts(reddit : string){
        return this.http
            .get(`https://www.reddit.com/r/${reddit.replace(' ', '')}.json`)
            .map(response => response.json());
    }
}