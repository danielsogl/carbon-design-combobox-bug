import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonModule,
  ComboBoxModule,
  ListItem,
} from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, ComboBoxModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly cdr = inject(ChangeDetectorRef);

  protected readonly listItems = signal<ListItem[]>([]);

  protected readonly form = new FormGroup({
    comboBox: new FormControl(1),
  });

  protected lazyLoadItems() {
    this.listItems.set([
      { content: 'Item 1', value: 1, selected: false },
      { content: 'Item 2', value: 2, selected: false },
      { content: 'Item 3', value: 3, selected: false },
    ]);
    this.cdr.detectChanges();
  }
}
