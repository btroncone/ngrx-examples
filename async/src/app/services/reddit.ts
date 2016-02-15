import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class Reddit{
    constructor(private http : Http){}

    fetchPosts(reddit : string){
        debugger;
        return this.http
            .get(`https://www.reddit.com/r/${reddit.replace(' ', '')}.json`)
            .map(response => response.json());
    }
}