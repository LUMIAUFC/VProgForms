import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { formatAccessibleMath } from '../utils/accessible-math.utils';

@Pipe({
  name: 'accessibleMath',
  pure: false
})
export class AccessibleMathPipe implements PipeTransform {
  constructor(private translate: TranslateService) { }

  transform(value: string): string {
    return formatAccessibleMath(value, (key: string) => this.translate.instant(key));
  }
}
