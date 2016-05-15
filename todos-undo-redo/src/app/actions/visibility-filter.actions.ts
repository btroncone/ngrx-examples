import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {SET_VISIBILITY_FILTER} from "../reducers/visibility-filter";


@Injectable()
export class VisibilityFilterActions{

    constructor(private store : Store<any>){}

    setVisibilityFilter(filter: string){
        this.store.dispatch({type: SET_VISIBILITY_FILTER, payload: filter});
    }

}