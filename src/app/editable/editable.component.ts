import { Directive, Component, HostListener, ElementRef, ContentChild, AfterViewChecked } from '@angular/core';

@Directive({
    selector: '[editableField]'
})
export class EditableDirective {
}

@Directive({
    selector: '[inputForEditable]'
})
export class InputForEditableDirective {
}

@Directive({
    selector: '[containerForEditable]'
})
export class ContainerForEditableDirective {
}

@Component({
    selector: 'app-editable',
    templateUrl: './editable.component.html',
    styleUrls: ['./editable.component.scss']
})
export class EditableComponent implements AfterViewChecked {

    editing = false;
    setFocus = false;

    static emptyValueView = '<Пусто>';

    @ContentChild(EditableDirective, { descendants: true, read: ElementRef }) editableField!: ElementRef;
    @ContentChild(InputForEditableDirective, { descendants: true, read: ElementRef }) inputField!: ElementRef;

    ngAfterViewChecked() {
        if (this.setFocus) {
            setTimeout(() => {
                const currentValue = this.editableField.nativeElement.innerText;
                this.inputField.nativeElement.value = currentValue === EditableComponent.emptyValueView ? '' : currentValue;
                this.inputField.nativeElement.focus();
                this.setFocus = false;
            }, 0);
        }
    }

    @HostListener('dblclick') onDblClick() {
        this.editing = true;
        this.setFocus = true;
    }

    @HostListener('keydown.esc') onEscape() {
        this.editing = false;
    }

    @HostListener('focusout') onBlur() {
        if (this.editing) {
            this.applyEdit();
        }
    }

    @HostListener('keydown.enter') onEnter() {
        this.applyEdit();
    }

    applyEdit() {
        this.editing = false;
        this.editableField.nativeElement.innerText = this.inputField.nativeElement.value || EditableComponent.emptyValueView;
    }

}


