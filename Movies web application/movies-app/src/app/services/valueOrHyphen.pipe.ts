import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'valueOrHyphen' })
export class ValueOrHyphenPipe implements PipeTransform {
    transform(value: string): string {
        return value ? value : '- - -';
    }
}