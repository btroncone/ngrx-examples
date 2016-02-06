import {Injectable} from "angular2/core";
import {Store, Action} from "@ngrx/store";
import {SET_VISIBILITY_FILTER} from "../reducers/visibility-filter";
import {BehaviorSubject} from "rxjs/Rx";


@Injectable()
export class VisibilityFilterActions{
    private actions$: BehaviorSubject<Action> = new BehaviorSubject({type: null, payload: null});

    constructor(private store : Store){}

    setVisibilityFilter(filter: string){
        this.store.dispatch({type: SET_VISIBILITY_FILTER, payload: filter});
    }

}