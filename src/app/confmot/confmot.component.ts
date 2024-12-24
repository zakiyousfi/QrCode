import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confmot',
  templateUrl: './confmot.component.html',
  styleUrls: ['./confmot.component.css']
})
  
export class ConfmotComponent implements OnInit { 
  formulaire!: FormGroup;
  constructor(private formBuilder: FormBuilder){} ngOnInit() {
  this.formulaire= this.formBuilder.group({
  email:['',Validators.required], MotDePasse:['',Validators.required],
  confirmationMotDePasse:['',Validators.required]
  });

}
}
