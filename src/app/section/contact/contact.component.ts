import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public formContact: FormGroup;
  public sendEnvelope: boolean = false;
  goback = false;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  private labels(n: number) {
    return new Array(n);
  }

  private createForm(): void {
    this.formContact = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      description: this.formBuilder.control('', [Validators.required]),
    });
  }

  public send(): void {
    this.sendEnvelope = true;
    this.goback = true;
    this.goback = false;
  }

}
