import {HttpClient} from "@angular/common/http";
import {Pipe, PipeTransform} from "@angular/core";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Pipe({
	name: "codeFromUrl",
	standalone: true,
})
export class CodeFromUrlPipe implements PipeTransform {
	constructor(private http: HttpClient) {}
	
	transform(url: string): Observable<string> {
		if( !url) {
			return of("");
		}
		
		return this.http.get(url, {responseType: "text"}).pipe(
			map(response => response || ""),
			catchError(() => of("Error loading code")),
		);
	}
}